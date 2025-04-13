import { useState } from 'react'
import './App.css'
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("e049692d-c5be-4560-a3c9-22b975bfa286");

function App() {
  const [isCallActive, setIsCallActive] = useState(false)

  const startCall = async () => {
    await vapi.start("53af15f1-5f9a-48d1-ae8a-1e1d8abeafe1")
    setIsCallActive(true)
  }

  const stopCall = async () => {
    vapi.stop()
    setIsCallActive(false)
  }

  return (
    <div className="container">
      <h1>Vapi Call Demo</h1>
      <div className="button-container">
        <button 
          onClick={startCall} 
          disabled={isCallActive}
          className="call-button"
        >
          Start Call
        </button>
        <button 
          onClick={stopCall} 
          disabled={!isCallActive}
          className="call-button"
        >
          Stop Call
        </button>
      </div>
      <p>{isCallActive ? 'Call in progress...' : 'Call ended'}</p>
    </div>
  )
}

export default App