import { useState } from 'react'
import './App.css'

const SSH_COMMAND = 'ssh sshfy.dev'

function App() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (copied) return
    navigator.clipboard.writeText(SSH_COMMAND)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCopy()
    }
  }

  return (
    <>
      <main id="hero">
        <span className="badge">Coming Soon</span>

        <h1 className="wordmark">sshfy</h1>

        <p className="value-prop">Persistent Firecracker VMs. SSH-first.</p>

        <div
          className={`terminal${copied ? ' terminal--copied' : ''}`}
          role="button"
          tabIndex={0}
          aria-label="Copy SSH command to clipboard"
          onClick={handleCopy}
          onKeyDown={handleKeyDown}
        >
          <span className="prompt" aria-hidden="true">$</span>
          <code className="command">
            {copied ? 'Copied!' : SSH_COMMAND}
          </code>
          {!copied && <span className="cursor" aria-hidden="true" />}
        </div>
      </main>

      <footer id="footer">
        <span>© 2026 sshfy</span>
        <a href="https://github.com/sshfy-dev/web" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </>
  )
}

export default App
