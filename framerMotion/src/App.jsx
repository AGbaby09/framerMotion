import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main id='App' style={{width: window.innerWidth, height: window.innerHeight}}>
      <div className="tab tab1">

      </div>
      <div className="tab tab2">

      </div>
      <div className="tab tab3">

      </div>
      <div className="tab tab4">

      </div>
    </main>
  )
}

export default App
