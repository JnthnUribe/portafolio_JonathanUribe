import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import ProjectDetailsModal, { type ProjectDetails } from "./ProjectDetailsModal";

export interface FeaturedWork extends ProjectDetails {
  company?: string;
  period?: string;
  featured?: boolean;
  technical_integration?: string;
}

interface FeaturedWorkCardProps {
  work: FeaturedWork;
  index: number;
  className?: string;
}

const FeaturedWorkCard = ({ work, index, className = "" }: FeaturedWorkCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const px = (e.clientX - left) / width;
    const py = (e.clientY - top) / height;
    setTilt({
      rotateY: (px - 0.5) * 4, // Very subtle tilt
      rotateX: (0.5 - py) * 4,
    });
    setGlowPos({ x: px * 100, y: py * 100 });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  // Enforce interaction if we have extended details or a technical integration block
  const hasExtendedDetails = !!(work.elevator_pitch || work.problem || work.solution || work.technical_integration);

  return (
    <>
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetTilt}
      style={{ perspective: 1000 }}
      className={`group ${className} ${hasExtendedDetails ? 'cursor-pointer' : ''}`}
      data-cursor-hover={hasExtendedDetails ? true : undefined}
      onClick={() => hasExtendedDetails && setIsModalOpen(true)}
    >
      <motion.div
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative rounded-2xl border border-zinc-800/60 bg-zinc-950/50 overflow-hidden h-full flex flex-col"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Directional glow overlay */}
        <div
          className="absolute inset-0 z-20 pointer-events-none rounded-2xl transition-opacity duration-300 mix-blend-screen"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.06) 0%, transparent 50%)`,
          }}
        />

        {/* Ambient Border glow */}
        <div
          className="absolute inset-0 z-20 pointer-events-none rounded-2xl transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 30px rgba(0,0,0,0.5)",
          }}
        />

        {/* Image / Video Cover Area */}
        <div className="relative h-48 sm:h-56 md:h-64 w-full bg-zinc-900 overflow-hidden border-b border-zinc-800/50">
           {work.video_cover ? (
             <div className="absolute inset-0 bg-black">
               <video 
                 src={work.video_cover}
                 autoPlay
                 muted
                 loop
                 playsInline
                 className="w-full h-full object-cover transition-transform duration-1000 ease-out opacity-40 group-hover:opacity-60 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />
             </div>
           ) : work.image_cover ? (
             <div className="absolute inset-0 bg-black">
               <img 
                 src={work.image_cover}
                 alt=""
                 className="w-full h-full object-cover transition-transform duration-1000 ease-out opacity-40 group-hover:opacity-60 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
             </div>
           ) : (
             <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)]">
               <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">[ Image Preview ]</span>
             </div>
           )}

           {/* Top tags overlapping the image */}
           <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
             {work.period && (
               <span className="font-mono text-[10px] sm:text-[11px] text-white/80 uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                 {work.period}
               </span>
             )}
             
             {work.company && (
               <span className="text-xs font-medium text-white/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                 @ {work.company}
               </span>
             )}
           </div>
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">
          <div className="flex items-start justify-between mb-4">
             <div>
               <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-white/90 transition-colors tracking-tight mb-2">
                 {work.title}
               </h3>
               <p className="text-sm font-medium text-zinc-400">
                 {work.role}
               </p>
             </div>
             
             {work.live_url && (
               <a
                 href={work.live_url}
                 target="_blank"
                 rel="noopener noreferrer"
                 onClick={(e) => e.stopPropagation()}
                 className="text-zinc-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full border border-white/5"
                 title="Ver proyecto en vivo"
               >
                 <ArrowUpRight className="size-4" />
               </a>
             )}
          </div>

          <p className="text-base text-zinc-300 leading-relaxed mb-8">
            {work.description}
          </p>

          {/* Technical Integration Block (New Requirement) */}
          {work.technical_integration && (
            <div className="mb-6 bg-black/40 border border-white/5 rounded-xl p-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">// Integración Técnica</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {work.technical_integration}
              </p>
            </div>
          )}

          {/* Footer (Tags & CTA) */}
          <div className="flex flex-wrap items-center justify-between w-full gap-4 mt-auto pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-2 flex-1">
              {work.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-300"
                >
                  {tag}
                </span>
              ))}
              {work.tags.length > 3 && (
                 <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-500">
                   +{work.tags.length - 3}
                 </span>
              )}
            </div>
            
            {hasExtendedDetails && (
              <span className="text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shrink-0 bg-white/10 px-3 py-1.5 rounded-full">
                 Ver Caso de Estudio <ArrowRight className="size-3" />
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
    
    <ProjectDetailsModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      project={work} 
    />
    </>
  );
};

export default FeaturedWorkCard;
