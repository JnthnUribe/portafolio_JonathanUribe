import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "./MagneticButton";

const titleWords = "Construyendo software de otro nivel".split(" ");

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
  },
};

const wordAnim = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const AbstractGeometry = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Heavy Geometry 1: Large rotating circle top left */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] min-w-[600px] border border-white/20 rounded-full"
      />
      {/* Heavy Geometry 2: Floating filled circle center right */}
      <motion.div
        animate={{
          y: [0, 80, 0],
          x: [0, -40, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[5%] w-[30vw] h-[30vw] min-w-[300px] bg-white/5 rounded-full blur-3xl opacity-50"
      />
      {/* Heavy Geometry 3: Large polygon/square spinning slow at the bottom */}
      <motion.div
        animate={{
          rotate: [0, -180, -360],
          y: [0, -60, 0]
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] min-w-[500px] border border-white/20 rotate-45"
      />
      {/* Heavy Geometry 4: Small distinct floating ring */}
      <motion.div
        animate={{
          y: [0, -100, 0],
          x: [0, 50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[10%] w-[15vw] h-[15vw] min-w-[150px] border-[2px] border-white/10 rounded-full"
      />
      {/* Heavy Geometry 5: Thin intersecting vertical lines */}
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 bottom-0 left-[35%] w-[1px] bg-white/20"
      />
      <motion.div
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 bottom-0 right-[25%] w-[1px] bg-white/20"
      />

      {/* Background Grid Pattern, much more prominent now */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
    </div>
  );
};

export default function HeroDashboardSection({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden isolated text-white z-0">
      
      <AbstractGeometry />

      {/* Radial soft glow for contrast */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,hsla(0,0%,100%,0.08)_0%,transparent_60%)]" />
      </div>

      {/* Dashboard Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center">
        
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tighter mb-8 max-w-4xl flex flex-wrap justify-center gap-x-[0.3em] gap-y-2 pt-20"
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordAnim}
              className="inline-block text-white"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Hola, soy Jonny. Estudio Ingeniería de Software y construyo apps móviles y web. Busco una estadía donde pueda meterme en proyectos reales y dejar algo útil.
        </motion.p>

        {/* Enter Button as trigger */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 100 }}
        >
          <MagneticButton strength={0.3}>
            <button 
              onClick={onEnter}
              className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium overflow-hidden transition-all hover:scale-105"
            >
               <span className="relative z-10 text-base font-bold">Ver Proyectos</span>
               <ArrowDown className="size-4 relative z-10 group-hover:translate-y-1 transition-transform" />
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
