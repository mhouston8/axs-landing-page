import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Smart Document Scanning
            <span className="hero-highlight"> for Mobile Devices</span>
          </h1>
          <p className="hero-description">
            Capture documents with automatic edge detection, edit them with professional tools, 
            and export in the format that you need. Your all-in-one document scanning solution.
          </p>
          <div className="hero-buttons">
            <a 
              href="https://apps.apple.com/us/app/axio-scan/id6758864185" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-button primary"
            >
              Download on App Store
            </a>
            <a href="#features" className="hero-button secondary">Learn More</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">Smart</div>
              <div className="stat-label">Edge Detection</div>
            </div>
            <div className="stat">
              <div className="stat-number">Professional</div>
              <div className="stat-label">Editing Tools</div>
            </div>
            <div className="stat">
              <div className="stat-number">Multiple</div>
              <div className="stat-label">Export Formats</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <img 
              src="/assets/axio-scan-app-icon.png" 
              alt="AxioScan App Icon" 
              className="hero-app-icon"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
