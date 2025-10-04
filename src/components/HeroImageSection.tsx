'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroImageSection() {
  return (
    <section style={{ 
      backgroundColor: '#fbbf24', 
      padding: '4rem 0', 
      overflow: 'visible'
    }}>
      <div style={{
        width: '100%',
        padding: '0 2rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: 'relative',
            width: '100%',
            height: '60vh',
            minHeight: '500px',
            borderRadius: '2rem',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
            border: '6px solid #000000'
          }}
        >
          <Image
            src="/heroImage.png"
            alt="Tracman AEO Marketing Demo"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'top center'
            }}
            sizes="100vw"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}