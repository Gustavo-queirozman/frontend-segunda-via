import React, { useState } from "react";
import Header from "../../components/Header/Index";
import axios from "axios";
import qs from 'qs';

function Contratante() {
    const [cnp, setCnp] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = qs.stringify({
            'cnp': cnp
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://192.168.0.159:80/api/contratante',
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


                        <div className="mt-11 mx-24">
                            <button
                                type="submit"
                                className="bg-green-800 text-white px-3 appearance-none block min-w-full py-4 leading-tight rounded-full transition ease-in-out delay-150 bg-secundaria-500 hover:-translate-y-1 hover:scale-100 hover:bg-primaria duration-300"
                            >
                                Entrar
                            </button>
                        </div>
                    </form>

                    {response && (
                        <div className="mt-8 mx-24">
                            <p className="text-red-700">Resposta: {JSON.stringify(response['message'])}</p>
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

export default Contratante;
