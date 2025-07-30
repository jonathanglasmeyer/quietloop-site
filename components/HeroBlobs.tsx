"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(media.matches);
    
    const listener = () => setPrefersReducedMotion(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
};

const HeroBlobs: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div className="fixed inset-0 w-full h-screen overflow-visible z-0 opacity-45" aria-hidden="true">
      {/* SVG Definitionen für Gradienten */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <radialGradient id="lavenderGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#D1CFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C8C6F7" stopOpacity="0.6" />
          </radialGradient>
          <radialGradient id="deepLavenderGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#B4B2F8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#A5A3E8" stopOpacity="0.6" />
          </radialGradient>
          <radialGradient id="apricotGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FFE5DC" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FAD6C9" stopOpacity="0.6" />
          </radialGradient>
          <radialGradient id="paleLavenderGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#F2F1FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E8E7FB" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>

      {/* Blob 1 - Lavender, top-left */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-auto h-auto z-0 overflow-visible"
        style={{ 
          minWidth: '500px', 
          minHeight: '500px',
          willChange: 'transform',
          transform: 'translate3d(0,0,0)'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={!prefersReducedMotion && isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, 30, -20, 0],
          y: [0, -20, 25, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={!prefersReducedMotion && isDesktop ? { 
          duration: 1.5, 
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 25,
            ease: "easeInOut"
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror", 
            duration: 30,
            ease: "easeInOut"
          }
        } : { duration: 0.8 }}
      >
        <motion.svg
          viewBox="-200 -200 400 400"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(3px) drop-shadow(0 0 15px rgba(209, 207, 255, 0.4))",
            willChange: 'transform'
          }}
        >
          <motion.path
            fill="url(#lavenderGradient)"
            d="M120,-80C150,-40,170,10,160,50C150,90,110,120,60,130C10,140,-50,130,-90,100C-130,70,-150,20,-140,-30C-130,-80,-90,-130,-40,-150C10,-170,80,-120,120,-80Z"
            animate={!prefersReducedMotion && isDesktop ? {
              d: [
                "M120,-80C150,-40,170,10,160,50C150,90,110,120,60,130C10,140,-50,130,-90,100C-130,70,-150,20,-140,-30C-130,-80,-90,-130,-40,-150C10,-170,80,-120,120,-80Z",
                "M140,-90C170,-50,180,0,170,40C160,80,120,110,70,120C20,130,-40,120,-80,90C-120,60,-140,10,-130,-40C-120,-90,-80,-140,-30,-160C20,-180,110,-130,140,-90Z",
                "M120,-80C150,-40,170,10,160,50C150,90,110,120,60,130C10,140,-50,130,-90,100C-130,70,-150,20,-140,-30C-130,-80,-90,-130,-40,-150C10,-170,80,-120,120,-80Z"
              ],
              rotate: [0, 5, 0]
            } : {}}
            transition={!prefersReducedMotion && isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "easeInOut"
            } : { duration: 0 }}
          />
        </motion.svg>
      </motion.div>

      {/* Blob 2 - Deep Lavender, top-right */}
      <motion.div
        className="absolute top-[15%] right-[5%] w-auto h-auto z-0 overflow-visible"
        style={{ 
          minWidth: '450px', 
          minHeight: '450px',
          willChange: 'transform',
          transform: 'translate3d(0,0,0)'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={!prefersReducedMotion && isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, -40, -15, 0],
          y: [0, -15, 35, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={!prefersReducedMotion && isDesktop ? { 
          duration: 1.5, 
          delay: 0.2,
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 28,
            ease: "easeInOut"
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 32,
            ease: "easeInOut"
          }
        } : { duration: 0.8 }}
      >
        <motion.svg
          viewBox="-200 -200 400 400"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(3px) drop-shadow(0 0 15px rgba(180, 178, 248, 0.4))",
            willChange: 'transform'
          }}
        >
          <motion.path
            fill="url(#deepLavenderGradient)"
            d="M110,-70C140,-30,160,20,150,60C140,100,100,130,50,140C0,150,-60,140,-100,110C-140,80,-160,30,-150,-20C-140,-70,-100,-120,-50,-140C0,-160,80,-110,110,-70Z"
            animate={!prefersReducedMotion && isDesktop ? {
              d: [
                "M110,-70C140,-30,160,20,150,60C140,100,100,130,50,140C0,150,-60,140,-100,110C-140,80,-160,30,-150,-20C-140,-70,-100,-120,-50,-140C0,-160,80,-110,110,-70Z",
                "M130,-85C155,-45,170,5,160,45C150,85,115,115,65,125C15,135,-45,125,-85,95C-125,65,-145,15,-135,-35C-125,-85,-85,-135,-35,-155C15,-175,105,-125,130,-85Z",
                "M110,-70C140,-30,160,20,150,60C140,100,100,130,50,140C0,150,-60,140,-100,110C-140,80,-160,30,-150,-20C-140,-70,-100,-120,-50,-140C0,-160,80,-110,110,-70Z"
              ],
              rotate: [0, -6, 0]
            } : {}}
            transition={!prefersReducedMotion && isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 22,
              ease: "easeInOut"
            } : { duration: 0 }}
          />
        </motion.svg>
      </motion.div>

      {/* Blob 3 - Apricot, bottom-left */}
      <motion.div
        className="absolute bottom-[5%] left-[10%] w-auto h-auto z-0 overflow-visible"
        style={{ 
          minWidth: '450px', 
          minHeight: '450px',
          willChange: 'transform',
          transform: 'translate3d(0,0,0)'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={!prefersReducedMotion && isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, 25, -30, 0],
          y: [0, 20, -15, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={!prefersReducedMotion && isDesktop ? { 
          duration: 1.5, 
          delay: 0.4,
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 26,
            ease: "easeInOut"
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 34,
            ease: "easeInOut"
          }
        } : { duration: 0.8 }}
      >
        <motion.svg
          viewBox="-200 -200 400 400"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(3px) drop-shadow(0 0 15px rgba(255, 229, 220, 0.4))",
            willChange: 'transform'
          }}
        >
          <motion.path
            fill="url(#apricotGradient)"
            d="M100,-65C125,-25,145,25,135,65C125,105,85,135,35,145C-15,155,-75,145,-115,115C-155,85,-175,35,-165,-15C-155,-65,-115,-115,-65,-135C-15,-155,75,-105,100,-65Z"
            animate={!prefersReducedMotion && isDesktop ? {
              d: [
                "M100,-65C125,-25,145,25,135,65C125,105,85,135,35,145C-15,155,-75,145,-115,115C-155,85,-175,35,-165,-15C-155,-65,-115,-115,-65,-135C-15,-155,75,-105,100,-65Z",
                "M115,-80C140,-40,155,10,145,50C135,90,95,120,45,130C-5,140,-65,130,-105,100C-145,70,-165,20,-155,-30C-145,-80,-105,-130,-55,-150C-5,-170,90,-120,115,-80Z",
                "M100,-65C125,-25,145,25,135,65C125,105,85,135,35,145C-15,155,-75,145,-115,115C-155,85,-175,35,-165,-15C-155,-65,-115,-115,-65,-135C-15,-155,75,-105,100,-65Z"
              ],
              rotate: [0, 8, 0]
            } : {}}
            transition={!prefersReducedMotion && isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 24,
              ease: "easeInOut"
            } : { duration: 0 }}
          />
        </motion.svg>
      </motion.div>

      {/* Blob 4 - Pale Lavender, bottom-right */}
      <motion.div
        className="absolute bottom-[2%] right-[10%] w-auto h-auto z-0 overflow-visible"
        style={{ 
          minWidth: '480px', 
          minHeight: '480px',
          willChange: 'transform',
          transform: 'translate3d(0,0,0)'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={!prefersReducedMotion && isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, -35, -10, 0],
          y: [0, 25, -20, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={!prefersReducedMotion && isDesktop ? { 
          duration: 1.5, 
          delay: 0.6,
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30,
            ease: "easeInOut"
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 35,
            ease: "easeInOut"
          }
        } : { duration: 0.8 }}
      >
        <motion.svg
          viewBox="-200 -200 400 400"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(3px) drop-shadow(0 0 15px rgba(242, 241, 255, 0.4))",
            willChange: 'transform'
          }}
        >
          <motion.path
            fill="url(#paleLavenderGradient)"
            d="M105,-60C135,-20,155,30,145,70C135,110,95,140,45,150C-5,160,-65,150,-105,120C-145,90,-165,40,-155,-10C-145,-60,-105,-110,-55,-130C-5,-150,75,-100,105,-60Z"
            animate={!prefersReducedMotion && isDesktop ? {
              d: [
                "M105,-60C135,-20,155,30,145,70C135,110,95,140,45,150C-5,160,-65,150,-105,120C-145,90,-165,40,-155,-10C-145,-60,-105,-110,-55,-130C-5,-150,75,-100,105,-60Z",
                "M120,-75C150,-35,170,15,160,55C150,95,110,125,60,135C10,145,-50,135,-90,105C-130,75,-150,25,-140,-25C-130,-75,-90,-125,-40,-145C10,-165,90,-115,120,-75Z",
                "M105,-60C135,-20,155,30,145,70C135,110,95,140,45,150C-5,160,-65,150,-105,120C-145,90,-165,40,-155,-10C-145,-60,-105,-110,-55,-130C-5,-150,75,-100,105,-60Z"
              ],
              rotate: [0, -7, 0]
            } : {}}
            transition={!prefersReducedMotion && isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 26,
              ease: "easeInOut"
            } : { duration: 0 }}
          />
        </motion.svg>
      </motion.div>

      {/* Blob 5 - Middle left */}
      <motion.div
        className="absolute top-[55%] left-[15%] w-auto h-auto z-0 overflow-visible"
        style={{ 
          minWidth: '500px', 
          minHeight: '500px',
          willChange: 'transform',
          transform: 'translate3d(0,0,0)'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={!prefersReducedMotion && isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, 35, -15, 0],
          y: [0, -15, 20, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={!prefersReducedMotion && isDesktop ? { 
          duration: 1.5, 
          delay: 0.3,
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 27,
            ease: "easeInOut"
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 31,
            ease: "easeInOut"
          }
        } : { duration: 0.8 }}
      >
        <motion.svg
          viewBox="-200 -200 400 400"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(3px) drop-shadow(0 0 15px rgba(209, 207, 255, 0.4))",
            willChange: 'transform'
          }}
        >
          <motion.path
            fill="url(#lavenderGradient)"
            d="M95,-55C125,-15,145,35,135,75C125,115,85,145,35,155C-15,165,-75,155,-115,125C-155,95,-175,45,-165,-5C-155,-55,-115,-105,-65,-125C-15,-145,65,-95,95,-55Z"
            animate={!prefersReducedMotion && isDesktop ? {
              d: [
                "M95,-55C125,-15,145,35,135,75C125,115,85,145,35,155C-15,165,-75,155,-115,125C-155,95,-175,45,-165,-5C-155,-55,-115,-105,-65,-125C-15,-145,65,-95,95,-55Z",
                "M110,-70C140,-30,160,20,150,60C140,100,100,130,50,140C0,150,-60,140,-100,110C-140,80,-160,30,-150,-20C-140,-70,-100,-120,-50,-140C0,-160,80,-110,110,-70Z",
                "M95,-55C125,-15,145,35,135,75C125,115,85,145,35,155C-15,165,-75,155,-115,125C-155,95,-175,45,-165,-5C-155,-55,-115,-105,-65,-125C-15,-145,65,-95,95,-55Z"
              ],
              rotate: [0, 6, 0]
            } : {}}
            transition={!prefersReducedMotion && isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 23,
              ease: "easeInOut"
            } : { duration: 0 }}
          />
        </motion.svg>
      </motion.div>

      {/* Blob 6 - Middle right */}
      <motion.div
        className="absolute top-[70%] right-[12%] w-auto h-auto z-0 overflow-visible"
        style={{ 
          minWidth: '520px', 
          minHeight: '520px',
          willChange: 'transform',
          transform: 'translate3d(0,0,0)'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={!prefersReducedMotion && isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, -30, -10, 0],
          y: [0, 18, -25, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={!prefersReducedMotion && isDesktop ? { 
          duration: 1.5, 
          delay: 0.5,
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 29,
            ease: "easeInOut"
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 33,
            ease: "easeInOut"
          }
        } : { duration: 0.8 }}
      >
        <motion.svg
          viewBox="-200 -200 400 400"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(3px) drop-shadow(0 0 15px rgba(255, 229, 220, 0.4))",
            willChange: 'transform'
          }}
        >
          <motion.path
            fill="url(#apricotGradient)"
            d="M90,-50C115,-10,135,40,125,80C115,120,75,150,25,160C-25,170,-85,160,-125,130C-165,100,-185,50,-175,0C-165,-50,-125,-100,-75,-120C-25,-140,65,-90,90,-50Z"
            animate={!prefersReducedMotion && isDesktop ? {
              d: [
                "M90,-50C115,-10,135,40,125,80C115,120,75,150,25,160C-25,170,-85,160,-125,130C-165,100,-185,50,-175,0C-165,-50,-125,-100,-75,-120C-25,-140,65,-90,90,-50Z",
                "M105,-65C130,-25,150,25,140,65C130,105,90,135,40,145C-10,155,-70,145,-110,115C-150,85,-170,35,-160,-15C-150,-65,-110,-115,-60,-135C-10,-155,80,-105,105,-65Z",
                "M90,-50C115,-10,135,40,125,80C115,120,75,150,25,160C-25,170,-85,160,-125,130C-165,100,-185,50,-175,0C-165,-50,-125,-100,-75,-120C-25,-140,65,-90,90,-50Z"
              ],
              rotate: [0, -5, 0]
            } : {}}
            transition={!prefersReducedMotion && isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "easeInOut"
            } : { duration: 0 }}
          />
        </motion.svg>
      </motion.div>
      
      {/* Subtiler Farbverlauf für Tiefe */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-apricot/5 pointer-events-none" />
    </div>
  );
};

export default HeroBlobs;
