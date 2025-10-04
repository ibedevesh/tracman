'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "AI CONVERSATION DETECTION",
      description: "Our AI automation detects thousands of conversations daily where people ask for solutions like yours. We find the exact moments when your product could help.",
      icon: "🤖"
    },
    {
      number: "02", 
      title: "HIGH-KARMA AUTHENTIC ACCOUNTS",
      description: "We operate with accounts averaging 100,000+ karma and years of authentic history. No bots, no fake profiles - just credible community members.",
      icon: "⭐"
    },
    {
      number: "03",
      title: "NATURAL HUMAN RECOMMENDATIONS", 
      description: "Our recommendations read like genuine user experiences. We craft responses as if a real customer tried and loved your product.",
      icon: "💬"
    },
    {
      number: "04",
      title: "99% NON-REMOVAL GUARANTEE",
      description: "Our posts get indexed on Google with 99% non-removal rate. If Reddit or mods remove our content, you don't pay. That's our quality guarantee.",
      icon: "🛡️"
    }
  ];

  return (
    <section style={{ 
      backgroundColor: '#000000', 
      padding: '8rem 0',
      color: '#ffffff'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '900',
              color: '#fbbf24',
              fontFamily: 'Inter, system-ui, sans-serif',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem'
            }}
          >
            HOW WE DOMINATE AEO
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.25rem',
              color: '#cccccc',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            While others chase old SEO tactics, we're building the future of marketing through authentic Reddit engagement that feeds AI answers.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              style={{
                backgroundColor: '#111111',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: '1px solid rgba(251, 191, 36, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background glow effect */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />
              
              {/* Number */}
              <div style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: 'rgba(251, 191, 36, 0.3)',
                fontFamily: 'Inter, system-ui, sans-serif',
                lineHeight: '1',
                marginBottom: '1rem'
              }}>
                {service.number}
              </div>
              
              {/* Icon */}
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                filter: 'grayscale(100%)'
              }}>
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#fbbf24',
                fontFamily: 'Inter, system-ui, sans-serif',
                marginBottom: '1rem',
                lineHeight: '1.3'
              }}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p style={{
                fontSize: '1rem',
                color: '#cccccc',
                lineHeight: '1.6',
                fontFamily: 'Inter, system-ui, sans-serif',
                margin: '0'
              }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: '6rem',
            padding: '3rem',
            backgroundColor: '#fbbf24',
            borderRadius: '2rem',
            color: '#000000'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '1rem',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}>
            Reddit Can't Detect Our Automation
          </h3>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: '500',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}>
            What better and more credible technology than this? We've cracked the code that others can't.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: '#000000',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: '600',
              padding: '1rem 2.5rem',
              borderRadius: '0.75rem',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, system-ui, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            See How We Do It
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}