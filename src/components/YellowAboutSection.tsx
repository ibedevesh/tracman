'use client';

import { motion } from 'framer-motion';

export default function YellowAboutSection() {
  return (
    <section style={{ 
      backgroundColor: '#FFD700', 
      padding: '8rem 0'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{
            marginBottom: '3rem'
          }}
        >
          <div style={{
            fontSize: '0.9rem',
            fontWeight: '500',
            color: '#000000',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '2rem'
          }}>
            WHY WORK WITH US
          </div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: '500',
              color: '#000000',
              fontFamily: 'Arial, sans-serif',
              lineHeight: '1.3',
              marginBottom: '2rem'
            }}>
              Tracman exists to help brands, developers, and institutions stand out with Reddit marketing that lasts. Our obsession with AEO, authentic engagement, and strategic positioning comes from a simple belief: great marketing should outlive trends and make a business impossible to forget.
            </div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            {/* Top Image */}
            <div style={{
              height: '250px',
              backgroundColor: '#4ecdc4',
              border: '3px solid #000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              fontSize: '1.5rem',
              fontWeight: '700',
              fontFamily: 'Arial, sans-serif',
              textAlign: 'center'
            }}>
              REDDIT AEO<br/>EXPERTS
            </div>

            {/* Bottom Image */}
            <div style={{
              height: '200px',
              backgroundColor: '#ff6b35',
              border: '3px solid #000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '1.2rem',
              fontWeight: '700',
              fontFamily: 'Arial, sans-serif',
              textAlign: 'center'
            }}>
              AI AUTOMATION<br/>SPECIALISTS
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}