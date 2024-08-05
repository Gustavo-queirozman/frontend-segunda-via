import React, { useEffect, useState } from "react";

function Boletos() {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'Bearer ' + localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        const cnp = '33631641000101';

        if (!token || !user) {
          throw new Error("Token or user information is missing in localStorage");
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", token);

        const urlencoded = new URLSearchParams();
        urlencoded.append("cnp", cnp);

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: urlencoded,
          credentials: 'include', // Inclua cookies de sessão automaticamente
          redirect: "follow"
        };

        const response = await fetch("http://192.168.0.159:8080/api/boleto/listar", requestOptions);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const result = await response.json();
        console.log("Response data:", result);
      } catch (error) {
        console.error("Error caught:", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return <div>Teste</div>;
  }
}

export default Boletos;
