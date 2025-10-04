'use client';

import { motion } from 'framer-motion';

export default function AEOSection() {
  const articles = [
    {
      title: "AEO VS SEO: THE 2025 GUIDE",
      url: "https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide-for-2025/",
      category: "AEO",
      tag: "INSIGHTS",
      description: "The comprehensive guide that explains why 60% of searches never result in a click"
    },
    {
      title: "REDDIT KARMA MARKETING SUCCESS", 
      url: "https://www.singlegrain.com/search-everywhere-optimization/reddit-karma-how-to-build-high-karma-accounts-for-marketing-success/",
      category: "AEO",
      tag: "INSIGHTS",
      subtitle: "REDDIT | HIGH KARMA",
      description: "How to build high karma accounts that drive real marketing results"
    },
    {
      title: "IS SEO DEAD IN 2025?",
      url: "https://www.searchenginepeople.com/blog/is-seo-dead-in-2025-how-aio-aeo-geo-are-rewriting-the-playbook.html",
      category: "AEO",
      tag: "INSIGHTS",
      subtitle: "INDUSTRY | AEO",
      description: "How AEO, GEO & AIO are rewriting the digital marketing playbook"
    },
    {
      title: "REDDIT MARKETING GUIDE 2025",
      url: "https://www.withkarmic.com/reddit-marketing-guide",
      category: "AEO",
      tag: "INSIGHTS", 
      subtitle: "REDDIT | STRATEGY",
      description: "Complete strategy guide for authentic Reddit marketing and community building"
    },
    {
      title: "AI SEARCH VISIBILITY",
      url: "https://www.amsive.com/insights/seo/answer-engine-optimization-aeo-evolving-your-seo-strategy-in-the-age-of-ai-search/",
      category: "AEO",
      tag: "INSIGHTS",
      subtitle: "AI | OPTIMIZATION", 
      description: "Your complete guide to AI search visibility and answer engine optimization"
    }
  ];

  return (
    <section style={{ 
      backgroundColor: '#ffffff', 
      padding: '8rem 0'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            marginBottom: '5rem',
            textAlign: 'center'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '900',
            color: '#000000',
            fontFamily: 'Impact, "Arial Black", sans-serif',
            lineHeight: '0.9',
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            fontStretch: 'condensed',
            margin: '0 0 1rem 0'
          }}>
            Learn more about AEO & Reddit
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666666',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            Stay ahead with the latest in Answer Engine Optimization and Reddit marketing strategies.
          </p>
        </motion.div>

        {/* 2x2 Grid - Sharp, Professional Design */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1
              }}
              whileHover={{ scale: 1.02 }}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                border: '3px solid #000000',
                borderRadius: '0px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Visual Element */}
              <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: index % 2 === 0 ? '#FFD700' : '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: index % 2 === 0 ? '#000000' : '#FFD700',
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}>
                  AEO
                </div>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  backgroundColor: index % 2 === 0 ? '#000000' : '#FFD700',
                  color: index % 2 === 0 ? '#ffffff' : '#000000',
                  padding: '0.3rem 0.8rem',
                  fontFamily: 'Arial, sans-serif',
                  textTransform: 'uppercase'
                }}>
                  {article.category}
                </div>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '1.5rem',
                backgroundColor: '#ffffff'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#000000',
                  fontFamily: 'Arial, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  margin: '0',
                  lineHeight: '1.3'
                }}>
                  {article.title}
                </h3>
                <div style={{
                  marginTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '0.8rem',
                    color: '#666666',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: '500'
                  }}>
                    READ MORE
                  </span>
                  <span style={{
                    fontSize: '0.8rem',
                    color: '#000000'
                  }}>
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}