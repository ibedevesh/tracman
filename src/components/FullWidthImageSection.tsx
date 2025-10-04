'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FullWidthImageSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section style={{ 
      backgroundColor: '#FFD700', 
      padding: 'clamp(2rem, 5vw, 3rem) 0'
    }}>
      <div style={{
        width: '100%',
        padding: '0 1rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(300px, 50vh, 60vh)',
            minHeight: '300px',
            maxWidth: '1400px',
            margin: '0 auto',
            border: 'clamp(4px, 2vw, 8px) solid #FFD700',
            backgroundColor: '#FFD700',
            overflow: 'hidden',
            borderRadius: 'clamp(6px, 2vw, 12px)'
          }}
        >
          {/* Hero Image - ChatGPT Screenshot showing AEO in action */}
          <Image
            src="/heroImage.png"
            alt="AI recommending content based on Reddit conversations - AEO in action"
            fill
            style={{
              objectFit: isMobile ? 'contain' : 'cover',
              objectPosition: isMobile ? 'center center' : 'top center'
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            priority
          />
          
          {/* Fact overlay with link */}
          <a 
            href="https://www.visualcapitalist.com/ranked-the-most-cited-websites-by-ai-models/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              bottom: 'clamp(10px, 3vw, 20px)',
              left: 'clamp(10px, 3vw, 20px)',
              right: 'clamp(10px, 3vw, 20px)',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              color: '#FFD700',
              padding: 'clamp(0.5rem, 2vw, 1rem) clamp(0.75rem, 3vw, 1.5rem)',
              fontSize: 'clamp(0.7rem, 2.5vw, 0.9rem)',
              fontWeight: '700',
              fontFamily: 'Arial, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              textAlign: 'center',
              lineHeight: '1.2'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 1)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
              e.currentTarget.style.color = '#FFD700';
            }}
          >
            FACT: REDDIT IS 40.1% OF ALL AI CITATIONS - VISUAL CAPITALIST STUDY
          </a>
        </motion.div>
      </div>
    </section>
  );
}