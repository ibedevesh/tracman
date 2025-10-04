'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function BlueServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      number: "01.",
      title: "AI AUTOMATION",
      image: "service1",
      description: "Every day thousands of people ask for solutions like yours but your product isn't there. Our AI automation detects conversations and recommends your product naturally, like a real human who tried it."
    },
    {
      number: "02.", 
      title: "REDDIT COMMUNITY TRUST",
      image: "service2",
      description: "Our posts aren't bot posts that get deleted. They come from high-karma accounts with good history, average 100,000+ karma. Real credibility, real engagement."
    },
    {
      number: "03.",
      title: "INDEXED & DISCOVERABLE",
      image: "service3", 
      description: "Every post gets indexed on Google with 99% non-removal rate by Reddit and mods. If removed, we don't charge."
    },
    {
      number: "04.",
      title: "UNDETECTABLE TECH",
      image: "service4", 
      description: "Reddit is not able to detect our automation till now! What better and more credible tech. Our super tech solution that Reddit can't catch us, completely undetectable to Reddit's systems."
    }
  ];

  return (
    <section id="services" style={{ 
      backgroundColor: '#4a90e2', 
      padding: '8rem 0'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{
            marginBottom: '4rem'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: isMobile ? 'center' : 'flex-start',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '2rem' : '4rem',
            marginBottom: '3rem',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <div style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              color: '#000000',
              fontFamily: 'Impact, "Arial Black", sans-serif',
              textTransform: 'uppercase',
              lineHeight: '0.9'
            }}>
              MARKETING PRODUCT
              <div style={{
                fontSize: '0.4em',
                fontWeight: '400',
                marginTop: '0.5rem',
                fontFamily: 'Arial, sans-serif'
              }}>
                Built by tech team<br/>for AI recommendation
              </div>
            </div>
            
            <div style={{
              flex: '1',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '900',
              color: '#000000',
              fontFamily: 'Impact, "Arial Black", sans-serif',
              textTransform: 'uppercase',
              lineHeight: '1.1'
            }}>
              We built tech and AI solution<br/>
              that makes AI models recommend<br/>
              YOU to users automatically.
            </div>
          </div>

          {/* Black divider line */}
          <div style={{
            height: '4px',
            backgroundColor: '#000000',
            width: '100%',
            marginBottom: '3rem'
          }}></div>
        </motion.div>

        {/* Services List */}
        <div>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{
                marginBottom: index < services.length - 1 ? '3rem' : '0',
                paddingBottom: index < services.length - 1 ? '3rem' : '0',
                borderBottom: index < services.length - 1 ? '2px solid #000000' : 'none'
              }}
            >
              {/* Clickable Service Header */}
              <div 
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: isMobile ? 'column' : 'row',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: isMobile ? 'center' : 'left'
                }}
              >
                {/* Number */}
                <div style={{
                  fontSize: 'clamp(3rem, 12vw, 8rem)',
                  fontWeight: '900',
                  color: '#000000',
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  marginRight: isMobile ? '0' : '2rem',
                  marginBottom: isMobile ? '1rem' : '0',
                  lineHeight: '0.8',
                  minWidth: isMobile ? 'auto' : 'clamp(120px, 15vw, 200px)'
                }}>
                  {service.number}
                </div>

                {/* Service Title */}
                <div style={{
                  flex: '1'
                }}>
                  <h3 style={{
                    fontSize: 'clamp(2rem, 8vw, 6rem)',
                    fontWeight: '900',
                    color: '#000000',
                    fontFamily: 'Impact, "Arial Black", sans-serif',
                    textTransform: 'uppercase',
                    margin: '0',
                    lineHeight: '0.9',
                    letterSpacing: '-0.02em'
                  }}>
                    {service.title}
                  </h3>
                </div>

                {/* Expand/Collapse Indicator */}
                <div style={{
                  width: 'clamp(60px, 8vw, 80px)',
                  height: 'clamp(60px, 8vw, 80px)',
                  backgroundColor: '#FFD700',
                  border: '3px solid #000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000000',
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: '900',
                  fontFamily: 'Arial, sans-serif',
                  marginLeft: isMobile ? '0' : '2rem',
                  marginTop: isMobile ? '1rem' : '0',
                  transition: 'transform 0.3s ease',
                  transform: expandedService === index ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>
                  +
                </div>
              </div>

              {/* Expandable Content */}
              <motion.div
                initial={false}
                animate={{ 
                  height: expandedService === index ? 'auto' : 0,
                  opacity: expandedService === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  overflow: 'hidden',
                  marginTop: expandedService === index ? '2rem' : '0'
                }}
              >
                <div style={{
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                  padding: '2rem',
                  border: '2px solid #FFD700',
                  marginLeft: 'clamp(140px, 17vw, 220px)'
                }}>
                  <p style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    color: '#000000',
                    fontFamily: 'Arial, sans-serif',
                    lineHeight: '1.5',
                    margin: '0',
                    fontWeight: '400'
                  }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}