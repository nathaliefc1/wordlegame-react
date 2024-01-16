import React, { useState, useEffect } from "react";
import axios from "axios";

function ApiWord() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiRandomWord = "https://random-word-api.herokuapp.com/word?length=";
    let length = "6";
    const fetchData = async () => {
      try {
        const response = await axios.get(apiRandomWord + length);
        console.log("===", response);
        setData(response.data[0]);
        if (!response.ok) {
          throw new Error(
            `Error al cargar los datos. Código de estado: ${response.status}`
          );
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Palabra escondida:</p>
      {loading ? <p>Cargando datos...</p> : data && <p>{data}</p>}
    </div>
  );
}

export default ApiWord;
