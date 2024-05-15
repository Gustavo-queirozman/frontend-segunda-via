import { useState } from 'react'
import Entrar from './pages/Entrar/Index'
import Cadastrar from './pages/Cadastrar/Index'
import EsqueciMinhaSenha from './pages/EsqueciMinhaSenha/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="App">
        <EsqueciMinhaSenha/>
    </div>
  )
}

export default App
