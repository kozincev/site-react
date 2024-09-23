import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(onClick) {
    alert('HAHA, GOT YOU, BITCH!')
}

  return (
    <>

      <section>
        <h3>TO BE OR NOT TO BE</h3>
        <Button onClick={handleClick}>CLICK ME, BITCH!</Button>
      </section>
    </>
  )
}

export default App
