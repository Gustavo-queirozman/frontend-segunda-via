import React, { useState } from "react";
import axios from "axios";
import qs from 'qs';
import FormField from "../../components/FormField/Index";
import Header from "../../components/Header/Index";

function Cadastrar(props) {
  const [formData, setFormData] = useState({
    name: 'Gustavo Queiroz',
    cnp: '33631641000101',
    email: 'gustavoqueiroz071@gmail.com',
    password: '12345678',
    c_password: '12345678'
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = qs.stringify(formData);

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://192.168.0.159:80/api/register', // Ensure the URL includes http://
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/json',
        'Cookie': 'unimed_session=teInqjWeutUdOfWboEFn1dO6saHjLopXEJxmzb0t'
      },
      data: data
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
              label="Nome"
              type="text"
              name="name"
              placeholder=""
              onChange={handleChange}
              value={formData.name}
            />
            <FormField
              label="Cnp"
              type="text"
              name="cnp"
              placeholder=""
              onChange={handleChange}
              value={formData.cnp}
            />
            <FormField
              label="Email"
              type="email"
              name="email"
              placeholder=""
              onChange={handleChange}
              value={formData.email}
            />
            <FormField
              label="Senha"
              type="password"
              name="password"
              placeholder=""
              onChange={handleChange}
              value={formData.password}
            />
            <FormField
              label="Confirmar senha"
              type="password"
              name="c_password"
              placeholder=""
              onChange={handleChange}
              value={formData.c_password}
            />
            <div className="mt-11 mx-24">
              <button
                type="submit"
                className="bg-green-800 text-white px-3 appearance-none block min-w-full py-4 leading-tight rounded-full transition ease-in-out delay-150 bg-secundaria-500 hover:-translate-y-1 hover:scale-100 hover:bg-primaria duration-300"
              >
                Cadastrar
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

export default Cadastrar;
