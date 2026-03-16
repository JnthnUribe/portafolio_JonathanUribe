import { motion } from "framer-motion";

const rows = [
  {
    label: "Frontend",
    skills: ["React", "React Native", "Flutter", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Backend",
    skills: ["C#", ".NET", "Node.js", "Supabase", "APIs REST", "Express"],
  },
  {
    label: "Datos & Seguridad",
    skills: ["MySQL", "MongoDB", "SQL Server", "Git", "Cisco", "Firebase"],
  },
];

const MarqueeRow = ({ skills, direction = 1 }: { skills: string[]; direction?: number }) => {
  const doubled = [...skills, ...skills];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="px-5 py-2.5 rounded-lg border border-border bg-card font-mono text-sm text-foreground whitespace-nowrap hover:border-foreground/20 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="stack" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Stack
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            // tecnologías que manejo
          </p>
        </motion.div>

        <div className="space-y-10">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
                {row.label}
              </p>
              <MarqueeRow skills={row.skills} direction={i % 2 === 0 ? 1 : -1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
