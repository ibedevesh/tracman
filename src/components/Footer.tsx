'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const whatsappMessage = encodeURIComponent("Hey I'm interested in Tracman.");
  const whatsappLink = `https://wa.me/916399935535?text=${whatsappMessage}`;

  return (
    <footer style={{ 
      backgroundColor: '#f5f5f5', 
      padding: '3rem 0 1rem 0',
      color: '#000000'
    }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          
          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(2rem, 8vw, 6rem)',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {[
              { name: 'HOME', href: '#hero' },
              { name: 'WORK', href: 'https://www.notion.so/How-I-hacked-Social-Media-173138d4ebeb8082abf4d64bc02f4bef' },
              { name: 'SERVICES', href: '#services' },
              { name: 'TESTIMONIALS', href: '#testimonials' },
              { name: 'CONTACT', href: whatsappLink }
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name === 'CONTACT' || link.name === 'WORK' ? '_blank' : undefined}
                rel={link.name === 'CONTACT' || link.name === 'WORK' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                  fontWeight: '900',
                  color: '#000000',
                  textDecoration: 'none',
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Bottom Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingTop: '2rem',
            borderTop: '2px solid #cccccc'
          }}>
            
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                fontSize: '0.9rem',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                NEW DELHI, INDIA
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.9rem',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#000000',
                  textDecoration: 'none'
                }}
              >
                +91 6399935535
              </a>
            </motion.div>

            {/* Center - Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <div style={{
                fontSize: '0.9rem',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                SOCIALS
              </div>
              <a
                href="https://www.linkedin.com/in/ibedevesh/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#666666',
                  textDecoration: 'none'
                }}
              >
                LINKEDIN
              </a>
              <a
                href="https://x.com/ibedevesh"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#666666',
                  textDecoration: 'none'
                }}
              >
                X / TWITTER
              </a>
            </motion.div>

            {/* Right Side - Copyright */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                textAlign: 'right'
              }}
            >
              <div style={{
                fontSize: '0.9rem',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                WEBSITE BY TRACMAN
              </div>
              <div style={{
                fontSize: '0.8rem',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '600',
                color: '#666666'
              }}>
                ©2025 — ALL RIGHTS RESERVED
              </div>
            </motion.div>
          </div>
        </div>
    </footer>
  );
}