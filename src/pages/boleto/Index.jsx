import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

function Boleto() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = 'Bearer ' + localStorage.getItem('token');
      const user = localStorage.getItem('user');
      const cnp = user.cnp;
      const autoId = localStorage.getItem('autoId');

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
          'autoId': autoId,
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
  }, []);

  return (
    <div>
      {response ? (
        <div dangerouslySetInnerHTML={{ __html: response }} />
      ) : (
        <div>{error ? <p>Error: {error}</p> : <p>Loading...</p>}</div>
      )}
    </div>
  );
}

export default Boleto;
