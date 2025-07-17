import { useState } from 'react'
import './App.css'

function App() {
  const [liveLink, setLiveLink] = useState('');

  return (
    <>
      <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <h1 className='text-center text-4xl md:text-6xl'>Tiktok Live Updates</h1>
        <br></br>
        <input type="text" placeholder="Enter TikTok live link here" className="input" onChange={(e) => setLiveLink(e.target.value)}/>
        <br></br>
        <p>{liveLink}</p>
      </div>
    </>
  )
}

export default App
