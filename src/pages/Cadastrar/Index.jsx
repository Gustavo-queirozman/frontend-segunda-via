import React, { useState } from "react";
import Header from '../../components/Header/Index';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cadastrar() {
  const [name, setName] = useState('');
  const [cnp, setCnp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setConfirmarSenha] = useState('');
  const [response, setResponse] = useState(null); // Estado para resposta do servidor
  const [error, setError] = useState(null); // Estado para erro]
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: 'http://192.168.0.159:80/api/register',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/json'
      },
      data: {
        'name': name,
        'cnp': cnp,
        'email': email,
        'password': password,
        'c_password': c_password
      }
    };

    try {
      const response = await axios.request(config);
      setResponse(response.data);
      
      const token = response.data.data.token
      const user = response.data.data.data_user
      localStorage.clear();
      localStorage.setItem('token',token);
      localStorage.setItem('user', user);

      navigate('/boletos');  // Redirect to cadastrar route after successful login
    } catch (error) {
      setError(error.message);
    }
  }


  return (
    <div className="min-h-screen  bg-white flex ">
      <div className="flex-1 p-4">
        <Header />

        <div className="mt-2">
          <form onSubmit={handleSubmit}>
            <div className="mt-8 mx-24">
              <label className="text-cinza text-sm">Nome:</label>
              <input
                type="text"
                name="name"
                placeholder=""
                className="px-1 appearance-none block min-w-full py-4 leading-tight text-cinza bg-none outline-none border-b-2 border-cinza-70 hover:border-cinza delay-75"
                onChange={(e) => setName(e.target.value)}
                value={name}

              />
            </div>

            <div className="mt-8 mx-24">
              <label className="text-cinza text-sm">Cnp:</label>
              <input
                type="text"
                name="cnp"
                placeholder=""
                className="px-1 appearance-none block min-w-full py-4 leading-tight text-cinza bg-none outline-none border-b-2 border-cinza-70 hover:border-cinza delay-75"
                onChange={(e) => setCnp(e.target.value)}
                value={cnp}

              />
            </div>

            <div className="mt-8 mx-24">
              <label className="text-cinza text-sm">Email:</label>
              <input
                type="text"
                name="email"
                placeholder=""
                className="px-1 appearance-none block min-w-full py-4 leading-tight text-cinza bg-none outline-none border-b-2 border-cinza-70 hover:border-cinza delay-75"
                onChange={(e) => setEmail(e.target.value)}
                value={email}

              />
            </div>

            <div className="mt-8 mx-24">
              <label className="text-cinza text-sm">Senha:</label>
              <input
                type="password"
                name="password"
                placeholder=""
                className="px-1 appearance-none block min-w-full py-4 leading-tight text-cinza bg-none outline-none border-b-2 border-cinza-70 hover:border-cinza delay-75"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="mt-8 mx-24">
              <label className="text-cinza text-sm">Confirmar senha:</label>
              <input
                type="password"
                name="c_password"
                placeholder=""
                className="px-1 appearance-none block min-w-full py-4 leading-tight text-cinza bg-none outline-none border-b-2 border-cinza-70 hover:border-cinza delay-75"
                onChange={(e) => setConfirmarSenha(e.target.value)}
                value={c_password}
              />
            </div>

            <div className="mt-11 mx-24">
              <button className="bg-green-800 text-white px-3 appearance-none block min-w-full py-4 leading-tight rounded-full transition ease-in-out delay-150 bg-secundaria-500 hover:-translate-y-1 hover:scale-100 hover:bg-primaria duration-300">
                Cadastrar
              </button>
            </div>

            <div className='text-center m-5'>
              <p>
                <a>Já possui uma conta? </a>
                <a href="/entrar" className='text-green-800 font-bold'>Entrar</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div
        className="hidden sm:block relative flex-1 p-4 bg-cover bg-[url('capa.jpg')]"
      ></div>
    </div>

  );

}

export default Cadastrar;