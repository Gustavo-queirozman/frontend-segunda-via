import React, { useState } from "react";
import Header from "../../components/Header/Index";
import axios from "axios";
import qs from 'qs';

function EsqueciMinhaSenha() {
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = qs.stringify({
            'email': email
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://192.168.0.159:80/api/forgot',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded', 
                'Accept-Encoding': 'application/json'
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
                        <div className="mt-8 mx-24">
                            <label className="text-cinza text-sm">Email:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder=""
                                className="px-1 appearance-none block min-w-full py-4 leading-tight text-cinza bg-none outline-none border-b-2 border-cinza-70 hover:border-cinza delay-75"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
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
                <a>Já possui uma conta? </a>
                <a href="/entrar" className='text-green-800 font-bold'>Entrar</a>
              </p>
            </div>
                    </form>

                    {response && (
                        <div className="mt-8 mx-24">
                            <p className="text-green-700">Resposta: {JSON.stringify(response)}</p>
                        </div>
                    )}

                </div>
            </div>

            <div
                className="hidden sm:block relative flex-1 p-4 bg-cover bg-[url('capa.jpg')]"
            ></div>
        </div>
    );
}

export default EsqueciMinhaSenha;
