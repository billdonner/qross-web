function Download() {
  return (
    <div className="page">
      <div className="content-page download-hero">
        <div className="app-icon-placeholder">Q</div>

        <h1>Get Qross</h1>
        <p className="subtitle">Available on the App Store for iPhone and iPad</p>

        <div className="download-features">
          <span className="download-tag">20+ Topics</span>
          <span className="download-tag">4x4 to 8x8 Boards</span>
          <span className="download-tag">3 Game Variants</span>
          <span className="download-tag">Smart Hints</span>
          <span className="download-tag">Game Center</span>
          <span className="download-tag">Share Results</span>
        </div>

        <a
          href="https://apps.apple.com/app/qross/id0000000000"
          className="download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download on the App Store
        </a>

        <div className="qr-placeholder">
          QR Code
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          Scan to download on your device
        </p>

        <div className="requirements">
          <p>Requires iOS 17.0 or later. Compatible with iPhone and iPad.</p>
        </div>
      </div>
    </div>
  )
}

export default Download
