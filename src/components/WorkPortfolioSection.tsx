'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function WorkPortfolioSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const articles = [
    {
      name: "EX-TWITTER CEO: AI WILL SEARCH 1000X MORE THAN HUMANS",
      category: "INDUSTRY | AI",
      bgColor: "#4ecdc4",
      thumbnailText: "1000X<br/>MORE",
      url: "https://review.firstround.com/podcast/twitters-former-ceo-on-rebuilding-the-web-for-ai-parag-agrawal-co-founder-and-ceo-of-parallel/",
      description: "Parag Agrawal's Parallel startup ($450M valuation) proves AI agents will dominate web search"
    },
    {
      name: "77% OF AMERICANS NOW USE CHATGPT AS SEARCH ENGINE", 
      category: "RESEARCH | STATS",
      bgColor: "#45b7d1",
      thumbnailText: "77%<br/>SHIFT",
      url: "https://www.adobe.com/express/learn/blog/chatgpt-as-a-search-engine",
      description: "Adobe survey reveals shocking shift: 24% turn to ChatGPT BEFORE Google"
    },
    {
      name: "GOOGLE'S SEARCH MONOPOLY CRACKS: FIRST SUB-90% DROP SINCE 2015",
      category: "MARKET | SHIFT",
      bgColor: "#ff6b35", 
      thumbnailText: "SUB-90%<br/>FALL",
      url: "https://www.visualcapitalist.com/google-search-still-monopoly-in-2025/",
      description: "Historic market share decline signals the end of Google's search dominance"
    },
    {
      name: "THE $12 TRILLION DIGITAL LABOR REVOLUTION",
      category: "PREDICTION | CEO",
      bgColor: "#96ceb4",
      thumbnailText: "$12T<br/>REVOLUTION",
      url: "https://www.salesforceben.com/5-bold-predictions-marc-benioff-has-about-ai-agents/",
      description: "Marc Benioff's bold prediction: AI agents will transform every business by 2025"
    },
    {
      name: "WHY 85% OF COMPANIES ARE RACING TO ADOPT AI AGENTS",
      category: "ENTERPRISE | ADOPTION", 
      bgColor: "#f7931e",
      thumbnailText: "85%<br/>ADOPT",
      url: "https://www.warmly.ai/p/blog/ai-agents-statistics",
      description: "Enterprise AI adoption explodes as companies automate 15-50% of business processes"
    },
    {
      name: "REDDIT'S $203M AI GOLD RUSH: WHY EVERY BRAND MUST DOMINATE REDDIT NOW",
      category: "PLATFORM | REVENUE",
      bgColor: "#9b59b6",
      thumbnailText: "$203M<br/>GOLD RUSH",
      url: "https://techcrunch.com/2024/02/22/reddit-says-its-made-203m-so-far-licensing-its-data/",
      description: "Google pays $60M/year for Reddit data to train Gemini - your brand must dominate Reddit discussions"
    }
  ];

  return (
    <section id="work" style={{ 
      backgroundColor: '#f5f5f5', 
      padding: '6rem 0'
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
        </motion.div>

        {/* Articles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '2rem'
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
                backgroundColor: '#ffffff',
                border: '3px solid #000000',
                borderRadius: '0px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              {/* Visual Area */}
              <div style={{
                height: '250px',
                backgroundColor: article.bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div 
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    color: '#ffffff',
                    fontFamily: 'Impact, "Arial Black", sans-serif',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                  dangerouslySetInnerHTML={{ __html: article.thumbnailText }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  color: '#FFD700',
                  padding: '0.3rem 0.8rem',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  fontFamily: 'Arial, sans-serif',
                  textTransform: 'uppercase'
                }}>
                  {article.category}
                </div>
              </div>
              
              {/* Article Info */}
              <div style={{
                padding: '1.5rem',
                backgroundColor: '#ffffff'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '900',
                  color: '#000000',
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textTransform: 'uppercase',
                  margin: '0 0 0.8rem 0',
                  lineHeight: '1.2'
                }}>
                  {article.name}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666666',
                  fontFamily: 'Arial, sans-serif',
                  lineHeight: '1.4',
                  margin: '0'
                }}>
                  {article.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}