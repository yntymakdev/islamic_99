"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Award, Zap, Gift } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Frontend", "Backend", "Full-Stack", "Mobile"];

  // Typing animation
  useEffect(() => {
    const word = words[currentWordIndex];
    let index = 0;
    const interval = setInterval(() => {
      if (index <= word.length) {
        setTypedText(word.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentWordIndex]);

  // Animated stats
  const [stats, setStats] = useState({ students: 0, projects: 0, employment: 0 });

  useEffect(() => {
    const animateValue = (start: number, end: number, key: string) => {
      const duration = 2000;
      const increment = end / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setStats((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    animateValue(0, 500, "students");
    animateValue(0, 50, "projects");
    animateValue(0, 95, "employment");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Special badge for students */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6 animate-bounce">
              <Gift className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-purple-400 font-medium">Скидка 30% для студентов!</span>
              <Sparkles className="w-4 h-4 ml-2 text-purple-400" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Стань</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient">
                {typedText}
              </span>
              <span className="animate-blink">|</span>
              <br />
              <span className="text-white">разработчиком</span>
            </h1>

            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              <span className="text-emerald-400 font-semibold">Начни с нуля</span> и получи работу в IT за
              <span className="text-yellow-400 font-bold"> 4 месяца</span>. Учись по выходным, практикуйся на реальных
              проектах!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-white overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
                <span className="relative z-10 flex items-center justify-center">
                  Начать бесплатно
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button className="group px-8 py-4 bg-zinc-900/80 backdrop-blur border border-zinc-700 hover:border-emerald-500 rounded-xl font-bold text-white transition-all hover:shadow-xl hover:shadow-emerald-500/10">
                <Play className="w-5 h-5 mr-2 inline-block group-hover:text-emerald-400" />
                Смотреть Demo
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-zinc-900/50 backdrop-blur rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all transform hover:scale-105">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  {stats.students}+
                </div>
                <div className="text-sm text-zinc-400 flex items-center justify-center mt-1">
                  <Users className="w-3 h-3 mr-1" />
                  Студентов
                </div>
              </div>

              <div className="text-center p-4 bg-zinc-900/50 backdrop-blur rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all transform hover:scale-105">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {stats.projects}+
                </div>
                <div className="text-sm text-zinc-400 flex items-center justify-center mt-1">
                  <Award className="w-3 h-3 mr-1" />
                  Проектов
                </div>
              </div>

              <div className="text-center p-4 bg-zinc-900/50 backdrop-blur rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all transform hover:scale-105">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  {stats.employment}%
                </div>
                <div className="text-sm text-zinc-400 flex items-center justify-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Трудоустройство
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 border-2 border-black flex items-center justify-center text-white font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="text-yellow-400 flex items-center">
                  {"⭐".repeat(5)}
                  <span className="ml-2 text-white font-semibold">4.9/5</span>
                </div>
                <div className="text-zinc-400">от наших студентов</div>
              </div>
            </div>
          </div>

          {/* Right side - Interactive card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-3xl blur-3xl animate-pulse"></div>

            <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 rounded-3xl p-8 transform hover:rotate-1 transition-all duration-500">
              {/* Discount timer */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                <Zap className="w-4 h-4 inline mr-1" />
                Осталось 24 часа!
              </div>

              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">Первый урок бесплатно!</h3>
                <p className="text-emerald-400">Попробуй прямо сейчас</p>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  "✅ Личный ментор 24/7",
                  "✅ Готовое портфолио",
                  "✅ Помощь с трудоустройством",
                  "✅ Сертификат по окончании",
                  "✅ Доступ к сообществу",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center text-zinc-300 opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl p-4 border border-emerald-500/30">
                <div className="text-sm text-emerald-400 mb-2">Специальная цена:</div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-white">759</span>
                  <span className="text-zinc-400 line-through">1299</span>
                  <span className="text-emerald-400 text-sm">сом/2 недели</span>
                </div>
                <div className="text-xs text-zinc-400 mt-1">* для первых 10 студентов</div>
              </div>

              <button className="w-full mt-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-white transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50">
                Забронировать место
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }

        .animate-blink {
          animation: blink 1s ease infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
