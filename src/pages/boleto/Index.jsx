import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';

function Boleto() {
  const { id } = useParams(); // Pega o autoId da URL
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = 'Bearer ' + localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));
      const cnp = user.cnp;

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://192.168.0.159:80/api/boleto/criar',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded', 
          'Accept-Encoding': 'application/json', 
          'Authorization': token
        },
        data: qs.stringify({
          'autoId': id,
          'cnp': cnp
        })
      };

      try {
        const response = await axios.request(config);
        setResponse(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {response ? (
        response.message ? (
          <p>{response.message}</p> // Exibe a mensagem se existir
        ) : (
          <div dangerouslySetInnerHTML={{ __html: response }} />
        )
      ) : (
        <div>{error ? <p>Error: {error}</p> : <p>Loading...</p>}</div>
      )}
    </div>
  );
}

export default Boleto;
