import { X, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

export interface ProjectDetails {
  title: string;
  role?: string;
  type?: string;
  description: string;
  tags: string[];
  
  // Extended details
  elevator_pitch?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  features?: string[];
  
  image_cover?: string;
  video_cover?: string;
  gallery?: string[]; // Array of extra media URLs (images or videos)
  github_url?: string;
  live_url?: string;
}

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetails;
}

const ProjectDetailsModal = ({ isOpen, onClose, project }: ProjectDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      {/* We apply custom styles to the dialog content to match the premium dark theme */}
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-border bg-background sm:rounded-2xl">
        <DialogHeader className="p-6 border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-10 flex flex-row items-start justify-between">
          <div className="text-left space-y-1 mt-2">
            <DialogTitle className="text-2xl font-bold tracking-tight">
              {project.title}
            </DialogTitle>
            {(project.role || project.type) && (
              <p className="font-mono text-xs text-muted-foreground">
                {project.role} {project.role && project.type && "—"} {project.type}
              </p>
            )}
          </div>
          
          <div className="flex items-center gap-3 mt-1">
             {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                title="Ver código fuente"
              >
                <Github className="size-5" />
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                title="Ver proyecto en vivo"
              >
                <ExternalLink className="size-5" />
              </a>
            )}
            {/* Native close button is hidden since we disabled it in standard header, let's just use the customized one if needed, but Dialog Content already renders one. Wait, in my Dialog Content I left the primitive close. I'll just let DialogPrimitive.Close handle it via shadcn default. */}
          </div>
        </DialogHeader>

        <div className="p-6 space-y-8">
          {/* Main Media Area */}
          <div className="w-full">
            {project.video_cover ? (
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-black border border-border/50 relative shadow-2xl">
                <video 
                  src={project.video_cover}
                  autoPlay
                  controls
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            ) : project.image_cover ? (
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-black border border-border/50 relative flex items-center justify-center shadow-2xl">
                 <img 
                   src={project.image_cover}
                   alt={project.title}
                   className="w-full h-full object-contain opacity-90"
                 />
              </div>
            ) : null}

            {/* Gallery / Extra Images */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {project.gallery.map((mediaUrl, idx) => {
                  const isVideo = mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.webm') || mediaUrl.endsWith('.mov');
                  return (
                    <div key={idx} className="w-full rounded-xl overflow-hidden bg-black/40 border border-white/5 relative group hover:border-white/20 transition-colors flex items-center justify-center">
                      {isVideo ? (
                        <video 
                          src={mediaUrl} 
                          autoPlay 
                          muted 
                          controls
                          loop 
                          playsInline 
                          className="w-full h-auto max-h-[600px] object-contain group-hover:scale-[1.02] transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                        />
                      ) : (
                        <img 
                          src={mediaUrl} 
                          alt={`${project.title} screenshot ${idx + 1}`} 
                          className="w-full h-auto max-h-[600px] object-contain group-hover:scale-[1.02] transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Content sections via framer-motion stagger if we want, but since modal opens via Radix, 
              we can just use standard CSS or simple motion divs. */}
          <div className="space-y-6 text-sm text-foreground/90 leading-relaxed">
            {project.elevator_pitch && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <p className="text-base text-foreground font-medium">{project.elevator_pitch}</p>
              </motion.div>
            )}

            {project.problem && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h3 className="text-base font-semibold text-foreground mb-2">⚠️ El Problema</h3>
                <p className="text-muted-foreground">{project.problem}</p>
              </motion.div>
            )}

            {project.solution && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h3 className="text-base font-semibold text-foreground mb-2">💡 La Solución</h3>
                <p className="text-muted-foreground">{project.solution}</p>
              </motion.div>
            )}

            {project.architecture && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h3 className="text-base font-semibold text-foreground mb-2">🛠️ Mi Rol y Arquitectura</h3>
                <p className="text-muted-foreground">{project.architecture}</p>
              </motion.div>
            )}

            {project.features && project.features.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                 <h3 className="text-base font-semibold text-foreground mb-2">✨ Características Clave</h3>
                 <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                 </ul>
              </motion.div>
            )}
          </div>

          <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
             className="pt-6 border-t border-border flex flex-wrap gap-2"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;
