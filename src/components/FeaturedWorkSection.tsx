import { motion } from "framer-motion";
import FeaturedWorkCard, { type FeaturedWork } from "./FeaturedWorkCard";

const featuredWorks: FeaturedWork[] = [
  {
    title: "Kaelo App (Rider Ecosystem)",
    role: "Mobile Architect & Lead Developer",
    company: "Kaelo",
    type: "Proyecto Integrador",
    period: "2024 — Presente",
    featured: true,
    image_cover: "/assets/projects/logo_iconkaelo.png",
    github_url: "https://github.com/JnthnUribe/KaeloAppciclysm.git",
    description: "La aplicación central del ecosistema ciclista Kaelo. Conecta a rutas, ciclistas y negocios locales en tiempo real con seguimiento GPS y sistema de recompensas.",
    elevator_pitch: "App móvil nativa que gamifica y protege el ciclismo urbano, conectando ciclistas con rutas verificadas y comercio local mediante un motor de geolocalización.",
    problem: "Los ciclistas locales no tenían una plataforma centralizada que combinara rutas seguras con comercio especializado, obligándolos a usar múltiples apps genéricas.",
    solution: "Kaelo App unifica la experiencia: seguimiento de rutas en vivo, ranking de ciclistas, botón de emergencia y conexión directa con tiendas locales afiliadas.",
    architecture: "Frontend móvil construido en Flutter para iOS/Android con rendimiento nativo a 60 FPS. Backend apoyado en Supabase (PostgreSQL) usando Edge Functions y Realtime subscriptions. Mapas integrados con Mapbox.",
    technical_integration: "Diseñé un motor de geolocalización persistente en segundo plano (Background Location) optimizando el consumo de batería. Implementé el modelo relacional de rutas en Supabase GIS (PostGIS) asegurando consultas espaciales veloces a gran escala.",
    features: [
      "Tracking GPS en tiempo real con motor de mapas Mapbox.",
      "Sistema de recompensas gamificado (Logros y Rankings).",
      "Pánico/SOS geolocalizado para seguridad en ruta."
    ],
    gallery: [
      "/assets/projects/kaeloapp (1).png",
      "/assets/projects/kaeloapp (2).png",
      "/assets/projects/kaeloapp (3).png",
      "/assets/projects/kaeloapp (4).png",
      "/assets/projects/kaeloapp (5).png",
      "/assets/projects/kaeloapp (6).png",
      "/assets/projects/kaeloapp (7).png",
      "/assets/projects/kaeloapp (8).png",
      "/assets/projects/kaeloapp (9).png",
      "/assets/projects/kaelo-app-vista.png"
    ],
    tags: ["Flutter", "Dart", "Supabase", "PostGIS", "Mapbox", "Riverpod"],
  },
  {
    title: "KudoApp",
    role: "Full-Stack Engineer",
    company: "Kudo",
    period: "2024",
    // Force Vite HMR refresh
    video_cover: "/assets/projects/kudo-video.mp4",
    gallery: [
      "/assets/projects/pantalla-kudo (1).png",
      "/assets/projects/pantalla-kudo (2).png",
      "/assets/projects/pantalla-kudo (3).png",
      "/assets/projects/pantalla-kudo (4).png",
      "/assets/projects/pantalla-kudo (5).png",
      "/assets/projects/pantalla-kudo (6).png",
      "/assets/projects/kudo-app-video.mp4"
    ],
    description: "Sistema moderno que digitaliza y gamifica el proceso de evaluación en eventos mediante códigos QR, ofreciendo feedback estructurado y rankings.",
    elevator_pitch: "Plataforma integral de evaluación y votación diseñada para ferias y hackathons, constando de app móvil, web dashboard y API REST.",
    problem: "Durante los eventos, el proceso de evaluación suele ser caótico y en papel, sin retroalimentación instantánea.",
    solution: "KudoApp digitaliza la evaluación escaneando QR en los stands, permitiendo a los jueces y usuarios votar en tiempo real con métricas visibles en web.",
    architecture: "Frontend móvil en Flutter, web en React, y backend monolítico en .NET 8 (C#) conectado a Entity Framework con base de datos SQL Server.",
    technical_integration: "Diseñé una base de datos relacional normalizada en SQL Server gestionada mediante Entity Framework Core. Expuse Endpoints REST seguros en .NET 8, consumidos simétricamente tanto por la app Flutter como por el dashboard React, asegurando consistencia de datos.",
    github_url: "https://github.com/JnthnUribe/AssessmentAplication_KudoApp.git",
    tags: ["Flutter", "C#", ".NET 8", "React", "SQL Server", "Entity Framework"],
  },
  {
    title: "Final Relic",
    role: "Game Developer",
    company: "Final Relic Studio",
    period: "2023 — 2024",
    image_cover: "/assets/projects/finalrelicportada.png",
    video_cover: "/assets/projects/finalrelicvideo.mp4",
    github_url: "https://github.com/JnthnUribe/Final_Relic.git",

    description: "Juego móvil RPG de acción y exploración con estética retro. Rendimiento fluido multiplataforma usando Flutter y Bonfire, con sincronización en la nube.",
    elevator_pitch: "RPG de acción con mecánicas dungeon-crawler que alcanza los 60 FPS consistentes en iOS/Android usando tecnología multiplataforma en lugar de motores nativos.",
    problem: "Evitar motores pesados como Unity para un juego 2D sencillo, para mantener el bundle final ligero sin sacrificar rendimiento.",
    solution: "Implementación del motor físico Bonfire en Flutter, creando un loop de juego eficiente que maneja colisiones, IA e inputs táctiles sin caídas de frames.",
    architecture: "Arquitectura cliente-servidor Serverless. Cliente en Flutter+Bonfire. Backend en Firebase (Auth, Firestore, Functions) y monetización con AdMob/PayPal.",
    technical_integration: "Estructuré un Game Loop personalizado extendiendo el motor Bonfire en Dart para IA de enemigos. Integré un sistema de guardado cross-platform vinculando el progreso local con Firebase Firestore usando autenticación anónima y enlazamiento de credenciales.",
    features: [
      "Motor RPG con jefes dinámicos e IA.",
      "Sincronización persistente multi-dispositivo con Firebase.",
      "Monetización híbrida in-app."
    ],
    gallery: [
      "/assets/projects/finalrelic.png",
      "/assets/projects/image.png",
      "/assets/projects/image copy.png",
      "/assets/projects/image copy 3.png",
      "/assets/projects/image copy 5.png",
      "/assets/projects/reliccompra.png"
    ],
    tags: ["Flutter", "Dart", "Bonfire Engine", "Firebase", "AdMob"],
  },
  {
    title: "Kaelo Web Dashboard",
    role: "Frontend Developer & Web Architect",
    company: "Kaelo",
    period: "2024 — Presente",
    video_cover: "/assets/projects/kaelo-web-video.mp4",
    gallery: [
      "/assets/projects/kaelo-images (1).png",
      "/assets/projects/kaelo-images (2).png",
      "/assets/projects/kaelo-images (3).png",
      "/assets/projects/kaelo-images (4).png",
      "/assets/projects/kaelo-images (5).png",
      "/assets/projects/kaelo-images (6).png",
      "/assets/projects/kaelo-images (7).png",
      "/assets/projects/kaelo-images (8).png"
    ],
    github_url: "https://github.com/JnthnUribe/WebKaelo.git",
    description: "Plataforma administrativa para negocios locales dentro del ecosistema ciclista de Kaelo. Integrada con Supabase y construida con React.",
    elevator_pitch: "Kaelo Web es la plataforma administrativa y de gestión diseñada para empoderar a los negocios locales dentro del ecosistema ciclista de Kaelo. Proporciona a los comerciantes un panel avanzado para gestionar su presencia de forma centralizada.",
    problem: "Mientras que la aplicación móvil atiende las necesidades de los ciclistas en ruta, los negocios locales (talleres, tiendas, guías) carecían de una herramienta especializada para conectar su oferta con esta demanda.",
    solution: "Kaelo Web soluciona esto mediante un panel de administración que permite a los comerciantes gestionar sus perfiles, subir productos y visualizar analíticas de desempeño en tiempo real.",
    architecture: "Single Page Application (SPA) construida con React y TypeScript, empaquetada con Vite para máxima velocidad. Interfaz moderna y accesible utilizando Tailwind CSS y componentes de shadcn/ui.",
    technical_integration: "Integré la plataforma con el backend en Supabase para asegurar la sincronización en tiempo real de pedidos, autenticación segura y gestión eficiente de la información del negocio mediante un estado global con Zustand.",
    features: [
      "Dashboard interactivo con métricas comerciales en tiempo real.",
      "Gestión de perfil, inventario y procesamiento de pedidos.",
      "Interfaz altamente responsiva con soporte para temas."
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "shadcn/ui"],
  },
];

const FeaturedWorkSection = () => {
  return (
    <section id="experiencia" className="py-32 px-6 bg-black relative">
      {/* Subtle background element */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured <span className="text-zinc-500">Projects</span>
          </h2>
          <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">
            // Proyectos e Impacto Técnico
          </p>
        </motion.div>

        {/* Bento grid layout for Featured Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWorks.map((work, i) => (
             <FeaturedWorkCard
               key={work.title}
               work={work}
               index={i}
               // Make the featured/first item span full width or stay 1 col based on preference. 
               // For a premium asymmetric look, let's keep it standard columns but make the first one special if featured.
               className={work.featured && i === 0 ? "md:col-span-2" : ""}
             />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
