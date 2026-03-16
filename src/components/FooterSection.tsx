import { motion } from "framer-motion";
import { Linkedin, Mail, MessageCircle, ArrowUpRight, Github, FileText } from "lucide-react";

interface ContactCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}

const ContactCard = ({ href, icon, title, subtitle, delay }: ContactCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (title === "Email") {
      e.preventDefault(); // Detenemos el mailto por defecto
      const email = href.replace('mailto:', '');
      
      // Intentamos copiar el correo
      navigator.clipboard.writeText(email).catch(() => {});
      
      // Abrimos Gmail en una pestaña nueva con los campos prellenados
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Contacto%20desde%20Portafolio`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative flex flex-col items-center p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 transition-all duration-500 overflow-hidden text-center cursor-pointer"
    >
      {/* Glow border effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15), 0 0 20px rgba(255,255,255,0.05)" }}
      />
      
      {/* Top right diagonal arrow */}
      <div className="absolute top-6 right-6 text-zinc-600 group-hover:text-white transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        <ArrowUpRight className="size-5" />
      </div>

      <div className="w-16 h-16 rounded-full bg-black border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:border-zinc-700">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-400">{subtitle}</p>
    </motion.a>
  );
};

const FragmentedDebrisBackground = () => {
  const fragments = Array.from({ length: 30 }).map((_, i) => {
    const size = Math.random() * 80 + 30; // 30px to 110px sizes
    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size,
      rotate: Math.random() * 360,
      duration: Math.random() * 40 + 30,
      delay: Math.random() * 10,
      type: Math.floor(Math.random() * 4) // Types 0 to 3
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-black" />
      
      {/* Base technical grid - Visibilidad aumentada */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
      
      {/* Floating geometric debris */}
      {fragments.map((f) => {
        let className = "absolute opacity-40 "; // Opacidad base alta
        let style: any = {
          left: `${f.x}%`,
          top: `${f.y}%`,
          width: f.size,
          height: f.size,
        };

        if (f.type === 0) {
          className += "border-[2px] border-white/40"; // Open rect
        } else if (f.type === 1) {
          className += "bg-white/10 backdrop-blur-md border border-white/30"; // Solid glass rect
        } else if (f.type === 2) {
          className += "bg-white/20 backdrop-blur-sm"; // Triangle
          style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
        } else {
          className += "border border-white/30 rounded-full bg-white/5 backdrop-blur-sm"; // Circle
        }

        return (
          <motion.div
            key={`debris-${f.id}`}
            className={className}
            style={style}
            animate={{
              rotate: [f.rotate, f.rotate + 90, f.rotate + 180],
              y: [0, -80, 0],
              x: [0, 40, 0],
              opacity: [0.15, 0.7, 0.15], // Alta pulsación
            }}
            transition={{
              duration: f.duration,
              repeat: Infinity,
              ease: "linear",
              delay: f.delay,
            }}
          />
        );
      })}
      
      {/* Fade out masks */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-0" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-0" />
    </div>
  );
};

const FooterSection = () => {
  return (
    <section id="contacto" className="relative py-32 px-6 border-t border-zinc-900 bg-black overflow-hidden">
      <FragmentedDebrisBackground />

      <div className="container relative z-10 mx-auto max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Si llegaste hasta aquí, hablemos.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl">
            Estoy buscando mi estadía profesional. Si tienes un equipo interesante, me encantaría escucharte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <ContactCard
            href="https://www.linkedin.com/in/jnthnuribe"
            icon={<Linkedin className="size-6" />}
            title="LinkedIn"
            subtitle="Conecta profesionalmente"
            delay={0.1}
          />
          <ContactCard
            href="https://wa.me/9845367883"
            icon={<MessageCircle className="size-6" />}
            title="WhatsApp"
            subtitle="Chat directo y rápido"
            delay={0.2}
          />
          <ContactCard
            href="mailto:jonathanuribepech15@gmail.com"
            icon={<Mail className="size-6" />}
            title="Email"
            subtitle="Propuestas detalladas"
            delay={0.3}
          />
        </div>

        {/* CV & GitHub Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-24">
          <motion.a
            href="https://github.com/JnthnUribe"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative flex items-center justify-center gap-4 p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:bg-zinc-900/60 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,0.02)" }}
            />
            <Github className="size-5 text-zinc-400 group-hover:text-white transition-colors" />
            <span className="font-semibold text-zinc-300 group-hover:text-white transition-colors">Ver GitHub</span>
          </motion.a>

          <motion.a
            href="/assets/projects/CV_Jonathan_Uribe_Desarrollador.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group relative flex items-center justify-center gap-4 p-6 rounded-2xl bg-white text-black border border-white hover:bg-zinc-200 transition-all duration-300 overflow-hidden"
          >
            <FileText className="size-5" />
            <span className="font-bold">Descargar CV</span>
          </motion.a>
        </div>

        <div className="border-t border-zinc-900 pt-8 mt-12">
           <p className="text-center text-xs text-zinc-600 font-mono">
             © {new Date().getFullYear()} jnthn.Uribe — Todos los derechos reservados.
           </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
