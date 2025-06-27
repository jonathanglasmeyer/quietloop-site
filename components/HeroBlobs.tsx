"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Viel komplexere, unregelmäßigere SVG-Pfade für wirklich interessante Formen
const blobPaths = [
  // Komplexere Form 1 - stark asymmetrisch
  "M170.4,-117.9C221.9,-57.3,265.7,13.7,250.7,70.6C235.7,127.6,161.8,170.6,95.3,177.2C28.8,183.8,-30.2,154,-89.9,115.3C-149.5,76.6,-209.8,29,-220.4,-29.8C-231,-88.7,-192,-158.8,-138.1,-217.9C-84.3,-277.1,-15.5,-325.2,30.5,-347C76.5,-368.8,118.9,-178.4,170.4,-117.9Z",
  // Komplexere Form 2 - mit tiefen Einbuchtungen
  "M135.3,-101.8C178.4,-44.2,219.3,19.8,209.8,78.1C200.2,136.4,140.2,189.1,71.3,210.8C2.4,232.5,-75.4,223,-129,181.7C-182.6,140.3,-211.9,67.2,-210.4,-0.8C-208.8,-68.9,-176.3,-131.9,-126.4,-188C-76.4,-244.1,-8.9,-293.3,30.3,-284.5C69.5,-275.6,92.3,-159.3,135.3,-101.8Z",
  // Komplexere Form 3 - mit Ausstülpungen
  "M79.4,-55.9C105.7,-25.4,131.7,9.2,131.8,48C131.9,86.8,106.2,129.9,70.3,144.4C34.5,159,-11.5,145.1,-58.8,126C-106,106.8,-154.5,82.4,-173.1,41.4C-191.8,0.4,-180.6,-57.1,-151.8,-88.8C-122.9,-120.6,-76.4,-126.5,-38.2,-119.5C0,-112.5,53.1,-86.4,79.4,-55.9Z",
  // Komplexere Form 4 - stark zerklüftet
  "M86.8,-61.1C115.2,-31.1,143.1,5.1,142.1,42.9C141.1,80.7,111.3,120.1,74.9,134.8C38.5,149.5,-4.6,139.6,-52,123.6C-99.5,107.6,-151.4,85.5,-166.8,47.3C-182.2,9,-161,-45.4,-129.8,-79C-98.7,-112.7,-57.6,-125.7,-19.3,-119.9C18.9,-114.1,58.5,-91.1,86.8,-61.1Z",
  // Komplexere Form 5 - extrem unregelmäßig
  "M151.7,-117.2C188.9,-69.5,208.3,-6,196,50.6C183.7,107.3,139.7,157.2,84.1,183.9C28.5,210.6,-38.8,214.2,-87.4,188.1C-136.1,162,-166.2,106.3,-178.3,46.2C-190.5,-14,-184.8,-78.6,-152,-131.5C-119.1,-184.4,-59.6,-225.7,-0.3,-225.5C58.9,-225.3,114.5,-164.9,151.7,-117.2Z"
];

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

const HeroBlobs: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
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

      {/* Blob 1 - Lavender, top-left - mit interessanter Form */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-auto h-auto z-0 overflow-visible"
        style={{ minWidth: '500px', minHeight: '500px' }}
        initial={{ scale: 0.8, opacity: 0, x: 0, y: 0 }}
        animate={isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, 50, -30, 70, 20, 0],
          y: [0, -30, 40, 10, -20, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={isDesktop ? { 
          duration: 2, 
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 120,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 140,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          }
        } : { duration: 0 }}
      >
        <motion.svg
          viewBox="-300 -300 600 600"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(6px) drop-shadow(0 0 25px rgba(209, 207, 255, 0.55))" 
          }}
        >
          <motion.path
            fill="url(#lavenderGradient)"
            d={blobPaths[0]}
            animate={{
              d: isDesktop ? [blobPaths[0], blobPaths[1], blobPaths[2], blobPaths[3], blobPaths[4], blobPaths[0]] : blobPaths[0],
              rotate: isDesktop ? [0, 10, 4, 15, 7, 0] : 0,
              scale: isDesktop ? [1, 1.15, 1.08, 1.12, 1.05, 1] : 1,
            }}
            transition={isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 70,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            } : { duration: 0 }}
          />
        </motion.svg>
      </motion.div>

      {/* Blob 2 - Deep Lavender, top-right */}
      <motion.div
        className="absolute top-[15%] right-[5%] w-auto h-auto z-0 overflow-visible"
        style={{ minWidth: '450px', minHeight: '450px' }}
        initial={{ scale: 0.8, opacity: 0, x: 0, y: 0 }}
        animate={isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, -60, -20, -80, -30, 0],
          y: [0, -20, 50, 0, -40, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={isDesktop ? { 
          duration: 2, 
          delay: 0.3, 
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 130,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 110,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          }
        } : { duration: 0 }}
      >
        <motion.svg
          viewBox="-300 -300 600 600"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(6px) drop-shadow(0 0 25px rgba(180, 178, 248, 0.55))" 
          }}
        >
          <motion.path
            fill="url(#deepLavenderGradient)"
            d={blobPaths[1]}
            animate={{
              d: isDesktop ? [blobPaths[1], blobPaths[2], blobPaths[3], blobPaths[4], blobPaths[0], blobPaths[1]] : blobPaths[1],
              rotate: isDesktop ? [0, -8, -12, -5, -10, 0] : 0,
              scale: isDesktop ? [1, 1.12, 1.16, 1.08, 1.14, 1] : 1,
            }}
            transition={isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 80,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            } : { duration: 0 }}
          />
        </motion.svg>
      </motion.div>

      {/* Blob 3 - Apricot, bottom-left */}
      <motion.div
        className="absolute bottom-[5%] left-[10%] w-auto h-auto z-0 overflow-visible"
        style={{ minWidth: '450px', minHeight: '450px' }}
        initial={{ scale: 0.8, opacity: 0, x: 0, y: 0 }}
        animate={isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, 40, -50, 20, 70, 0],
          y: [0, 30, -20, 60, 10, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={isDesktop ? { 
          duration: 2, 
          delay: 0.6, 
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 125,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 135,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          }
        } : { duration: 0 }}
      >
        <motion.svg
          viewBox="-300 -300 600 600"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(6px) drop-shadow(0 0 25px rgba(255, 229, 220, 0.55))" 
          }}
        >
          <motion.path
            fill="url(#apricotGradient)"
            d={blobPaths[2]}
            animate={{
              d: isDesktop ? [blobPaths[2], blobPaths[3], blobPaths[4], blobPaths[0], blobPaths[1], blobPaths[2]] : blobPaths[2],
              rotate: isDesktop ? [0, 12, 5, 15, 3, 0] : 0,
              scale: isDesktop ? [1, 1.14, 1.08, 1.16, 1.05, 1] : 1,
            }}
            transition={isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 75,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            } : { duration: 0 }}
          />
        </motion.svg>
      </motion.div>

      {/* Blob 4 - Pale Lavender, bottom-right */}
      <motion.div
        className="absolute bottom-[2%] right-[10%] w-auto h-auto z-0 overflow-visible"
        style={{ minWidth: '480px', minHeight: '480px' }}
        initial={{ scale: 0.8, opacity: 0, x: 0, y: 0 }}
        animate={isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, -50, -10, -70, -30, 0],
          y: [0, 40, -30, 10, 50, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={isDesktop ? { 
          duration: 2, 
          delay: 0.9, 
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 140,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 120,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          }
        } : { duration: 0 }}
      >
        <motion.svg
          viewBox="-300 -300 600 600"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(6px) drop-shadow(0 0 25px rgba(242, 241, 255, 0.55))" 
          }}
        >
          <motion.path
            fill="url(#paleLavenderGradient)"
            d={blobPaths[3]}
            animate={{
              d: isDesktop ? [blobPaths[3], blobPaths[4], blobPaths[0], blobPaths[1], blobPaths[2], blobPaths[3]] : blobPaths[3],
              rotate: isDesktop ? [0, -10, -6, -14, -4, 0] : 0,
              scale: isDesktop ? [1, 1.1, 1.15, 1.06, 1.12, 1] : 1,
            }}
            transition={isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 85,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            } : { duration: 0 }}
          />
        </motion.svg>
      </motion.div>

      {/* Blob 5 - Mittlerer Bereich links */}
      <motion.div
        className="absolute top-[55%] left-[15%] w-auto h-auto z-0 overflow-visible"
        style={{ minWidth: '500px', minHeight: '500px' }}
        initial={{ scale: 0.8, opacity: 0, x: 0, y: 0 }}
        animate={isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, 60, -20, 40, 10, 0],
          y: [0, -20, 30, -10, -30, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={isDesktop ? { 
          duration: 2, 
          delay: 0.5, 
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 115,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 125,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          }
        } : { duration: 0 }}
      >
        <motion.svg
          viewBox="-300 -300 600 600"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(6px) drop-shadow(0 0 25px rgba(209, 207, 255, 0.55))" 
          }}
        >
          <motion.path
            fill="url(#lavenderGradient)"
            d={blobPaths[4]}
            animate={{
              d: isDesktop ? [blobPaths[4], blobPaths[0], blobPaths[1], blobPaths[2], blobPaths[3], blobPaths[4]] : blobPaths[4],
              rotate: isDesktop ? [0, 8, 15, 5, 12, 0] : 0,
              scale: isDesktop ? [1, 1.12, 1.05, 1.14, 1.08, 1] : 1,
            }}
            transition={isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 78,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            } : { duration: 0 }}
          />
        </motion.svg>
      </motion.div>

      {/* Blob 6 - Mittlerer Bereich rechts */}
      <motion.div
        className="absolute top-[70%] right-[12%] w-auto h-auto z-0 overflow-visible"
        style={{ minWidth: '520px', minHeight: '520px' }}
        initial={{ scale: 0.8, opacity: 0, x: 0, y: 0 }}
        animate={isDesktop ? { 
          scale: 1, 
          opacity: 0.6,
          x: [0, -40, -15, -55, -25, 0],
          y: [0, 25, -40, 15, 30, 0]
        } : { scale: 1, opacity: 0.6 }}
        transition={isDesktop ? { 
          duration: 2, 
          delay: 0.7, 
          ease: "easeOut",
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 132,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          },
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 118,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          }
        } : { duration: 0 }}
      >
        <motion.svg
          viewBox="-300 -300 600 600"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ 
            overflow: 'visible',
            filter: "blur(6px) drop-shadow(0 0 25px rgba(255, 229, 220, 0.55))" 
          }}
        >
          <motion.path
            fill="url(#apricotGradient)"
            d={blobPaths[3]}
            animate={{
              d: isDesktop ? [blobPaths[3], blobPaths[4], blobPaths[0], blobPaths[1], blobPaths[2], blobPaths[3]] : blobPaths[3],
              rotate: isDesktop ? [0, -7, -14, -4, -9, 0] : 0,
              scale: isDesktop ? [1, 1.08, 1.15, 1.06, 1.1, 1] : 1,
            }}
            transition={isDesktop ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 82,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
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
