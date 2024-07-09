import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

function Boletos() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = 'Bearer ' + localStorage.getItem('token');
                const user = JSON.parse(localStorage.getItem('user'));
                const cnp = user.cnp;
                
                if (!token || !user || !cnp) {
                    throw new Error('Token, user, or cnp is missing from localStorage');
                }

                const response = await axios({
                    method: 'post',
                    url: 'http://192.168.0.159:80/api/boleto/listar',
                    headers: { 'Content-type': 'application/x-www-form-urlencoded', 'Authorization': token },
                    data: {
                        'cnp': `${cnp}`
                    }
                });

                console.log(response)
                if (response.data.message) {
                    setData({ message: response.data.message });
                } else if (response.data.boletos) {
                    setData({ boletos: response.data.boletos });
                }
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {data.message && <p>{data.message}</p>}
            {data.boletos && (
                <ul>
                    {data.boletos.map((boleto, index) => (
                        <li key={index}>
                            <p>Boleto ID: {boleto.autoId}</p>
                            <p>Data de Vencimento: {boleto.vencimento}</p>
                            <p>Valor: R$ {boleto.saldo.slice(0, -2)}</p>
                            <a href={`http://localhost:5173/documento/${boleto.autoId}`}>Documento </a>
                            <a href={`http://localhost:5173/demonstrativo/${boleto.autoId}`}>Demonstrativo </a>
                            <a href={`http://localhost:5173/boleto/${boleto.autoId}`}>Boleto</a>
                            <br /><br />
                        </li>
                    ))}

                </ul>
            )}
        </div>
    );
}

export default Boletos;
