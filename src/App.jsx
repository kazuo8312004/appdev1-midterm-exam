import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('exploration');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Starfield animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.5
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        star.opacity += star.speed * 0.01;
        if (star.opacity > 1 || star.opacity < 0) {
          star.speed = -star.speed;
        }
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Proposal submitted! We will contact you soon.');
  };

  const missionContent = {
    exploration: [
      {
        title: "Kepler-442b Investigation",
        description: "Comprehensive atmospheric analysis of this super-Earth located 1,206 light-years away. Studying potential biosignatures and atmospheric composition using advanced spectroscopy techniques.",
        status: "Active"
      },
      {
        title: "Proxima Centauri Survey",
        description: "Long-term monitoring mission of our nearest stellar neighbor, focusing on Proxima b's habitability potential and atmospheric dynamics during stellar flare events.",
        status: "Ongoing"
      },
      {
        title: "Europa Deep Dive",
        description: "Robotic exploration beneath Europa's ice sheet, searching for microbial life in the subsurface ocean and analyzing water samples from geysers.",
        status: "Planning"
      }
    ],
    research: [
      {
        title: "Atmospheric Modeling",
        description: "Developing advanced computer models to predict exoplanet atmospheric conditions and identify optimal candidates for follow-up observations with next-generation telescopes.",
        status: "Active"
      },
      {
        title: "Biosignature Database",
        description: "Creating comprehensive catalog of potential biological markers that could indicate life on distant worlds, including both Earth-like and exotic biochemistries.",
        status: "Research"
      },
      {
        title: "Interstellar Communication",
        description: "Designing protocols for potential communication with extraterrestrial intelligence, including mathematical languages and universal concepts.",
        status: "Development"
      }
    ],
    discovery: [
      {
        title: "TOI-715b Confirmation",
        description: "Recently confirmed this Earth-sized exoplanet in the habitable zone of a nearby red dwarf star, making it a prime candidate for atmospheric studies.",
        status: "Confirmed"
      },
      {
        title: "Water Vapor Detection",
        description: "First detection of water vapor in the atmosphere of K2-18b, a sub-Neptune exoplanet in its star's habitable zone, using Hubble Space Telescope data.",
        status: "Published"
      },
      {
        title: "Multi-Planet System",
        description: "Discovery of a seven-planet system around TRAPPIST-1, with three planets potentially habitable and showing signs of atmospheric retention.",
        status: "Complete"
      }
    ],
    future: [
      {
        title: "James Webb Follow-up",
        description: "Planned observations using JWST to study atmospheric composition of newly discovered potentially habitable exoplanets, focusing on oxygen and methane detection.",
        status: "Scheduled"
      },
      {
        title: "Breakthrough Starshot",
        description: "Collaboration on developing ultra-light nanocrafts capable of reaching Alpha Centauri within 20 years to capture close-up images of Proxima b.",
        status: "Planning"
      },
      {
        title: "Mars Sample Return",
        description: "Leading the astrobiology analysis team for the Mars Sample Return mission, searching for ancient microbial life in carefully selected rock samples.",
        status: "Approved"
      }
    ]
  };

  return (
    <>
      <canvas ref={canvasRef} id="starfield"></canvas>

      <nav id="navbar">
        <div className="nav-container">
          <a href="#home" className="logo-container">
            <svg className="logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="35" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="#f59e0b" strokeWidth="2"/>
              <circle cx="50" cy="50" r="12" fill="#7c3aed"/>
              <circle cx="85" cy="50" r="4" fill="#f59e0b">
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="8s" repeatCount="indefinite"/>
              </circle>
              <circle cx="15" cy="50" r="3" fill="#ec4899">
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="-360 50 50" dur="12s" repeatCount="indefinite"/>
              </circle>
              <circle cx="50" cy="50" r="8" fill="#f59e0b" opacity="0.3"/>
            </svg>
            <span className="logo-text">STELLARIS</span>
          </a>
          
          <div 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>HOME</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>ABOUT</a></li>
              <li><a href="#missions" onClick={() => setMobileMenuOpen(false)}>MISSIONS</a></li>
              <li><a href="#equipment" onClick={() => setMobileMenuOpen(false)}>EQUIPMENT</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="stars-layer"></div>
        <div className="space-orb"></div>
        <div className="space-orb"></div>
        <div className="space-orb"></div>
        <div className="space-orb"></div>
        
        <div className="shooting-star" style={{'--delay': '0s', '--top': '10%', '--left': '10%'}}></div>
        <div className="shooting-star" style={{'--delay': '1.5s', '--top': '30%', '--left': '60%'}}></div>
        <div className="shooting-star" style={{'--delay': '3s', '--top': '20%', '--left': '80%'}}></div>
        <div className="shooting-star" style={{'--delay': '4.5s', '--top': '60%', '--left': '30%'}}></div>
        <div className="shooting-star" style={{'--delay': '6s', '--top': '80%', '--left': '70%'}}></div>
        
        <div className="hero-content">
          <h1 className="cosmic-title">DR. ALEX NOVA</h1>
          <p className="subtitle">Exoplanet Researcher & Deep Space Pioneer</p>
        </div>
        <a href="#about" className="scroll-btn">
          <div className="scroll-btn-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </div>
        </a>
      </section>

      <section id="about">
        <h2 className="section-title">EXPLORER PROFILE</h2>
        <div className="about-section">
          <div className="about-hero">
            <h3>Pioneering the Frontiers of Space</h3>
            <p className="about-description">
              Leading humanity's quest to understand our place in the cosmos through cutting-edge research in exoplanet discovery, 
              astrobiology, and interstellar exploration. With over 15 years of experience in space science, I've dedicated my career 
              to unlocking the mysteries of distant worlds and searching for signs of life beyond Earth.
            </p>
          </div>
          
          <div className="about-grid">
            <div className="about-card">
              <span className="about-card-icon">🔬</span>
              <h4>Research Excellence</h4>
              <p>Published over 120 peer-reviewed papers on exoplanet atmospheres, habitability zones, and biosignature detection methods.</p>
            </div>
            
            <div className="about-card">
              <span className="about-card-icon">🛰️</span>
              <h4>Mission Leadership</h4>
              <p>Principal investigator on multiple NASA and ESA missions, including the TRAPPIST system exploration and Mars sample analysis.</p>
            </div>
            
            <div className="about-card">
              <span className="about-card-icon">🌌</span>
              <h4>Discovery Pioneer</h4>
              <p>Co-discoverer of 47 confirmed exoplanets, including three potentially habitable super-Earths in the Goldilocks zone.</p>
            </div>
          </div>
          
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-number">47</div>
              <div className="achievement-label">Exoplanets Discovered</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">1,247</div>
              <div className="achievement-label">Research Hours</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">23</div>
              <div className="achievement-label">Awards Received</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">8</div>
              <div className="achievement-label">Active Missions</div>
            </div>
          </div>
        </div>
      </section>

      <section id="missions" className="missions-section">
        <div className="missions-container">
          <h2 className="section-title">MISSION OPERATIONS</h2>
          
          <div className="mission-tabs">
            <button 
              className={`mission-tab ${activeTab === 'exploration' ? 'active' : ''}`}
              onClick={() => setActiveTab('exploration')}
            >
              Deep Space Exploration
            </button>
            <button 
              className={`mission-tab ${activeTab === 'research' ? 'active' : ''}`}
              onClick={() => setActiveTab('research')}
            >
              Research Projects
            </button>
            <button 
              className={`mission-tab ${activeTab === 'discovery' ? 'active' : ''}`}
              onClick={() => setActiveTab('discovery')}
            >
              Recent Discoveries
            </button>
            <button 
              className={`mission-tab ${activeTab === 'future' ? 'active' : ''}`}
              onClick={() => setActiveTab('future')}
            >
              Future Missions
            </button>
          </div>
          
          <div className={`mission-content ${activeTab === 'exploration' ? 'active' : ''}`}>
            <div className="mission-grid">
              {missionContent.exploration.map((mission, index) => (
                <div key={index} className="mission-card">
                  <h4>{mission.title}</h4>
                  <p>{mission.description}</p>
                  <span className="mission-status">{mission.status}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`mission-content ${activeTab === 'research' ? 'active' : ''}`}>
            <div className="mission-grid">
              {missionContent.research.map((mission, index) => (
                <div key={index} className="mission-card">
                  <h4>{mission.title}</h4>
                  <p>{mission.description}</p>
                  <span className="mission-status">{mission.status}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`mission-content ${activeTab === 'discovery' ? 'active' : ''}`}>
            <div className="mission-grid">
              {missionContent.discovery.map((mission, index) => (
                <div key={index} className="mission-card">
                  <h4>{mission.title}</h4>
                  <p>{mission.description}</p>
                  <span className="mission-status">{mission.status}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`mission-content ${activeTab === 'future' ? 'active' : ''}`}>
            <div className="mission-grid">
              {missionContent.future.map((mission, index) => (
                <div key={index} className="mission-card">
                  <h4>{mission.title}</h4>
                  <p>{mission.description}</p>
                  <span className="mission-status">{mission.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="equipment">
        <h2 className="section-title">RESEARCH INSTRUMENTS</h2>
        <div className="equipment-container">
          <div className="equipment-item">
            <span>Hubble Telescope</span>
          </div>
          <div className="equipment-item">
            <span>James Webb</span>
          </div>
          <div className="equipment-item">
            <span>Spectroscopy Lab</span>
          </div>
          <div className="equipment-item">
            <span>Radio Array</span>
          </div>
          <div className="equipment-item">
            <span>AI Analysis</span>
          </div>
          <div className="equipment-item">
            <span>Quantum Computing</span>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2 className="section-title">RESEARCH COLLABORATION</h2>
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Principal Investigator Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Institution Email" required />
          </div>
          <div className="form-group">
            <textarea rows="5" placeholder="Research Proposal or Collaboration Inquiry" required></textarea>
          </div>
          <button type="submit" className="launch-btn">SUBMIT PROPOSAL</button>
        </form>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Research Areas</h3>
            <ul>
              <li><a href="#">Exoplanet Discovery</a></li>
              <li><a href="#">Astrobiology</a></li>
              <li><a href="#">Atmospheric Analysis</a></li>
              <li><a href="#">SETI Research</a></li>
              <li><a href="#">Space Technology</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Publications</h3>
            <ul>
              <li><a href="#">Nature Astronomy</a></li>
              <li><a href="#">Astrophysical Journal</a></li>
              <li><a href="#">Science Magazine</a></li>
              <li><a href="#">Research Papers</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Professional Network</h3>
            <p style={{color: '#94a3b8', marginBottom: '15px'}}>
              Connect with the global space research community
            </p>
            <div className="social-links">
              <a href="#" aria-label="ResearchGate">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3.09 8.26l1.82 1.28L12 4.8l7.09 4.74 1.82-1.28L12 2M12 7L2 12l10 5 10-5-10-5"/>
                </svg>
              </a>
              <a href="#" aria-label="NASA Collaboration">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82"/>
                </svg>
              </a>
              <a href="#" aria-label="Academic Network">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2048 Dr. Alex Nova - Exoplanet Research Portfolio. Searching for life among the stars. Design: <a href="https://www.tooplate.com" target="_blank" rel="noopener noreferrer">Tooplate</a></p>
        </div>
      </footer>
    </>
  )
}

export default App