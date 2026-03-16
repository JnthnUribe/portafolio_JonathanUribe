import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,hsla(0,0%,100%,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Software Developer &amp; Designer
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-10 flex flex-wrap justify-center gap-x-[0.3em] gap-y-1"
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordAnim}
              className="inline-block text-gradient"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-base text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Diseño y desarrollo experiencias digitales que destacan por su calidad, rendimiento y atención al detalle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <MagneticButton strength={0.25}>
            <Button variant="glow" size="lg" asChild data-cursor-hover>
              <a href="#proyectos" className="gap-2">
                Ver Proyectos
                <ArrowDown className="size-4" />
              </a>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
