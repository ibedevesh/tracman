'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section id="hero" style={{ backgroundColor: '#FFD700', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '4rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: isMobile ? '0 1rem' : '0 2rem', 
        display: 'flex', 
        alignItems: 'center', 
        minHeight: 'calc(100vh - 4rem)',
        boxSizing: 'border-box'
      }}>
        
        {/* Left side - Main content */}
        <div style={{ flex: '1', maxWidth: '950px', width: '100%', overflowWrap: 'break-word' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              fontSize: 'clamp(4rem, 12vw, 10rem)', 
              color: '#000000',
              margin: '0 0 3rem 0',
              fontFamily: 'Impact, "Arial Black", sans-serif',
              fontWeight: '900',
              lineHeight: '0.8',
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              fontStretch: 'condensed'
            }}
          >
            IF AI IS NOT RECOMMENDING YOUR PRODUCT, YOU ARE DEAD!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ 
              fontSize: 'clamp(0.9rem, 4vw, 1.1rem)', 
              color: '#000000', 
              maxWidth: '500px', 
              lineHeight: '1.4', 
              fontWeight: '400', 
              marginBottom: 'clamp(2rem, 6vw, 3rem)',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            SEO is dying. People no longer Google, they ask AI. And AI gets its answers from Reddit. We dominate Reddit conversations with 500K+ karma accounts, AI automation, and strategic AEO that makes your product the obvious choice every single time.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ 
              display: 'flex', 
              gap: 'clamp(0.5rem, 3vw, 1rem)', 
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'stretch' : 'flex-start'
            }}
          >
            <motion.a
              href={`https://wa.me/916399935535?text=${encodeURIComponent("Hey I'm interested in Tracman.")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                backgroundColor: '#000000', 
                color: '#ffffff', 
                fontSize: 'clamp(0.75rem, 3vw, 0.875rem)', 
                fontWeight: '500', 
                padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1rem, 4vw, 2rem)', 
                borderRadius: '0px', 
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                fontFamily: 'Arial, sans-serif',
                textDecoration: 'none',
                width: isMobile ? '100%' : 'auto',
                minHeight: '48px'
              }}
            >
              <span style={{ 
                width: '1.2rem', 
                height: '1.2rem', 
                backgroundColor: '#FFD700', 
                borderRadius: '50%',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23000\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\'/%3E%3C/svg%3E")',
                backgroundSize: '60%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}></span>
              <span>BOOK A DISCOVERY CALL</span>
            </motion.a>
            
            <motion.a
              href="https://www.notion.so/ibedevesh/How-I-hacked-Social-Media-173138d4ebeb8082abf4d64bc02f4bef?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                backgroundColor: 'transparent', 
                color: '#000000', 
                fontSize: 'clamp(0.75rem, 3vw, 0.875rem)', 
                fontWeight: '500', 
                padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1rem, 4vw, 2rem)', 
                borderRadius: '0px', 
                border: '2px solid #000000',
                cursor: 'pointer',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                fontFamily: 'Arial, sans-serif',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile ? '100%' : 'auto',
                minHeight: '48px',
                textAlign: 'center'
              }}
            >
              SEE OUR WORK
            </motion.a>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}