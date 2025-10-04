'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 215, 0, 0.95)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem',
          position: 'relative'
        }}>
          {/* Logo - Left */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{
              backgroundColor: '#000000',
              padding: '0.5rem 1.2rem',
              borderRadius: '0px'
            }}
          >
            <Link href="/" style={{
              fontSize: '1rem',
              fontWeight: '900',
              color: '#ffffff',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              fontFamily: 'Arial, sans-serif'
            }}>
              TRACMAN
            </Link>
          </motion.div>
          
          {/* Desktop - Navigation Pills in CENTER */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'none',
            alignItems: 'center',
            gap: '0.5rem'
          }} className="md:flex">
            {[
              { name: 'WORK', href: 'https://www.notion.so/How-I-hacked-Social-Media-173138d4ebeb8082abf4d64bc02f4bef' },
              { name: 'SERVICES', href: '#services' },
              { name: 'TESTIMONIALS', href: '#testimonials' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href={item.href}
                  target={item.name === 'WORK' ? '_blank' : undefined}
                  rel={item.name === 'WORK' ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'inline-block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#000000',
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    fontFamily: 'Arial, sans-serif',
                    textTransform: 'uppercase',
                    padding: '0.6rem 1.2rem',
                    border: '2px solid #000000',
                    borderRadius: '0px',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Desktop - Chat Button in TOP RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'none'
            }}
            className="md:flex"
          >
            <a
              href={`https://wa.me/916399935535?text=${encodeURIComponent("Hey I'm interested in Tracman.")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                fontSize: '0.875rem',
                fontWeight: '500',
                padding: '0.6rem 1.2rem',
                borderRadius: '0px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'Arial, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                textDecoration: 'none'
              }}
            >
              <span style={{
                width: '1.25rem',
                height: '1.25rem',
                backgroundColor: '#ffffff',
                borderRadius: '50%'
              }}></span>
              <span>CHAT WITH US</span>
            </a>
          </motion.div>

          {/* Mobile - ONLY Menu Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              backgroundColor: 'transparent',
              color: '#000000',
              fontSize: '1rem',
              fontWeight: '500',
              padding: '0.6rem 1.2rem',
              borderRadius: '0px',
              border: '2px solid #000000',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              display: 'block'
            }}
            className="md:hidden"
          >
            MENU +
          </motion.button>
        </div>
        
        {/* Mobile Menu Dropdown - Contains ALL items including Chat */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: 'rgba(255, 215, 0, 0.95)',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              padding: '1rem 0'
            }}
            className="md:hidden"
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {/* Navigation Links */}
              {[
                { name: 'WORK', href: 'https://www.notion.so/How-I-hacked-Social-Media-173138d4ebeb8082abf4d64bc02f4bef' },
                { name: 'SERVICES', href: '#services' },
                { name: 'TESTIMONIALS', href: '#testimonials' }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a 
                    href={item.href}
                    target={item.name === 'WORK' ? '_blank' : undefined}
                    rel={item.name === 'WORK' ? 'noopener noreferrer' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#000000',
                      letterSpacing: '0.02em',
                      textDecoration: 'none',
                      fontFamily: 'Arial, sans-serif',
                      textTransform: 'uppercase',
                      padding: '0.75rem 1rem',
                      border: '2px solid #000000',
                      borderRadius: '0px',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
              
              {/* Chat Button in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <a
                  href={`https://wa.me/916399935535?text=${encodeURIComponent("Hey I'm interested in Tracman.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    padding: '0.75rem 1rem',
                    borderRadius: '0px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontFamily: 'Arial, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    width: '100%',
                    textDecoration: 'none'
                  }}
                >
                  <span style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%'
                  }}></span>
                  <span>CHAT WITH US</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}