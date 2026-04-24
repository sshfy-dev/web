import { useState } from 'react'
import './App.css'

function App() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('ssh vm.sshfy.dev')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main id="hero">
      <span className="badge">Coming Soon</span>

      <h1 className="wordmark">sshfy</h1>

      <p className="value-prop">Persistent Firecracker VMs. SSH-first.</p>

      <div className="terminal" role="group" aria-label="SSH command">
        <span className="prompt">$</span>
        <code className="command">ssh vm.sshfy.dev</code>
        <button
          type="button"
          className="copy-btn"
          onClick={handleCopy}
          aria-label="Copy SSH command"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </main>
  )
}

export default App
