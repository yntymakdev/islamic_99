// const ProjectDetail = ({ project, onClose }) => {
//   return (
//     <div
//       className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white dark:bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="sticky top-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-6 flex justify-between items-center z-10">
//           <h2 className="text-2xl font-bold">{project.title}</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition"
//           >
//             <X className="size-6" />
//           </button>
//         </div>

//         <div className="p-6 space-y-6">
//           {/* Project Image */}
//           <div
//             className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-white`}
//           >
//             <div className="text-8xl">{project.image}</div>
//           </div>

//           {/* Project Info */}
//           <div className="grid md:grid-cols-3 gap-4">
//             <div className="md:col-span-2 space-y-4">
//               <div>
//                 <h3 className="font-semibold mb-2">Описание</h3>
//                 <p className="text-muted-foreground leading-relaxed">{project.description}</p>
//               </div>

//               <div>
//                 <h3 className="font-semibold mb-2">Моя роль</h3>
//                 <p className="text-muted-foreground">
//                   Full-Stack разработчик, отвечал за архитектуру приложения, разработку frontend и backend частей.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="font-semibold mb-2">Результаты</h3>
//                 <ul className="space-y-2">
//                   <li className="flex items-start gap-2 text-muted-foreground">
//                     <CheckCircle2 className="size-5 text-green-500 mt-0.5 shrink-0" />
//                     <span>Увеличение производительности на 40%</span>
//                   </li>
//                   <li className="flex items-start gap-2 text-muted-foreground">
//                     <CheckCircle2 className="size-5 text-green-500 mt-0.5 shrink-0" />
//                     <span>Снижение времени загрузки на 60%</span>
//                   </li>
//                   <li className="flex items-start gap-2 text-muted-foreground">
//                     <CheckCircle2 className="size-5 text-green-500 mt-0.5 shrink-0" />
//                     <span>Улучшение UX на основе A/B тестирования</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-semibold mb-2">Стек</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((t, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-mono"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="font-semibold mb-2">Год</h3>
//                 <p className="text-muted-foreground">{project.year}</p>
//               </div>

//               <div className="space-y-2">
//                 <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
//                   <Github className="size-4" />
//                   <span className="text-sm">Посмотреть код</span>
//                 </a>
//                 <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
//                   <Globe className="size-4" />
//                   <span className="text-sm">Открыть проект</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProjectDetail;
