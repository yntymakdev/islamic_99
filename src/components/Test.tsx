"use client";
import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Code2,
  Rocket,
  Sparkles,
  Box,
  Layers,
  Clock,
  Users,
  Award,
  ExternalLink,
  Download,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState("ru");
  const [activeTab, setActiveTab] = useState("all");

  const t = {
    ru: {
      greeting: "Привет, я",
      name: "Ынтымак Кубанычев",
      role: "Full-Stack Developer",
      tagline: "Создаю веб-приложения, которые решают реальные задачи",
      contact: "Связаться",
      about: "О себе",
      projects: "Проекты",
      skills: "Технологии",
      experience: "Опыт работы",
      all: "Все",
      web: "Web Apps",
      api: "API & Backend",
      ui: "UI/UX",
      viewProject: "Посмотреть",
      sourceCode: "Код",
      liveDemo: "Demo",
      yearsExp: "года опыта",
      projectsCount: "проектов",
      clients: "клиентов",
      download: "Скачать резюме",
    },
    en: {
      greeting: "Hi, I am",
      name: "Yntymak Kubanychev",
      role: "Full-Stack Developer",
      tagline: "Building web applications that solve real problems",
      contact: "Get in touch",
      about: "About",
      projects: "Projects",
      skills: "Tech Stack",
      experience: "Experience",
      all: "All",
      web: "Web Apps",
      api: "API & Backend",
      ui: "UI/UX",
      viewProject: "View",
      sourceCode: "Code",
      liveDemo: "Demo",
      yearsExp: "years experience",
      projectsCount: "projects",
      clients: "clients",
      download: "Download CV",
    },
    kg: {
      greeting: "Салам, мен",
      name: "Ынтымак Кубанычев",
      role: "Full-Stack иштеп чыгуучу",
      tagline: "Реалдуу маселелерди чечкен веб-тиркемелерди түзөм",
      contact: "Байланышуу",
      about: "Мен жөнүндө",
      projects: "Долбоорлор",
      skills: "Технологиялар",
      experience: "Тажрыйба",
      all: "Баары",
      web: "Веб тиркемелер",
      api: "API жана Backend",
      ui: "UI/UX",
      viewProject: "Көрүү",
      sourceCode: "Код",
      liveDemo: "Demo",
      yearsExp: "жыл тажрыйба",
      projectsCount: "долбоор",
      clients: "кардар",
      download: "CV жүктөө",
    },
  };

  const c = t[lang];

  const projects = [
    {
      id: 1,
      title: "SaaS Analytics Platform",
      desc: "Real-time dashboard с визуализацией данных и ML предсказаниями",
      category: "web",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Python"],
      image: "📊",
      color: "from-blue-500 to-cyan-500",
      stats: { users: "15K+", growth: "+240%" },
    },
    {
      id: 2,
      title: "E-Commerce Marketplace",
      desc: "Multi-vendor платформа с payment gateway и real-time inventory",
      category: "web",
      tech: ["React", "Node.js", "MongoDB", "Redis"],
      image: "🛍️",
      color: "from-purple-500 to-pink-500",
      stats: { revenue: "$1.2M", orders: "50K+" },
    },
    {
      id: 3,
      title: "DevOps Automation Suite",
      desc: "CI/CD pipeline и infrastructure monitoring решение",
      category: "api",
      tech: ["Go", "Kubernetes", "Docker", "Terraform"],
      image: "⚙️",
      color: "from-orange-500 to-red-500",
      stats: { deploys: "1000+", uptime: "99.9%" },
    },
    {
      id: 4,
      title: "Design System Library",
      desc: "Компонентная библиотека с Storybook и accessibility",
      category: "ui",
      tech: ["React", "Tailwind", "Storybook", "Figma"],
      image: "🎨",
      color: "from-green-500 to-emerald-500",
      stats: { components: "120+", downloads: "50K" },
    },
    {
      id: 5,
      title: "API Gateway Service",
      desc: "Microservices gateway с rate limiting и authentication",
      category: "api",
      tech: ["Node.js", "GraphQL", "Redis", "JWT"],
      image: "🔌",
      color: "from-indigo-500 to-blue-500",
      stats: { requests: "10M/day", latency: "45ms" },
    },
    {
      id: 6,
      title: "Mobile Banking App",
      desc: "Cross-platform финансовое приложение с biometric auth",
      category: "web",
      tech: ["React Native", "TypeScript", "Firebase"],
      image: "💳",
      color: "from-yellow-500 to-orange-500",
      stats: { users: "25K", rating: "4.8/5" },
    },
  ];

  const experience = [
    {
      period: "2023 - Настоящее время",
      role: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      desc: "Разработка и архитектура SaaS платформы для enterprise клиентов",
      achievements: ["Увеличил производительность на 60%", "Внедрил microservices архитектуру"],
    },
    {
      period: "2021 - 2023",
      role: "Full-Stack Developer",
      company: "Digital Solutions",
      desc: "Создание веб-приложений для стартапов и малого бизнеса",
      achievements: ["Разработал 15+ проектов", "Построил CI/CD pipeline"],
    },
    {
      period: "2020 - 2021",
      role: "Frontend Developer",
      company: "Creative Agency",
      desc: "Разработка пользовательских интерфейсов и landing pages",
      achievements: ["Улучшил UX метрики на 40%", "Внедрил design system"],
    },
  ];

  const techStack = {
    frontend: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 75 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
    tools: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Git", level: 95 },
      { name: "Linux", level: 85 },
    ],
  };

  const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Subtle dot pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? "#fff" : "#000"} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
          isDark ? "bg-black/80 border-white/10" : "bg-white/80 border-black/10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-3 cursor-pointer">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold">
                      YK
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden sm:block">
                    <div className="font-semibold text-sm">Yntymak</div>
                    <div className={`text-xs ${isDark ? "text-white/60" : "text-black/60"}`}>Developer</div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-xl">
                      YK
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Ынтымак Кубанычев</h4>
                    <p className="text-sm text-muted-foreground">
                      Full-Stack разработчик с 3+ годами опыта в создании современных веб-приложений
                    </p>
                    <div className="flex gap-2 pt-2">
                      <Badge variant="secondary" className="text-xs">
                        🇰🇬 Кыргызстан
                      </Badge>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6 mr-4">
                <a
                  href="#about"
                  className={`text-sm hover:opacity-70 transition ${isDark ? "text-white/80" : "text-black/80"}`}
                >
                  {c.about}
                </a>
                <a
                  href="#projects"
                  className={`text-sm hover:opacity-70 transition ${isDark ? "text-white/80" : "text-black/80"}`}
                >
                  {c.projects}
                </a>
                <a
                  href="#skills"
                  className={`text-sm hover:opacity-70 transition ${isDark ? "text-white/80" : "text-black/80"}`}
                >
                  {c.skills}
                </a>
                <a
                  href="#experience"
                  className={`text-sm hover:opacity-70 transition ${isDark ? "text-white/80" : "text-black/80"}`}
                >
                  {c.experience}
                </a>
              </div>

              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className={`text-xs px-2 py-1.5 rounded-md border ${
                  isDark ? "bg-black border-white/20" : "bg-white border-black/20"
                }`}
              >
                <option value="ru">RU</option>
                <option value="en">EN</option>
                <option value="kg">KG</option>
              </select>

              <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="h-9 w-9">
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button
                size="sm"
                className={isDark ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90"}
              >
                {c.contact}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/50 bg-blue-500/10">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-medium text-blue-500">Доступен для проектов</span>
          </div>

          <div className="space-y-4">
            <p className={`text-lg ${isDark ? "text-white/60" : "text-black/60"}`}>{c.greeting}</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">{c.name}</h1>
            <p className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {c.role}
            </p>
            <p className={`text-lg leading-relaxed max-w-2xl ${isDark ? "text-white/70" : "text-black/70"}`}>
              {c.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              className={isDark ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90"}
            >
              {c.contact}
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              {c.download}
              <Download className="ml-2 h-4 w-4" />
            </Button>

            <Separator orientation="vertical" className="h-8 hidden sm:block" />

            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
          {[
            { value: "3+", label: c.yearsExp, icon: Clock },
            { value: "50+", label: c.projectsCount, icon: Box },
            { value: "30+", label: c.clients, icon: Users },
            { value: "12", label: "Awards", icon: Award },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="space-y-2">
                <Icon className={`h-5 w-5 ${isDark ? "text-white/40" : "text-black/40"}`} />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{c.projects}</h2>
            <p className={isDark ? "text-white/60" : "text-black/60"}>Избранные работы и кейсы</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="all">{c.all}</TabsTrigger>
              <TabsTrigger value="web">{c.web}</TabsTrigger>
              <TabsTrigger value="api">{c.api}</TabsTrigger>
              <TabsTrigger value="ui">{c.ui}</TabsTrigger>
            </TabsList>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className={`group overflow-hidden hover:shadow-lg transition-all ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:border-white/20"
                      : "bg-black/5 border-black/10 hover:border-black/20"
                  }`}
                >
                  <div
                    className={`relative aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <span className="relative z-10 group-hover:scale-110 transition-transform">{project.image}</span>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.desc}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-sm">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key}>
                            <div className="font-semibold">{value}</div>
                            <div className={`text-xs ${isDark ? "text-white/60" : "text-black/60"}`}>{key}</div>
                          </div>
                        ))}
                      </div>

                      <Button size="sm" variant="ghost">
                        {c.viewProject}
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{c.skills}</h2>
            <p className={isDark ? "text-white/60" : "text-black/60"}>Технологии, с которыми я работаю</p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools & DevOps</TabsTrigger>
            </TabsList>

            {Object.entries(techStack).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {skills.map((skill, i) => (
                    <Card
                      key={i}
                      className={`p-4 ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-blue-500">{skill.level}%</span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-black/10"}`}>
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{c.experience}</h2>
            <p className={isDark ? "text-white/60" : "text-black/60"}>Мой профессиональный путь</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {experience.map((exp, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className={`border rounded-lg ${isDark ? "border-white/10" : "border-black/10"}`}
              >
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-left w-full">
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                    <div className="flex-1">
                      <div className="font-semibold">{exp.role}</div>
                      <div className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>{exp.company}</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className={`mb-4 ${isDark ? "text-white/70" : "text-black/70"}`}>{exp.desc}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <ChevronDown className="h-4 w-4 text-blue-500 rotate-[-90deg] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Card className={`p-12 text-center ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
          <Sparkles className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Есть идея проекта?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Давайте обсудим как я могу помочь воплотить вашу идею в жизнь
          </p>
          <Button
            size="lg"
            variant="outline"
            className={
              isDark ? "border-black text-black hover:bg-black/10" : "border-white text-white hover:bg-white/10"
            }
          >
            {c.contact}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className={`border-t ${isDark ? "border-white/10" : "border-black/10"} py-12`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
              © 2025 Yntymak Kubanychev. Made with ❤️ in Kyrgyzstan
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                GitHub
              </Button>
              <Button variant="ghost" size="sm">
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm">
                Email
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
