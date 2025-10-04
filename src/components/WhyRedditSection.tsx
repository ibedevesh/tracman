'use client';

import { motion } from 'framer-motion';

export default function WhyRedditSection() {
  const stats = [
    { 
      number: "430M+", 
      label: "Monthly Active Users",
      description: "Massive audience for your product"
    },
    { 
      number: "100K+", 
      label: "Active Communities",
      description: "Niche audiences for every product"
    },
    { 
      number: "99%", 
      label: "Google Index Rate",
      description: "Reddit posts dominate search results"
    },
    { 
      number: "$60M+", 
      label: "Reddit's AI Data Deal",
      description: "Training ChatGPT & Google Gemini"
    }
  ];

  const reasons = [
    {
      title: "AI COMPANIES TRUST REDDIT MOST",
      description: "ChatGPT, Perplexity, and Google's AI all see Reddit as the most credible source for real human opinions and experiences.",
      icon: "🤝"
    },
    {
      title: "REDDIT SELLS DATA TO AI COMPANIES", 
      description: "Reddit's $60M+ deal with Google means every quality post directly trains AI models that answer user questions.",
      icon: "💰"
    },
    {
      title: "NICHE COMMUNITIES = PERFECT TARGETING",
      description: "Reddit's specific communities let you reach exactly the right audience. One viral post can transform your business.",
      icon: "🎯"
    },
    {
      title: "REDDIT DOMINATES GOOGLE SEARCH",
      description: "Google prioritizes Reddit results. When people search, they see Reddit posts first - making it crucial for visibility.",
      icon: "🔍"
    }
  ];

  return (
    <section style={{ 
      backgroundColor: '#fbbf24', 
      padding: '8rem 0'
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
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '900',
              color: '#000000',
              fontFamily: 'Inter, system-ui, sans-serif',
              lineHeight: '0.9',
              letterSpacing: '-0.03em',
              marginBottom: '2rem',
              textTransform: 'uppercase'
            }}
          >
            WHY REDDIT RULES THE AI ERA
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.3rem',
              color: '#000000',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '500'
            }}
          >
            While everyone chases outdated SEO, smart companies are dominating where AI actually learns: Reddit.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '6rem'
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              style={{
                textAlign: 'center',
                backgroundColor: '#000000',
                borderRadius: '1.5rem',
                padding: '2.5rem 1.5rem',
                color: '#ffffff'
              }}
            >
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '900',
                color: '#fbbf24',
                fontFamily: 'Inter, system-ui, sans-serif',
                lineHeight: '1',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: '#cccccc',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}>
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          marginBottom: '4rem'
        }}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '3px solid #000000'
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>
                {reason.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#000000',
                fontFamily: 'Inter, system-ui, sans-serif',
                marginBottom: '1rem',
                lineHeight: '1.3',
                letterSpacing: '-0.01em'
              }}>
                {reason.title}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: '#333333',
                lineHeight: '1.6',
                fontFamily: 'Inter, system-ui, sans-serif',
                margin: '0'
              }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            textAlign: 'center',
            backgroundColor: '#000000',
            borderRadius: '2rem',
            padding: '4rem 2rem',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '40px',
            fontSize: '8rem',
            color: 'rgba(251, 191, 36, 0.1)',
            fontFamily: 'serif',
            lineHeight: '1'
          }}>
            "
          </div>
          
          <div style={{
            position: 'relative',
            zIndex: 2
          }}>
            <p style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#fbbf24',
              fontFamily: 'Inter, system-ui, sans-serif',
              lineHeight: '1.3',
              marginBottom: '1.5rem',
              maxWidth: '900px',
              margin: '0 auto 1.5rem'
            }}>
              "Every day thousands ask for solutions like yours, but your product isn't even mentioned. We change that."
            </p>
            <div style={{
              fontSize: '1.1rem',
              color: '#cccccc',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '500'
            }}>
              — The Tracman Advantage
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}