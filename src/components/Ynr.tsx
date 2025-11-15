import { Clock, Crown, Lock, Shield, Sparkles, Target, TrendingUp, Trophy, Users, Zap } from "lucide-react";
import { useState } from "react";

// Страница авторизации в стиле Blue Lock
export function  AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '', code: '' });
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, addNotification, setCurrentPage } = React.useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      setUser({ name: 'Striker #299', email: formData.email, level: 'A+' });
      addNotification('Доступ к системе BLUE LOCK получен', 'success');
      setCurrentPage('profile');
    } else {
      if (formData.code !== 'BLUELOCK2025') {
        addNotification('Неверный код приглашения', 'error');
        return;
      }
      setUser({ name: formData.name, email: formData.email, level: 'E' });
      addNotification('Регистрация в системе успешна. Начальный уровень: E', 'success');
      setCurrentPage('profile');
    }
  };

  return (
    <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          opacity: 0.02
        }}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md p-8 m-4">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800">
          {/* Угловые элементы */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500"></div>
          
          <div className="p-8">
            <div className="text-center mb-8">
              <Hexagon className="w-16 h-16 text-cyan-500 mx-auto mb-4" strokeWidth={1} />
              <h2 className="text-3xl font-black text-white mb-2">
                {isLogin ? 'SYSTEM ACCESS' : 'NEW STRIKER'}
              </h2>
              <p className="text-cyan-400 text-sm tracking-wider">BLUE LOCK AUTHORIZATION</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Имя бойца"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Код приглашения"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      value={formData.code}
                      onChange={(e) => setFormData({...formData, code: e.target.value})}
                      required
                    />
                    <Lock className="absolute right-3 top-3.5 w-5 h-5 text-gray-500" />
                  </div>
                </>
              )}
              
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Пароль"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              <button
                type="submit"
                className="w-full relative py-3 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform skew-x-12"></div>
                <span className="relative text-white font-bold tracking-wider">
                  {isLogin ? 'ВОЙТИ В СИСТЕМУ' : 'НАЧАТЬ ОТБОР'}
                </span>
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-gray-500 hover:text-cyan-400 transition-colors text-sm"
              >
                {isLogin ? 'Нет доступа? Получить приглашение' : 'Уже есть доступ? Войти'}
              </button>
            </div>
            
            {!isLogin && (
              <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/30">
                <p className="text-xs text-cyan-400 text-center">
                  Подсказка: используйте код BLUELOCK2025
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfilePage = () => {
  const { user, setUser, setCurrentPage, bookings } = React.useContext(AppContext);
  const [activeTab, setActiveTab] = useState('stats');
  
  if (!user) {
    return null;
  }
  
  const stats = {
    power: 85,
    speed: 78,
    technique: 92,
    stamina: 70,
    mental: 88,
    overall: 83
  };
  
  const achievements = [
    { icon: <Trophy />, name: 'First Selection Pass', date: '15.09.2025', rarity: 'legendary' },
    { icon: <Zap />, name: 'Speed Demon', date: '20.09.2025', rarity: 'epic' },
    { icon: <Target />, name: 'Perfect Strike', date: '22.09.2025', rarity: 'rare' },
    { icon: <Shield />, name: 'Iron Defense', date: '25.09.2025', rarity: 'common' }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Профиль заголовок */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 mb-8 relative">
            <AnimatedLines />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Hexagon className="w-24 h-24 text-cyan-500" strokeWidth={2} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black text-white">
                      {user.name[0]}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h1 className="text-3xl font-black text-white mb-2">{user.name}</h1>
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold transform skew-x-12">
                      <span className="block transform -skew-x-12">LEVEL {user.level || 'A+'}</span>
                    </span>
                    <span className="text-gray-400">Striker #299</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  setUser(null);
                  setCurrentPage('home');
                }}
                className="px-6 py-2 border border-red-500/50 text-red-400 hover:bg-red-500/10 transition-colors"
              >
                LOGOUT
              </button>
            </div>
          import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Star, Users, Trophy, Clock, MapPin, Menu, X, Play, ArrowRight, Sparkles, Shield, Target, Zap, Calendar, Award, Flame, Heart, Send, Phone, Mail, CheckCircle, AlertCircle, TrendingUp, BarChart, Activity, Video, Camera, Instagram, Youtube, MessageCircle, Swords, Wind, Mountain, Lock, Unlock, Eye, EyeOff, Timer, Crown, Hexagon, Pentagon, Triangle, Square, Circle, Diamond } from 'lucide-react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [notifications, setNotifications] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [bookings, setBookings] = useState([]);
  
  const addNotification = (message, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  };

  return (
    <AppContext.Provider value={{
      user, setUser,
      currentPage, setCurrentPage,
      notifications, addNotification,
      selectedProgram, setSelectedProgram,
      bookings, setBookings
    }}>
      {children}
    </AppContext.Provider>
  );
};

const NotificationSystem = () => {
  const { notifications } = React.useContext(AppContext);
  
  return (
    <div className="fixed top-24 right-4 z-50 space-y-2">
      {notifications.map(notif => (
        <div
          key={notif.id}
          className={`px-6 py-4 rounded-lg backdrop-blur-xl animate-slide-in flex items-center space-x-3 border ${
            notif.type === 'success' 
              ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400' 
              : 'bg-red-500/10 border-red-500/50 text-red-400'
          }`}
          style={{
            boxShadow: notif.type === 'success' 
              ? '0 0 40px rgba(6, 182, 212, 0.3)' 
              : '0 0 40px rgba(239, 68, 68, 0.3)'
          }}
        >
          <div className="relative">
            <div className={`absolute inset-0 ${notif.type === 'success' ? 'bg-cyan-400' : 'bg-red-400'} blur-xl animate-pulse`}></div>
            {notif.type === 'success' ? <CheckCircle size={24} className="relative" /> : <AlertCircle size={24} className="relative" />}
          </div>
          <span className="font-medium">{notif.message}</span>
        </div>
      ))}
    </div>
  );
};

const AnimatedLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-slide-horizontal"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-slide-horizontal-reverse"></div>
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-slide-vertical"></div>
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-slide-vertical-reverse"></div>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentPage, setCurrentPage, user, addNotification } = React.useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20' 
        : 'bg-gradient-to-b from-slate-950/90 to-transparent'
    }`}>
      <AnimatedLines />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group relative"
          >
            <div className="relative">
              <Hexagon className="w-12 h-12 text-cyan-500 animate-spin-slow" strokeWidth={1} />
              <Shield className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white tracking-wider">TOKYO WRESTLING</h1>
              <p className="text-xs text-cyan-400 tracking-widest">BLUE LOCK SYSTEM</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'programs', 'ranking', 'training', 'profile'].map((page) => (
              <button
                key={page}
                onClick={() => handleNavClick(page)}
                className={`relative px-3 py-2 font-medium transition-all ${
                  currentPage === page ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {page === 'home' && 'Главная'}
                {page === 'programs' && 'Программы'}
                {page === 'ranking' && 'Рейтинг'}
                {page === 'training' && 'Тренировки'}
                {page === 'profile' && 'Профиль'}
                {currentPage === page && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                )}
              </button>
            ))}
            
            {user ? (
              <button 
                onClick={() => handleNavClick('profile')}
                className="relative px-6 py-2.5 font-bold overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform skew-x-12"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform -skew-x-12 opacity-50"></div>
                <span className="relative text-white">{user.name}</span>
              </button>
            ) : (
              <button 
                onClick={() => handleNavClick('auth')}
                className="relative px-6 py-2.5 font-bold text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/10 transition-all overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">ВХОД В СИСТЕМУ</span>
              </button>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyan-400">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Мобильное меню */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-t border-cyan-500/20">
            <div className="flex flex-col p-4 space-y-3">
              {['home', 'programs', 'ranking', 'training', 'profile'].map((page) => (
                <button 
                  key={page}
                  onClick={() => handleNavClick(page)} 
                  className={`text-left py-2 ${currentPage === page ? 'text-cyan-400' : 'text-gray-400'}`}
                >
                  {page === 'home' && 'Главная'}
                  {page === 'programs' && 'Программы'}
                  {page === 'ranking' && 'Рейтинг'}
                  {page === 'training' && 'Тренировки'}
                  {page === 'profile' && 'Профиль'}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const { setCurrentPage } = React.useContext(AppContext);
  const [glitchText, setGlitchText] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Анимированный фон с сеткой */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.03
        }}></div>
        
        {/* Анимированные геометрические фигуры */}
        <div className="absolute top-20 right-10 w-64 h-64">
          <Hexagon className="w-full h-full text-cyan-500/10 animate-spin-slow" />
        </div>
        <div className="absolute bottom-20 left-10 w-48 h-48">
          <Pentagon className="w-full h-full text-blue-500/10 animate-spin-reverse" />
        </div>
        
        {/* Светящиеся частицы */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Бейдж в стиле Blue Lock */}
            <div className="inline-flex items-center">
              <div className="flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                <Lock className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-bold tracking-wider">SELECTION PHASE 2025</span>
              </div>
              <div className="ml-px h-8 w-8 bg-cyan-500/10 border-y border-r border-cyan-500/30 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className={`text-5xl lg:text-7xl font-black leading-tight ${glitchText ? 'animate-glitch' : ''}`}>
                <span className="text-white">СТАНЬ</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-gradient">
                  ЭЛИТНЫМ
                </span>
                <br />
                <span className="text-white text-3xl lg:text-5xl opacity-80">БОЙЦОМ</span>
              </h1>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                Система отбора <span className="text-cyan-400 font-bold">BLUE LOCK</span> для вольной борьбы. 
                Только сильнейшие достигнут вершины.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setCurrentPage('auth')}
                className="group relative px-8 py-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform skew-x-12 group-hover:skew-x-6 transition-transform"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform -skew-x-12 group-hover:-skew-x-6 transition-transform opacity-50"></div>
                <span className="relative flex items-center justify-center text-white font-bold text-lg">
                  НАЧАТЬ ОТБОР
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group relative px-8 py-4 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all">
                <span className="flex items-center justify-center text-cyan-400 font-bold">
                  <Play className="mr-2" size={20} />
                  СИСТЕМА
                </span>
              </button>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'В СИСТЕМЕ', value: '299', icon: Users },
                { label: 'ЭЛИТА', value: '11', icon: Crown },
                { label: 'УРОВЕНЬ', value: 'S+', icon: Zap }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-cyan-500/5 transform skew-x-12"></div>
                  <div className="relative p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                    <stat.icon className="w-5 h-5 text-cyan-400 mb-2" />
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D визуализация */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Голографический дисплей */}
              <div className="absolute inset-0 border-2 border-cyan-500/20 transform rotate-3">
                <div className="absolute inset-4 border border-cyan-500/10 transform -rotate-6">
                  <div className="absolute inset-4 border border-cyan-500/5"></div>
                </div>
              </div>
              
              {/* Центральный элемент */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Hexagon className="w-64 h-64 text-cyan-500/20 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-6xl font-black text-cyan-400/20">LOCK</p>
                      <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Орбитальные элементы */}
              <div className="absolute top-10 right-10 w-16 h-16">
                <Diamond className="w-full h-full text-cyan-400/40 animate-float" />
              </div>
              <div className="absolute bottom-10 left-10 w-20 h-20">
                <Triangle className="w-full h-full text-blue-400/40 animate-float-delay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgramsPage = () => {
  const { setSelectedProgram, setCurrentPage, addNotification, user } = React.useContext(AppContext);
  const [hoveredProgram, setHoveredProgram] = useState(null);
  
  const programs = [
    {
      id: 1,
      level: 'FIFTH SELECTION',
      title: 'Начальный уровень',
      description: 'Базовая подготовка и отбор талантов',
      requirements: ['Возраст 6-10 лет', 'Медицинская справка', 'Желание побеждать'],
      price: 15000,
      color: 'from-gray-500 to-gray-600',
      rank: 'E',
      spots: 50
    },
    {
      id: 2,
      level: 'THIRD SELECTION',
      title: 'Продвинутый уровень',
      description: 'Интенсивная подготовка элитных бойцов',
      requirements: ['Возраст 11-16 лет', 'Опыт от 2 лет', 'Прохождение теста'],
      price: 25000,
      color: 'from-blue-500 to-cyan-500',
      rank: 'B',
      spots: 30
    },
    {
      id: 3,
      level: 'FIRST SELECTION',
      title: 'Элитная программа',
      description: 'Подготовка чемпионов мирового уровня',
      requirements: ['Возраст 16+', 'Разряд КМС и выше', 'Отбор 1 из 10'],
      price: 45000,
      color: 'from-cyan-400 to-blue-400',
      rank: 'S',
      spots: 11
    },
    {
      id: 4,
      level: 'WILD CARD',
      title: 'Специальная программа',
      description: 'Индивидуальная подготовка по системе Blue Lock',
      requirements: ['Особое приглашение', 'Любой возраст', 'Экстремальная мотивация'],
      price: 100000,
      color: 'from-purple-500 to-pink-500',
      rank: 'SS',
      spots: 3
    }
  ];

  const handleSelectProgram = (program) => {
    if (!user) {
      addNotification('Требуется авторизация в системе', 'error');
      setCurrentPage('auth');
      return;
    }
    setSelectedProgram(program);
    addNotification(`Программа ${program.level} выбрана!`, 'success');
    setCurrentPage('training');
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 px-6 py-2 bg-cyan-500/10 border border-cyan-500/30">
              <Hexagon className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold tracking-wider">SELECTION PROGRAMS</span>
            </div>
          </div>
          <h1 className="text-5xl font-black text-white mb-4">
            ВЫБЕРИ СВОЙ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">УРОВЕНЬ</span>
          </h1>
          <p className="text-xl text-gray-400">Только сильнейшие пройдут отбор</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.id}
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
              className="relative group"
            >
              {/* Фоновая подсветка при наведении */}
              {hoveredProgram === program.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl"></div>
              )}
              
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 transition-all p-8">
                {/* Угловые элементы */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/50"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50"></div>
                
                {/* Ранг */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{program.level}</p>
                    <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                  </div>
                  <div className={`px-4 py-2 bg-gradient-to-r ${program.color} transform skew-x-12`}>
                    <span className="block transform -skew-x-12 text-white font-black text-2xl">{program.rank}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{program.description}</p>

                {/* Требования */}
                <div className="space-y-2 mb-6">
                  {program.requirements.map((req, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <ChevronRight className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>

                {/* Информация о местах */}
                <div className="flex items-center justify-between mb-6 py-3 border-t border-slate-800">
                  <div>
                    <p className="text-sm text-gray-500">Мест доступно</p>
                    <p className="text-xl font-bold text-cyan-400">{program.spots}/{program.spots + 20}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Месячный взнос</p>
                    <p className="text-2xl font-bold text-white">{program.price.toLocaleString()}₽</p>
                  </div>
                </div>

                {/* Кнопка выбора */}
                <button
                  onClick={() => handleSelectProgram(program)}
                  className="w-full relative py-3 overflow-hidden group/btn"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${program.color} transform skew-x-12 group-hover/btn:skew-x-6 transition-transform`}></div>
                  <span className="relative text-white font-bold">ВЫБРАТЬ ПРОГРАММУ</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Страница тренировок в стиле Blue Lock
const TrainingPage = () => {
  const { selectedProgram, user, addNotification, bookings, setBookings } = React.useContext(AppContext);
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [progress, setProgress] = useState(65);
  
  const trainings = [
    {
      id: 1,
      name: 'PHYSICAL ASSESSMENT',
      type: 'Физическая подготовка',
      intensity: 95,
      duration: '120 мин',
      trainer: 'Yamada Takeshi',
      time: '06:00',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 2,
      name: 'TECHNIQUE DRILL',
      type: 'Техническая тренировка',
      intensity: 75,
      duration: '90 мин',
      trainer: 'Suzuki Ken',
      time: '10:00',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'SPARRING SESSION',
      type: 'Спарринг',
      intensity: 100,
      duration: '60 мин',
      trainer: 'Tanaka Yuki',
      time: '16:00',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      name: 'MENTAL TRAINING',
      type: 'Ментальная подготовка',
      intensity: 60,
      duration: '45 мин',
      trainer: 'AI System',
      time: '18:00',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const handleBookTraining = (training) => {
    if (!user) {
      addNotification('Требуется авторизация', 'error');
      return;
    }
    
    const isBooked = bookings.some(b => b.id === training.id);
    if (isBooked) {
      addNotification('Тренировка уже забронирована', 'error');
      return;
    }
    
    setBookings([...bookings, training]);
    addNotification(`${training.name} добавлена в расписание`, 'success');
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 px-6 py-2 bg-cyan-500/10 border border-cyan-500/30">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold tracking-wider">TRAINING SYSTEM</span>
            </div>
          </div>
          <h1 className="text-5xl font-black text-white mb-4">
            РЕЖИМ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ПОДГОТОВКИ</span>
          </h1>
        </div>

        {/* Прогресс пользователя */}
        {user && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Ваш прогресс</p>
                  <p className="text-3xl font-bold text-white">{progress}%</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-cyan-400">{bookings.length}</p>
                    <p className="text-xs text-gray-500 uppercase">Тренировок</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">A+</p>
                    <p className="text-xs text-gray-500 uppercase">Ранг</p>
                  </div>
                </div>
              </div>
              
              {/* Прогресс бар */}
              <div className="relative h-4 bg-slate-800 overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-white/50 font-bold">NEXT LEVEL: 100%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Сетка тренировок */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {trainings.map((training) => (
            <div key={training.id} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 transition-all p-6">
                {/* Угловые маркеры */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{training.name}</h3>
                    <p className="text-sm text-gray-400">{training.type}</p>
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${training.color} transform skew-x-12`}>
                    <span className="block transform -skew-x-12 text-white font-bold text-sm">{training.time}</span>
                  </div>
                </div>
                
                {/* Интенсивность */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-500 uppercase">Интенсивность</span>
                    <span className="text-sm font-bold text-cyan-400">{training.intensity}%</span>
                  </div>
                  <div className="h-2 bg-slate-800">
                    <div 
                      className={`h-full bg-gradient-to-r ${training.color}`}
                      style={{ width: `${training.intensity}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{training.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{training.trainer}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleBookTraining(training)}
                  className="w-full py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold hover:bg-cyan-500/20 transition-all"
                >
                  ЗАПИСАТЬСЯ
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* График тренировок */}
        {bookings.length > 0 && (
          <div className="max-w-5xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">МОИ ТРЕНИРОВКИ</h2>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6">
              <div className="space-y-3">
                {bookings.map((booking, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 border border-slate-700">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
                      <div>
                        <p className="text-white font-semibold">{booking.name}</p>
                        <p className="text-xs text-gray-400">{booking.time} • {booking.duration}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setBookings(bookings.filter(b => b.id !== booking.id));
                        addNotification('Тренировка отменена', 'error');
                      }}
                      className="px-3 py-1 text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      ОТМЕНА
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
              className={`px-6 py-2 font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-400'
                  : 'bg-slate-900/50 border border-slate-800 text-gray-400 hover:text-white'
              }`}
            >
              {category === 'overall' && 'ВСЕ ВРЕМЯ'}
              {category === 'monthly' && 'МЕСЯЦ'}
              {category === 'weekly' && 'НЕДЕЛЯ'}
            </button>
          ))}
        </div>

        {/* Таблица рейтинга */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800">
            {rankings.map((player, index) => (
              <div
                key={player.rank}
                className={`relative flex items-center justify-between p-4 border-b border-slate-800 hover:bg-slate-800/50 transition-all group ${
                  player.rank <= 11 ? 'border-l-4 border-cyan-500' : ''
                }`}
              >
                {/* Эффект подсветки для топ-11 */}
                {player.rank <= 11 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                )}
                
                <div className="flex items-center space-x-6">
                  {/* Ранг */}
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getRankColor(player.rank)} flex items-center justify-center transform rotate-45`}>
                      <span className="transform -rotate-45 text-white font-black text-lg">
                        {player.rank}
                      </span>
                    </div>
                    {player.rank === 1 && (
                      <Crown className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400" />
                    )}
                  </div>
                  
                  {/* Имя игрока */}
                  <div>
                    <p className="text-white font-bold text-lg">{player.name}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-0.5 text-xs font-bold ${
                        player.level.startsWith('S') ? 'bg-purple-500/20 text-purple-400' :
                        player.level.startsWith('A') ? 'bg-blue-500/20 text-blue-400' :
                        player.level.startsWith('B') ? 'bg-green-500/20 text-green-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        LEVEL {player.level}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  {/* Изменение позиции */}
                  <div className="flex items-center space-x-1">
                    {player.change === 'up' && <TrendingUp className="w-4 h-4 text-green-400" />}
                    {player.change === 'down' && <TrendingUp className="w-4 h-4 text-red-400 transform rotate-180" />}
                    {player.change === 'same' && <div className="w-4 h-4 bg-gray-600 rounded-full"></div>}
                    {player.change === 'new' && <Sparkles className="w-4 h-4 text-yellow-400" />}
                  </div>
                  
                  {/* Очки */}
                  <div className="text-right">
                    <p className="text-2xl font-bold text-cyan-400">{player.points.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 uppercase">POINTS</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Информация о квалификации */}
          <div className="mt-8 p-6 bg-cyan-500/5 border border-cyan-500/20">
            <div className="flex items-center space-x-3">
              <Lock className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="text-cyan-400 font-bold">BLUE LOCK SELECTION</p>
                <p className="text-gray-400 text-sm">Только ТОП-11 бойцов получат доступ к элитной программе подготовки</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};