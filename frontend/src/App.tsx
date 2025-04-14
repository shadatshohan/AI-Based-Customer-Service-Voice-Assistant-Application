import './App.css'
import { useState } from 'react'
import Vapi from "@vapi-ai/web";

// importing vapi sdk with api key
const vapi = new Vapi("e049692d-c5be-4560-a3c9-22b975bfa286");

function App() {
  const [isCallActive, setIsCallActive] = useState(false)

  // importing vapi assistant api key and start call function
  const startCall = async () => {
    await vapi.start("53af15f1-5f9a-48d1-ae8a-1e1d8abeafe1")
    setIsCallActive(true)
  }
  // stop call function
  const stopCall = async () => {
    vapi.stop()
    setIsCallActive(false)
  }

  return (
    <div className="container">
      <h1>AI Customer Service & Ordering Agent</h1>
      
      <div className="info-box">
        <h2 className='how'>How it works?</h2>
        <p>
          Click "Start Call" to connect with the AI assistant. You can asked about any placed orders,
          ask about services, or get support—completely hands-free!
          There are 3 orders placed in the database.The order numbers are 101,102,103.You have to say your order numbers to the assistant when asked and it will provide you all the details of the order.(Ex:My order number is 101)
        </p>
      </div>

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
      {/* About Section */}
<div className="about-section">
  <p>This app is made by Nazmus Shadat Shohan</p>
  <p>email:shadatshohan5@gmail.com</p>
  <p>code link:https://github.com/shadatshohan/AI-Based-Customer-Service-Voice-Assistant-Application</p>
  <p className="inform">Please inform if any modification is neccessary</p>
</div>

    </div>
  )
}

export default App
