import React, { useState, useEffect } from "react";
import { Code, Zap, Sparkles, ArrowRight, Star } from "lucide-react";

const DevAcademyLoader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  const loadingTexts = [
    "Инициализируем код...",
    "Загружаем курсы...",
    "Подключаем менторов...",
    "Готовим для тебя IT-будущее...",
    "Добро пожаловать!",
  ];

  useEffect(() => {
    setShowLogo(true);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete?.(), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const textInterval = setInterval(() => {
      setCurrentText((prev) => {
        if (prev >= loadingTexts.length - 1) {
          clearInterval(textInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-500/20 font-mono text-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {
              ["</>", "{}", "()", "[]", "const", "function", "React", "Next.js", "TypeScript", "Node.js"][
                Math.floor(Math.random() * 10)
              ]
            }
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Main Logo */}
        <div className={`transition-all duration-1000 ${showLogo ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
          {/* Outer Ring */}
          <div className="relative mx-auto mb-8">
            <div className="w-32 h-32 mx-auto relative">
              {/* Rotating Border */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-purple-500 animate-spin"
                style={{ animation: "spin 3s linear infinite" }}
              >
                <div className="absolute inset-1 bg-black rounded-full"></div>
              </div>

              {/* Inner Circle with Logo */}
              <div className="absolute inset-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center">
                <div className="relative">
                  {/* Logo Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                    <Code className="w-8 h-8 text-white animate-pulse" />
                  </div>

                  {/* Floating Particles */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping"
                      style={{
                        left: `${20 + Math.cos((i * 45 * Math.PI) / 180) * 25}px`,
                        top: `${20 + Math.sin((i * 45 * Math.PI) / 180) * 25}px`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: "2s",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Brand Name */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-2">
              <span className="text-white">Dev</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 animate-pulse">
                Academy
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-2 text-emerald-400">
              <Sparkles className="w-4 h-4 animate-bounce" />
              <span className="text-sm font-medium">Твое IT-будущее начинается здесь</span>
              <Sparkles className="w-4 h-4 animate-bounce" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>

          {/* Progress Section */}
          <div className="w-80 mx-auto">
            {/* Loading Text */}
            <div className="h-8 mb-4 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <span className="text-emerald-400 font-medium ml-4 animate-pulse">{loadingTexts[currentText]}</span>
              </div>
            </div>

            {/* Progress Bar Container */}
            <div className="relative">
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 rounded-full transition-all duration-300 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>

              {/* Progress Percentage */}
              <div className="mt-3 text-center">
                <span className="text-2xl font-bold text-white">{progress}%</span>
              </div>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-6 mt-8">
            {[
              { icon: Zap, label: "Быстро", delay: "0s" },
              { icon: Star, label: "Качественно", delay: "0.2s" },
              { icon: ArrowRight, label: "Эффективно", delay: "0.4s" },
            ].map(({ icon: Icon, label, delay }, index) => (
              <div key={index} className="flex flex-col items-center animate-bounce" style={{ animationDelay: delay }}>
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg border border-emerald-500/30 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-xs text-zinc-400">{label}</span>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="mt-8 max-w-md mx-auto">
            <p className="text-zinc-400 text-sm italic">"Каждый эксперт когда-то был новичком"</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default DevAcademyLoader;
