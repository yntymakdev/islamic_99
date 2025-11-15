"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Code2, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Tea = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    {
      question: "Как можно оплатить подписку?",
      answer: "Оплата принимается через банковские карты, электронные кошельки и другие популярные способы оплаты.",
    },
    {
      question: "Можно ли оплатить подписку за пределами РФ?",
      answer: "Да, мы принимаем оплату из любой страны мира через международные платежные системы.",
    },
    {
      question: "Как и когда можно отменить подписку?",
      answer:
        "Вы можете отменить подписку в любой момент в настройках профиля. Доступ сохранится до конца оплаченного периода.",
    },
    {
      question: "Что входит в подписку?",
      answer: "В подписку входит полный доступ к исходному коду всех проектов, видеоурокам и обновлениям курсов.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`sticky left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/85 shadow-sm backdrop-blur-md" : "bg-background"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 w-full items-center justify-between">
            <div className="flex items-center">
              <a className="mr-10 flex items-center gap-x-3 text-xl font-bold text-blue-600" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1059 1568"
                  className="size-8"
                  width="1059"
                  height="1568"
                >
                  <g>
                    <path
                      className="fill-blue-600"
                      d="M742.467 756.332H29.1969C15.6538 756.332 6.625 767.088 6.625 777.842V1294.08C6.625 1444.65 135.285 1567.25 293.288 1567.25H482.891C640.894 1567.25 769.553 1444.65 769.553 1294.08V777.842C767.296 764.936 756.01 756.332 742.467 756.332Z"
                    ></path>
                    <path
                      className="fill-blue-600"
                      d="M656.694 1476.91C816.954 1390.87 1094.59 1134.9 1049.45 954.22C1038.15 906.903 1006.56 870.336 959.16 848.82C853.069 801.502 699.581 859.578 681.523 866.034L733.438 967.125C769.553 952.074 859.841 928.411 902.723 947.772C911.752 952.074 920.781 958.522 925.299 977.883C952.386 1083.28 735.695 1304.83 591.235 1382.27L656.694 1476.91Z"
                    ></path>
                    <path
                      className="fill-blue-600"
                      d="M435.152 656.493C436.322 658.727 436.322 655.377 437.492 653.144L439.831 644.212C441.001 638.629 442.171 631.929 443.341 626.347C444.511 614.065 445.681 500.666 445.681 587.269C444.511 560.471 438.662 532.559 428.133 506.878C416.434 481.198 400.056 459.984 382.508 443.236C373.149 434.304 363.791 427.604 354.431 420.905L331.034 405.274C304.127 387.409 279.56 363.962 262.013 340.515C253.823 328.233 247.974 315.951 245.634 305.902C243.294 295.853 243.294 289.154 244.464 284.689C245.634 282.455 245.634 280.222 247.974 276.873C250.313 273.523 251.483 267.94 254.993 263.474C260.843 253.426 269.032 244.493 277.22 235.561C294.769 219.929 315.826 208.764 336.884 206.531C357.941 203.181 380.168 207.648 402.396 217.696C412.924 223.279 424.624 228.861 435.152 237.794C441.001 242.26 445.681 245.61 451.53 251.192C457.38 256.775 462.059 261.241 469.078 262.358L491.306 265.707C539.27 273.523 582.554 232.211 589.574 171.918C593.084 139.539 584.894 107.16 568.517 83.7127C561.498 73.6638 552.138 65.8479 542.779 59.1488C533.421 52.4495 522.892 46.8669 513.533 40.1678C493.646 27.8859 471.418 18.9536 449.19 12.2545C404.736 -2.26048 354.431 -3.37691 307.637 11.138C260.843 25.6529 216.387 55.7991 181.291 98.2277C163.744 120.558 148.535 144.006 136.837 171.918C130.988 185.317 126.308 200.948 121.628 217.696C116.949 235.561 114.609 255.658 113.439 274.639C112.27 314.835 122.799 351.68 136.837 380.71C150.875 409.74 168.423 430.954 185.971 448.819C221.067 484.547 258.503 504.645 295.939 520.276L309.976 525.859L316.995 528.092L321.675 529.209C328.695 531.441 334.544 533.675 340.393 537.024C352.091 542.607 363.791 549.306 373.149 560.471C382.508 570.521 391.867 583.919 398.886 599.55C402.396 607.366 405.905 616.298 408.245 626.347C409.415 630.813 410.585 636.396 412.924 640.862L415.264 648.678C416.434 652.027 416.434 653.144 418.774 662.076C421.113 669.892 426.963 674.358 433.982 671.008C433.982 673.242 436.322 664.309 435.152 656.493Z"
                    ></path>
                  </g>
                </svg>
                TeaCoder
              </a>
            </div>

            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
              <nav className="hidden items-center space-x-7 text-sm font-medium md:flex">
                <a
                  className="text-sm text-neutral-600 transition hover:text-foreground dark:text-neutral-300 dark:hover:text-white"
                  href="#courses"
                >
                  Курсы
                </a>
                <a
                  className="text-sm text-neutral-600 transition hover:text-foreground dark:text-neutral-300 dark:hover:text-white"
                  href="#about"
                >
                  Об основателе
                </a>
                <a
                  className="text-sm text-neutral-600 transition hover:text-foreground dark:text-neutral-300 dark:hover:text-white"
                  href="#premium"
                >
                  Подписка
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden items-center space-x-3 md:flex">
                <div className="flex items-center gap-5">
                  <Button
                    variant="outline"
                    className="h-9 px-5 py-2 rounded-full border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
                  >
                    Войти
                  </Button>
                  <Button className="h-9 px-5 py-2 rounded-full bg-gradient-to-t from-blue-600 to-blue-500 text-primary-foreground hover:opacity-90">
                    Регистрация
                  </Button>
                </div>
              </div>
              <div className="md:hidden">
                <button
                  className="size-10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden pb-4 border-t pt-4 space-y-3">
              <a className="block text-sm text-neutral-600 dark:text-neutral-300 hover:text-foreground" href="#courses">
                Курсы
              </a>
              <a className="block text-sm text-neutral-600 dark:text-neutral-300 hover:text-foreground" href="#about">
                Об основателе
              </a>
              <a className="block text-sm text-neutral-600 dark:text-neutral-300 hover:text-foreground" href="#premium">
                Подписка
              </a>
              <Button variant="outline" className="w-full">
                Войти
              </Button>
              <Button className="w-full bg-gradient-to-t from-blue-600 to-blue-500">Регистрация</Button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto my-20 overflow-x-hidden">
        {/* Hero Section */}
        <div className="mx-auto w-full pb-14 text-center">
          <h1 className="text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">
            Откройте весь исходный код
          </h1>
          <p className="mx-auto mt-6 max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:max-w-sm md:max-w-lg md:text-base lg:max-w-2xl lg:text-xl">
            Единый премиум-план предоставляет полный и неограниченный доступ ко всему исходному коду всех проектов
          </p>
        </div>

        {/* Pricing Card with Background Stripes */}
        <div className="relative mx-auto flex justify-center px-6 lg:px-8">
          {/* Background Stripes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-24 -z-10 w-[100vw] -translate-x-1/2 -rotate-[10deg] scale-x-150 transform"
          >
            <div className="flex flex-col">
              <div className="h-12 w-full bg-blue-200 opacity-90 dark:bg-blue-700"></div>
              <div className="h-12 w-full bg-blue-300 opacity-80 dark:bg-blue-800"></div>
              <div className="h-12 w-full bg-blue-400 opacity-70 dark:bg-blue-900"></div>
            </div>
          </div>

          {/* Pricing Card */}
          <Card className="relative z-20 w-full max-w-[25rem] rounded-2xl border border-border bg-card">
            <CardHeader className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-blue-100 p-3.5 dark:border dark:border-border dark:bg-neutral-800">
                  <Code2 className="size-11 text-blue-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Доступ к исходному коду</CardTitle>
              <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">Единый план для всех проектов</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <div className="text-center">
                <span className="text-5xl font-extrabold text-foreground">349₽</span>
                <span className="ml-1 text-lg text-neutral-500 dark:text-neutral-400">/ месяц</span>
              </div>
              <p className="text-center text-neutral-600 dark:text-neutral-300">
                Полный доступ к исходному коду всех проектов. Больше никаких ограничений!
              </p>
              <Button className="w-full h-11 rounded-lg px-8 bg-gradient-to-t from-blue-600 to-blue-500 text-primary-foreground hover:opacity-90">
                Оплатить
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <section className="mx-auto mt-20 max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Часто задаваемые вопросы</h2>
          <div className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b last:border-b-0">
                <button
                  className="flex flex-1 w-full items-start justify-between gap-4 rounded-md py-4 text-left text-lg font-medium hover:underline focus-visible:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="pb-4 text-sm text-neutral-600 dark:text-neutral-300">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="relative mx-auto max-w-[1340px] px-4 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-4 sm:col-span-2 md:col-span-2">
              <h2 className="text-2xl font-bold">TeaCoder</h2>
              <p className="text-sm text-muted-foreground">
                Образовательная платформа по веб-разработке.
                <br />В случае возникновения вопросов, обращайтесь на почту{" "}
                <a className="text-blue-500 hover:underline" href="mailto:support@teacoder.ru">
                  support@teacoder.ru
                </a>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Общие ссылки</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    href="#courses"
                  >
                    Курсы
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    href="#about"
                  >
                    Об основателе
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    href="#premium"
                  >
                    Подписка
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Документы</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    href="#terms"
                  >
                    Пользовательское соглашение
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    href="#privacy"
                  >
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Соц. сети</h3>
              <div className="flex space-x-4">
                <a
                  className="text-muted-foreground transition-colors hover:text-primary"
                  href="https://youtube.com/@TeaCoder52"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="size-6" fill="currentColor" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </a>
                <a
                  className="text-muted-foreground transition-colors hover:text-primary"
                  href="https://t.me/TeaCoder_official"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="size-6" fill="currentColor" viewBox="0 0 496 512">
                    <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                  </svg>
                </a>
                <a
                  className="text-muted-foreground transition-colors hover:text-primary"
                  href="https://github.com/teacoder-team"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="size-6" fill="currentColor" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-full border-t py-6">
          <p className="text-center text-sm text-muted-foreground">TeaCoder © 2025 Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Tea;
