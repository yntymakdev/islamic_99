// pages/index.js
"use client";
import { useState, useRef } from "react";
import Head from "next/head";

export default function Home() {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [processedAudio, setProcessedAudio] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type.startsWith("video/") || selectedFile.type.startsWith("audio/")) {
        setFile(selectedFile);
        setError("");
        setProcessedAudio(null);
      } else {
        setError("Пожалуйста, выберите видео или аудио файл");
      }
    }
  };

  const processAudio = async () => {
    if (!file) return;

    setProcessing(true);
    setError("");

    try {
      // Создаем audio context
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();

      // Читаем файл как ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();

      // Декодируем аудио
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      // Применяем простой алгоритм подавления музыки
      // Это базовая реализация - для лучших результатов нужны более сложные алгоритмы
      const processedBuffer = await removeBackgroundMusic(audioContext, audioBuffer);

      // Конвертируем обработанный буфер в blob
      const wavBlob = audioBufferToWav(processedBuffer);
      const audioUrl = URL.createObjectURL(wavBlob);

      setProcessedAudio({
        url: audioUrl,
        blob: wavBlob,
        filename: `voice_extracted_${file.name.replace(/\.[^/.]+$/, "")}.wav`,
      });
    } catch (err) {
      console.error("Ошибка обработки:", err);
      setError("Ошибка при обработке файла. Попробуйте другой формат.");
    } finally {
      setProcessing(false);
    }
  };

  const removeBackgroundMusic = async (audioContext, audioBuffer) => {
    const channels = audioBuffer.numberOfChannels;
    const length = audioBuffer.length;
    const sampleRate = audioBuffer.sampleRate;

    // Создаем новый буфер для обработанного аудио
    const processedBuffer = audioContext.createBuffer(1, length, sampleRate);
    const output = processedBuffer.getChannelData(0);

    if (channels >= 2) {
      // Если стерео, применяем центральное подавление (vocal isolation)
      const left = audioBuffer.getChannelData(0);
      const right = audioBuffer.getChannelData(1);

      for (let i = 0; i < length; i++) {
        // Вычитаем правый канал из левого для изоляции вокала
        output[i] = (left[i] - right[i]) * 0.5;
      }
    } else {
      // Если моно, применяем простой фильтр
      const input = audioBuffer.getChannelData(0);

      // Простой high-pass фильтр для выделения голосовых частот
      let prev = 0;
      const alpha = 0.1;

      for (let i = 0; i < length; i++) {
        const filtered = alpha * (prev + input[i] - (i > 0 ? input[i - 1] : 0));
        output[i] = filtered;
        prev = filtered;
      }
    }

    return processedBuffer;
  };

  const audioBufferToWav = (buffer) => {
    const length = buffer.length;
    const arrayBuffer = new ArrayBuffer(44 + length * 2);
    const view = new DataView(arrayBuffer);
    const channels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;

    // WAV header
    const writeString = (offset, string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    writeString(0, "RIFF");
    view.setUint32(4, 36 + length * 2, true);
    writeString(8, "WAVE");
    writeString(12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, channels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, "data");
    view.setUint32(40, length * 2, true);

    // Convert float samples to 16-bit PCM
    const channelData = buffer.getChannelData(0);
    let offset = 44;
    for (let i = 0; i < length; i++) {
      const sample = Math.max(-1, Math.min(1, channelData[i]));
      view.setInt16(offset, sample * 0x7fff, true);
      offset += 2;
    }

    return new Blob([arrayBuffer], { type: "audio/wav" });
  };

  const downloadAudio = () => {
    if (!processedAudio) return;

    const a = document.createElement("a");
    a.href = processedAudio.url;
    a.download = processedAudio.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const resetAll = () => {
    setFile(null);
    setProcessedAudio(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Voice Extractor - Извлечение голоса из видео</title>
        <meta name="description" content="Удаление музыки и извлечение голоса из видео файлов" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">🎤 Voice Extractor</h1>
            <p className="text-lg text-gray-600">Загрузите видео или аудио файл и получите только голос без музыки</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Загрузка файла */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Выберите видео или аудио файл</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-400 transition-colors">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                      <span>Загрузить файл</span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="sr-only"
                        accept="video/*,audio/*"
                        onChange={handleFileSelect}
                      />
                    </label>
                    <p className="pl-1">или перетащите сюда</p>
                  </div>
                  <p className="text-xs text-gray-500">MP4, MOV, AVI, MP3, WAV до 100MB</p>
                </div>
              </div>
            </div>

            {/* Информация о файле */}
            {file && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Выбранный файл:</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{file.name}</p>
                    <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <button onClick={resetAll} className="text-red-600 hover:text-red-800 text-sm">
                    Удалить
                  </button>
                </div>
              </div>
            )}

            {/* Ошибки */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Кнопка обработки */}
            <div className="mb-6">
              <button
                onClick={processAudio}
                disabled={!file || processing}
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {processing ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Обработка...
                  </div>
                ) : (
                  "🎵 Извлечь голос"
                )}
              </button>
            </div>

            {/* Результат */}
            {processedAudio && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-medium text-green-900 mb-3">✅ Обработка завершена!</h3>

                <div className="mb-4">
                  <audio controls src={processedAudio.url} className="w-full">
                    Ваш браузер не поддерживает audio элемент.
                  </audio>
                </div>

                <button
                  onClick={downloadAudio}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  📥 Скачать обработанный файл
                </button>
              </div>
            )}

            {/* Информация */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">ℹ️ Как это работает:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Для стерео файлов: применяется центральное подавление</li>
                <li>• Для моно файлов: используется частотная фильтрация</li>
                <li>• Результат может варьироваться в зависимости от исходного материала</li>
                <li>• Лучше всего работает с четко разделенным вокалом и инструментами</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
