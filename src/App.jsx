import { useState } from 'react'
import Entrar from './pages/Entrar/Index'
import Cadastrar from './pages/Cadastrar/Index'
import EsqueciMinhaSenha from './pages/EsqueciMinhaSenha/Index'
import ModificarSenha from './pages/ModificarSenha/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="App">
        <Entrar/>
    </div>
  )
}

export default App
