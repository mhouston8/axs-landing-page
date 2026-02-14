import './Features.css'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '📷',
    title: 'Scan & Import',
    description: 'Smart Scan with automatic edge detection. Import from your photo library or files with ease.'
  },
  {
    icon: '📄',
    title: 'PDF Tools',
    description: 'Merge multiple documents into one or split documents into separate pages. Full control over your PDFs.'
  },
  {
    icon: '✨',
    title: 'Edit & Enhance',
    description: 'Crop, rotate, and adjust brightness/contrast. Apply filters or remove backgrounds for professional results.'
  },
  {
    icon: '✍️',
    title: 'Sign & Annotate',
    description: 'Add digital signatures to any document. Watermark and annotate your pages with professional tools.'
  },
  {
    icon: '📤',
    title: 'Export Anywhere',
    description: 'Export as PDF, JPEG, or PNG. Share directly from the app to email, messaging, or cloud storage.'
  },
  {
    icon: '☁️',
    title: 'Cloud Storage',
    description: 'Store your documents securely in the cloud. Access them anytime, anywhere, on any device.'
  }
]

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Everything You Need</h2>
          <p className="features-subtitle">
            Powerful tools that work together to scan, edit, and manage your documents efficiently
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
