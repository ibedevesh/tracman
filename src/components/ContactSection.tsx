'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section style={{ 
      backgroundColor: '#000000', 
      padding: '8rem 0',
      color: '#ffffff'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '900',
              color: '#fbbf24',
              fontFamily: 'Inter, system-ui, sans-serif',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem'
            }}>
              READY TO DOMINATE AEO?
            </h2>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#cccccc',
              lineHeight: '1.6',
              fontFamily: 'Inter, system-ui, sans-serif',
              marginBottom: '2rem',
              maxWidth: '500px'
            }}>
              Join the companies already winning with Answer Engine Optimization. While your competitors stick with dead SEO, we'll make your product the go-to AI answer.
            </p>

            <div style={{
              padding: '2rem',
              backgroundColor: '#111111',
              borderRadius: '1rem',
              border: '1px solid rgba(251, 191, 36, 0.2)'
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#fbbf24',
                marginBottom: '1rem',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}>
                What you get:
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {[
                  "AI-powered Reddit conversation detection",
                  "High-karma authentic account management", 
                  "99% non-removal guarantee",
                  "Natural human-like recommendations",
                  "Direct pipeline to AI training data"
                ].map((item, index) => (
                  <li key={index} style={{
                    fontSize: '1rem',
                    color: '#cccccc',
                    marginBottom: '0.75rem',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#fbbf24',
                      borderRadius: '50%',
                      flexShrink: 0
                    }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              backgroundColor: '#fbbf24',
              borderRadius: '2rem',
              padding: '3rem',
              color: '#000000'
            }}
          >
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '1.5rem',
              fontFamily: 'Inter, system-ui, sans-serif',
              textAlign: 'center'
            }}>
              Let's Talk AEO
            </h3>

            <div style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <p style={{
                fontSize: '1.1rem',
                fontWeight: '500',
                fontFamily: 'Inter, system-ui, sans-serif',
                marginBottom: '2rem'
              }}>
                Ready to leave SEO behind and dominate the AI era?
              </p>

              {/* Contact Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Email */}
                <motion.a
                  href="mailto:deveshdv760@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    padding: '1rem 1.5rem',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}
                >
                  <span>📧</span>
                  deveshdv760@gmail.com
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/ibedevesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    backgroundColor: '#0077b5',
                    color: '#ffffff',
                    padding: '1rem 1.5rem',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}
                >
                  <span>💼</span>
                  Connect on LinkedIn
                </motion.a>

                {/* X (Twitter) */}
                <motion.a
                  href="https://x.com/ibedevesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    padding: '1rem 1.5rem',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}
                >
                  <span>𝕏</span>
                  Follow on X
                </motion.a>
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '1.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '1rem',
              marginTop: '2rem'
            }}>
              <p style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                fontFamily: 'Inter, system-ui, sans-serif',
                margin: '0'
              }}>
                ⚡ Response within 24 hours<br/>
                🚀 Free AEO strategy consultation<br/>
                🎯 Custom Reddit marketing plan
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}