import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroDashboardSection from "@/components/HeroDashboardSection";
import AboutSection from "@/components/AboutSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling while dashboard is closed
    if (!isDashboardOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Force top
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Cleanup to prevent stuck overflow if unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDashboardOpen]);

  const handleEnterPortfolio = () => {
    setIsDashboardOpen(true);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-clip">
      <CustomCursor />
      
      {/* Overlaid Welcome Dashboard */}
      <AnimatePresence>
        {!isDashboardOpen && (
          <motion.div
            key="dashboard-overlay"
            initial={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
            className="fixed inset-0 z-[100] bg-black shadow-2xl origin-top"
          >
            <HeroDashboardSection onEnter={handleEnterPortfolio} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Base Portfolio Layout (Revealed upon Dashboard exit) */}
      <div className="relative z-10 flex flex-col bg-black">
        {/* Global Navbar - sticky at the top of the normal flow */}
        <AnimatePresence>
          {isDashboardOpen && (
            <motion.div
              key="global-navbar"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="sticky top-0 z-[110] w-full"
            >
              <Navbar />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Removed pt-32 sm:pt-40 padding so sections connect perfectly to the sticky nav */}
        <main className="flex-1">
          <AboutSection />
          <FeaturedWorkSection />
          <SkillsSection />
        </main>
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
