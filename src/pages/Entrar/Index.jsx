import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import Button from '../../components/Button/Index';
import Header from '../../components/Header/Index';
import { useNavigate } from 'react-router-dom'; 

function Entrar() {
  const [cnp, setCnp] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = qs.stringify({
      'cnp': cnp,
      'password': password
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://192.168.0.159:80/api/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/json'
      },
      data: data
    };

    try {
      const response = await axios.request(config);
      setResponse(response.data);
      
      const token = response.data.data.token
      const user = response.data.data.data_user
      localStorage.setItem('token',token);
      localStorage.setItem('user', user);

      navigate('/boletos');  // Redirect to cadastrar route after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 p-4">
        <Header />
        <div className="mt-2">
          <form onSubmit={handleSubmit}>
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

            <div className="mt-11 mx-24">
              <button
                type="submit"
                className="bg-green-800 text-white px-3 appearance-none block min-w-full py-4 leading-tight rounded-full transition ease-in-out delay-150 bg-secundaria-500 hover:-translate-y-1 hover:scale-100 hover:bg-primaria duration-300"
              >
                Entrar
              </button>
            </div>

            <div className='text-center m-5'>
              <p>
                <a href="/esqueci-minha-senha">Esqueci minha senha</a>
                <span> | </span>
                <a href="/cadastrar" className='text-green-800 font-bold'>Cadastrar</a>
              </p>
            </div>
          </form>

          {response && <div>Response: {JSON.stringify(response)}</div>}
          {error && <div>Error: {error}</div>}
        </div>
      </div>
      <div className="hidden sm:block relative flex-1 p-4 bg-cover bg-[url('capa.jpg')]"></div>
    </div>
  );
}

export default Entrar;
