import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

function Boletos() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = 'Bearer ' + localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        const cnp = user.cnp;

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://192.168.0.159:80/api/boleto/listar',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token
            },
            data: {
                "cnp": cnp
            }
        };

        axios.request(config)
        .then((response) => {
         console.log(response.data.boletos[0].autoId)
        })
        .catch((error) => {
            setError(error);
        });
    });

    
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
<div></div>
    );
}

export default Boletos;
