import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';

import { useNavigate } from 'react-router-dom'; 


function Demonstrativo() {
    const token = localStorage.getItem('token');
    const autoId = localStorage.getItem('autoId');
    const user = localStorage.getItem('user');
    const cnp = user.cnp;

    let data = qs.stringify({
        'autoId': autoId,
        'cnp': cnp
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://192.168.0.159:80/api/boleto/listar',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/json',
            'Authorization': token
        },
        data: data
    };


    try {
        const response = await axios.request(config);
        setResponse(response.data);
        console.log(response.data);
    } catch(error) {
        setError(error.message);
    }

    return(<div>sfdsd</div>);
}
export default Demonstrativo;