'use client';

import { motion } from 'framer-motion';

export default function OurWorkSection() {
  return (
    <section style={{ 
      backgroundColor: '#f5f5f5', 
      padding: '8rem 0',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {/* Massive OUR WORK Typography */}
        <div style={{
          position: 'relative',
          marginBottom: '4rem'
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(6rem, 15vw, 12rem)',
              fontWeight: '900',
              color: '#2a1f3d',
              fontFamily: 'Impact, "Arial Black", sans-serif',
              lineHeight: '0.8',
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              fontStretch: 'condensed',
              margin: '0',
              position: 'relative',
              zIndex: 2
            }}
          >
            OUR WORK
          </motion.h2>
          
          {/* Overlaid description text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              position: 'absolute',
              top: '20%',
              right: '10%',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '1.5rem',
              maxWidth: '350px',
              zIndex: 3,
              borderRadius: '0px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.5',
              color: '#000000',
              fontFamily: 'Arial, sans-serif',
              margin: '0',
              fontWeight: '400'
            }}>
              Don't let blank conversations waste potential.<br/>
              See how our clients turn empty Reddit threads into<br/>
              buzz, foot traffic, and business results.
            </p>
          </motion.div>
        </div>

        {/* Work Examples Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginTop: '3rem'
          }}
        >
          {/* Reddit AEO Success Story 1 */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '0px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '3px solid #000000'
          }}>
            <div style={{
              height: '300px',
              backgroundColor: '#ff4444',
              backgroundImage: 'linear-gradient(135deg, #ff4444 0%, #cc0000 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '1.5rem',
              fontWeight: '900',
              fontFamily: 'Arial, sans-serif',
              textAlign: 'center'
            }}>
              REDDIT AEO<br/>SUCCESS STORY
            </div>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#ffffff'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#000000',
                fontFamily: 'Arial, sans-serif',
                margin: '0 0 0.5rem 0',
                textTransform: 'uppercase'
              }}>
                200% TRAFFIC INCREASE
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666666',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.4',
                margin: '0'
              }}>
                Strategic Reddit engagement across 15 subreddits, 50K+ authentic upvotes, 500+ qualified leads generated.
              </p>
            </div>
          </div>

          {/* High-Karma Account Portfolio */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '0px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '3px solid #000000'
          }}>
            <div style={{
              height: '300px',
              backgroundColor: '#2a1f3d',
              backgroundImage: 'linear-gradient(135deg, #2a1f3d 0%, #1a1520 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFD700',
              fontSize: '1.5rem',
              fontWeight: '900',
              fontFamily: 'Arial, sans-serif',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div>
                HIGH-KARMA<br/>NETWORK
              </div>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '0.8rem',
                backgroundColor: '#FFD700',
                color: '#000000',
                padding: '0.3rem 0.8rem',
                fontWeight: '700'
              }}>
                500K+ KARMA
              </div>
            </div>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#ffffff'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#000000',
                fontFamily: 'Arial, sans-serif',
                margin: '0 0 0.5rem 0',
                textTransform: 'uppercase'
              }}>
                AI-POWERED AUTOMATION
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666666',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.4',
                margin: '0'
              }}>
                24/7 monitoring, intelligent conversation detection, authentic engagement at scale across Reddit communities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}