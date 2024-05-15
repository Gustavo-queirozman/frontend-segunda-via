import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import FormField from '../../components/FormField/Index';
import Button from '../../components/Button/Index';
import Header from '../../components/Header/Index';

function Entrar() {
  const [cnp, setCnp] = useState('02013885610');
  const [password, setPassword] = useState('12345678');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

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
      data : data
    };

    try {
      const response = await axios.request(config);
      setResponse(response.data);
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
            <FormField
              label="Cnp"
              type="text"
              name="cnp"
              placeholder=""
              onChange={(e) => setCnp(e.target.value)}
              value={cnp}
            />

            <FormField
              label="Senha"
              type="password"
              name="password"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="mt-11 mx-24">
              <button
                type="submit"
                className="bg-green-800 text-white px-3 appearance-none block min-w-full py-4 leading-tight rounded-full transition ease-in-out delay-150 bg-secundaria-500 hover:-translate-y-1 hover:scale-100 hover:bg-primaria duration-300"
              >
                Entrar
              </button>
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
