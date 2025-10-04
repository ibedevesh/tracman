'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function EndingSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const whatsappMessage = encodeURIComponent("Hey I'm interested in Tracman.");
  const whatsappLink = `https://wa.me/916399935535?text=${whatsappMessage}`;

  return (
    <section style={{ 
      backgroundColor: '#2a1f3d', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Yellow Lines */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: isMobile ? '5%' : '10%',
        transform: 'rotate(-15deg)',
        display: isMobile ? 'none' : 'block'
      }}>
        <div style={{
          width: '80px',
          height: '8px',
          backgroundColor: '#FFD700',
          marginBottom: '12px'
        }}></div>
        <div style={{
          width: '60px',
          height: '8px',
          backgroundColor: '#FFD700',
          marginBottom: '12px'
        }}></div>
        <div style={{
          width: '40px',
          height: '8px',
          backgroundColor: '#FFD700'
        }}></div>
      </div>

      <div style={{
        position: 'absolute',
        top: '20%',
        right: isMobile ? '5%' : '15%',
        transform: 'rotate(25deg)',
        display: isMobile ? 'none' : 'block'
      }}>
        <div style={{
          width: '60px',
          height: '8px',
          backgroundColor: '#FFD700',
          marginBottom: '12px'
        }}></div>
        <div style={{
          width: '80px',
          height: '8px',
          backgroundColor: '#FFD700',
          marginBottom: '12px'
        }}></div>
        <div style={{
          width: '50px',
          height: '8px',
          backgroundColor: '#FFD700'
        }}></div>
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 10rem)',
            fontWeight: '900',
            color: '#ffffff',
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textTransform: 'uppercase',
            lineHeight: '0.9',
            letterSpacing: '-0.04em',
            margin: '0 0 2rem 0',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            maxWidth: '100%',
            hyphens: 'auto'
          }}
        >
          LET'S BUILD SOMETHING UNFORGETTABLE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.4',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            fontWeight: '400'
          }}
        >
          Let's talk strategy, automation, and how Reddit AEO<br/>
          can give your brand a powerful digital presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: '#ffffff',
              color: '#2a1f3d',
              fontSize: '1.1rem',
              fontWeight: '700',
              padding: '1.2rem 2.5rem',
              border: 'none',
              borderRadius: '0px',
              cursor: 'pointer',
              textDecoration: 'none',
              fontFamily: 'Arial, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <span style={{
              width: '1.5rem',
              height: '1.5rem',
              backgroundColor: '#2a1f3d',
              borderRadius: '50%',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23FFD700\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\'/%3E%3C/svg%3E")',
              backgroundSize: '60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}></span>
            BOOK A DISCOVERY CALL
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}