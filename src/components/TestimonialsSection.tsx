'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = [
    {
      quote: "Their Reddit AEO completely changed our user acquisition. We went from 0 mentions to dominating conversations in our niche. ROI was 8x in the first month.",
      author: "FOUNDER",
      company: "YC S23 COMPANY",
      image: "testimonial1"
    },
    {
      quote: "Best investment we made. Their AI finds every conversation where our product should be mentioned. Feels completely natural, never spammy. Wish we found them earlier.",
      author: "GROWTH LEAD", 
      company: "A16Z PORTFOLIO COMPANY",
      image: "testimonial2"
    },
    {
      quote: "Reddit was a black box for us. These guys cracked the code. Our product is now the top recommendation in 5+ subreddits. Pipeline increased 300%.",
      author: "VP MARKETING",
      company: "YC W24 STARTUP", 
      image: "testimonial3"
    }
  ];

  return (
    <section id="testimonials" style={{ 
      backgroundColor: '#f8f8f8', 
      padding: '8rem 0'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem',
        overflow: 'hidden'
      }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{
            marginBottom: '4rem',
            textAlign: 'center'
          }}
        >
          <div style={{
            fontSize: '0.9rem',
            fontWeight: '500',
            color: '#666666',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1rem'
          }}>
            SERVING COMPANIES WORTH $50M+
          </div>
          
          <div style={{
            position: 'relative',
            display: 'inline-block'
          }}>
            {/* Large quote mark - opening */}
            {!isMobile && <div style={{
              position: 'absolute',
              top: '-1rem',
              left: '-3rem',
              fontSize: '8rem',
              color: '#FFD700',
              fontFamily: 'Georgia, serif',
              lineHeight: '1',
              transform: 'rotate(180deg)'
            }}>
              "
            </div>}
            
            <h2 style={{
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              fontWeight: '900',
              color: '#2a1f3d',
              fontFamily: 'Impact, "Arial Black", sans-serif',
              textTransform: 'uppercase',
              margin: '0',
              lineHeight: '0.9',
              letterSpacing: '-0.03em',
              position: 'relative',
              zIndex: 2
            }}>
              TESTIMONIALS
            </h2>

            {/* Large quote mark - closing */}
            {!isMobile && <div style={{
              position: 'absolute',
              bottom: '-2rem',
              right: '-3rem',
              fontSize: '8rem',
              color: '#FFD700',
              fontFamily: 'Georgia, serif',
              lineHeight: '1'
            }}>
              "
            </div>}
          </div>

          <div style={{
            marginTop: '2rem',
            fontSize: '1.1rem',
            color: '#666666',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '600px',
            margin: '2rem auto 0'
          }}>
            We are serving companies funded by YC, A16Z,<br/>
            Founders Fund and other top-tier VCs.<br/>
            Trusted by the best, delivering real results.
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '3rem',
          marginTop: '4rem'
        }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: '#ffffff',
                border: '4px solid #000000',
                padding: '0',
                borderRadius: '0px',
                boxShadow: '8px 8px 0px #FFD700',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Header Badge */}
              <div style={{
                backgroundColor: index % 3 === 0 ? '#4ecdc4' : index % 3 === 1 ? '#ff6b35' : '#45b7d1',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '4px solid #000000'
              }}>
                <div style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  fontWeight: '900',
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textTransform: 'uppercase'
                }}>
                  CLIENT SUCCESS
                </div>
                <div style={{
                  backgroundColor: '#FFD700',
                  color: '#000000',
                  padding: '0.3rem 0.8rem',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  fontFamily: 'Arial, sans-serif',
                  textTransform: 'uppercase'
                }}>
                  VERIFIED
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '2rem 1.5rem' }}>
                {/* Large opening quote */}
                <div style={{
                  fontSize: '3rem',
                  color: '#FFD700',
                  fontFamily: 'Georgia, serif',
                  lineHeight: '1',
                  marginBottom: '1rem',
                  transform: 'rotate(180deg)',
                  display: 'inline-block'
                }}>
                  "
                </div>
                
                <blockquote style={{
                  fontSize: '1rem',
                  fontStyle: 'normal',
                  color: '#333333',
                  fontFamily: 'Arial, sans-serif',
                  lineHeight: '1.5',
                  margin: '-1rem 0 1.5rem 0',
                  fontWeight: '400',
                  position: 'relative'
                }}>
                  {testimonial.quote}
                </blockquote>

                {/* Small closing quote */}
                <div style={{
                  fontSize: '2rem',
                  color: '#FFD700',
                  fontFamily: 'Georgia, serif',
                  lineHeight: '1',
                  float: 'right',
                  marginTop: '-1rem',
                  marginBottom: '1rem'
                }}>
                  "
                </div>
                
                <div style={{ clear: 'both' }}>
                  <div style={{
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    color: '#000000',
                    fontFamily: 'Arial, sans-serif',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                    borderLeft: '3px solid #FFD700',
                    paddingLeft: '0.8rem'
                  }}>
                    {testimonial.author}
                  </div>
                  
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#666666',
                    fontFamily: 'Arial, sans-serif',
                    textTransform: 'uppercase',
                    lineHeight: '1.3',
                    paddingLeft: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}