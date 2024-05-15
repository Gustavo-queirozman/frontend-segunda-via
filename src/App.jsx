import { useState } from 'react'
import Entrar from './pages/Entrar/Index'
import Cadastrar from './pages/Cadastrar/Index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="App">
        <Cadastrar/>
    </div>
  )
}

export default App
