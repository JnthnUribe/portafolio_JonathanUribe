import { useRef, useState } from "react";
import { motion } from "framer-motion";

const ScatteredConstellationBackground = () => {
  const points = Array.from({ length: 45 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2, // Larger points
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
  }));

  const lines = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x1: Math.random() * 100,
    y1: Math.random() * 100,
    x2: Math.random() * 100,
    y2: Math.random() * 100,
    duration: Math.random() * 15 + 20,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black">
      {/* Base Noise layer to keep texture but very subtle */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      <svg className="absolute inset-0 w-full h-full opacity-50">
        {lines.map((line) => (
          <motion.line
            key={`line-${line.id}`}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="white"
            strokeWidth="0.8"
            animate={{
              x1: [`${line.x1}%`, `${line.x1 + 3}%`, `${line.x1}%`],
              y1: [`${line.y1}%`, `${line.y1 - 3}%`, `${line.y1}%`],
              x2: [`${line.x2}%`, `${line.x2 - 3}%`, `${line.x2}%`],
              y2: [`${line.y2}%`, `${line.y2 + 3}%`, `${line.y2}%`],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: "linear",
              delay: line.delay,
            }}
          />
        ))}
      </svg>

      {points.map((p) => (
        <motion.div
          key={`point-${p.id}`}
          className="absolute rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)] opacity-60"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}

      {/* Fade masks for smooth blending */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
    </div>
  );
};

const AboutSection = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [imgHover, setImgHover] = useState(false);

  return (
    <section id="sobre-mi" className="relative py-32 px-6 overflow-hidden bg-black">
      <ScatteredConstellationBackground />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Sobre Mí
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            // quién soy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Photo */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-2 flex justify-center"
            onMouseEnter={() => setImgHover(true)}
            onMouseLeave={() => setImgHover(false)}
            data-cursor-hover
          >
            <div
              className="relative w-64 h-80 rounded-2xl overflow-hidden border border-border bg-card transition-shadow duration-500"
              style={{
                boxShadow: imgHover
                  ? "0 0 40px hsla(0,0%,100%,0.08), inset 0 0 0 1px hsla(0,0%,100%,0.15)"
                  : "none",
              }}
            >
              <img
                src="/assets/projects/fotoCV.png"
                alt="Jonathan Uribe"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-foreground/90 leading-relaxed text-base">
              Soy estudiante de Desarrollo de Software en la{" "}
              <span className="text-foreground font-medium">
                Universidad Tecnológica Metropolitana
              </span>
              . Me muevo entre el frontend y el backend con facilidad, y me importa que lo que construyo funcione de verdad, no solo en el demo.
            </p>
            <p className="text-foreground/90 leading-relaxed text-base">
              Me interesa entender el producto completo: cómo se estructura, por qué se toman ciertas decisiones técnicas y cómo hacer que escale sin convertirse en un problema.
            </p>
            <p className="text-foreground/90 leading-relaxed text-base">
              Actualmente buscando mi{" "}
              <span className="text-foreground font-medium">Estadía Profesional</span>. Quiero unirme a un equipo real, aprender rápido y dejar algo concreto.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Full-Stack", "Mobile", "IA Integration", "Arquitecturas Escalables"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg border border-border bg-card font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
