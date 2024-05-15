import { useState } from 'react'
import Entrar from './pages/Entrar/Index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="App">
        <Entrar/>
    </div>
  )
}

export default App
