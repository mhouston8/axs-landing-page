import './HowItWorks.css'

interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Download & Open',
    description: 'Get AxioScan from the App Store. Open the app and grant camera permissions to enable full scanning capabilities.'
  },
  {
    number: '2',
    title: 'Scan Your Document',
    description: 'Use Smart Scan with automatic edge detection to capture your document. Or import from your photo library or files.'
  },
  {
    number: '3',
    title: 'Edit & Enhance',
    description: 'Crop, rotate, adjust brightness/contrast. Apply filters, remove backgrounds, or add annotations and signatures.'
  },
  {
    number: '4',
    title: 'Export & Share',
    description: 'Export as PDF, JPEG, or PNG. Share directly from the app or save securely to cloud storage for access anywhere.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">How It Works</h2>
          <p className="how-it-works-subtitle">
            No complicated setup. Just download, scan, and enjoy professional document management.
          </p>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
