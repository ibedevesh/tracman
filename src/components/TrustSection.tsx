'use client';

import { motion } from 'framer-motion';

export default function TrustSection() {
  return (
    <section style={{ 
      backgroundColor: '#FFD700', 
      padding: 'clamp(3rem, 8vw, 6rem) 0'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        {/* Section Title - Black underline like example */}
        <div style={{
          marginBottom: 'clamp(2rem, 6vw, 4rem)'
        }}>
          <div style={{
            height: '3px',
            backgroundColor: '#000000',
            width: '100%',
            marginBottom: '2rem'
          }}></div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              fontWeight: '500',
              color: '#000000',
              fontFamily: 'Arial, sans-serif',
              textAlign: 'center',
              letterSpacing: '0.02em'
            }}
          >
            Working with great companies funded from 
          </motion.h2>
        </div>

        {/* Company Logos Row - Exactly like MAMMOTH MURALS example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(2rem, 8vw, 4rem)',
            flexWrap: 'wrap'
          }}
        >
          {/* YC Logo */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1',
            minWidth: 'clamp(120px, 25vw, 180px)'
          }}>
            <div style={{
              fontSize: 'clamp(2rem, 8vw, 3rem)',
              fontWeight: '900',
              color: '#000000',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              YC
            </div>
            <div style={{
              fontSize: 'clamp(0.6rem, 2vw, 0.7rem)',
              fontWeight: '500',
              color: '#000000',
              marginTop: '0.5rem',
              textAlign: 'center',
              lineHeight: '1.2',
              fontFamily: 'Arial, sans-serif'
            }}>
              Y COMBINATOR
            </div>
          </div>

          {/* A16Z Logo */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1',
            minWidth: 'clamp(120px, 25vw, 180px)'
          }}>
            <div style={{
              fontSize: 'clamp(1.5rem, 6vw, 2.2rem)',
              fontWeight: '900',
              color: '#000000',
              fontFamily: 'Arial, sans-serif',
              borderTop: 'clamp(2px, 1vw, 3px) solid #000000',
              borderBottom: 'clamp(2px, 1vw, 3px) solid #000000',
              padding: 'clamp(0.5rem, 2vw, 0.8rem) 0',
              letterSpacing: '0.05em'
            }}>
              A16Z
            </div>
            <div style={{
              fontSize: 'clamp(0.6rem, 2vw, 0.7rem)',
              fontWeight: '500',
              color: '#000000',
              marginTop: '0.5rem',
              fontFamily: 'Arial, sans-serif'
            }}>
              ANDREESSEN HOROWITZ
            </div>
          </div>

          {/* FOUNDERS FUND Logo */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1',
            minWidth: 'clamp(150px, 35vw, 220px)'
          }}>
            <div style={{
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1rem, 4vw, 2rem)',
              borderRadius: '0px',
              fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
              fontWeight: '900',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '0.1em',
              textAlign: 'center'
            }}>
              FOUNDERS FUND
            </div>
            <div style={{
              fontSize: 'clamp(0.6rem, 2vw, 0.7rem)',
              fontWeight: '500',
              color: '#000000',
              marginTop: '0.5rem',
              fontFamily: 'Arial, sans-serif'
            }}>
              VENTURE CAPITAL
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}