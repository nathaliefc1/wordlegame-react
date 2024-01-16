import React, { useState, useEffect, memo } from "react";
import axios from "axios";

const apiRandomWord = "https://random-word-api.herokuapp.com/word?length=";
const length = "5";

function ApiWord({onFetchData}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiRandomWord + length);
      setData(response.data[0]);
      onFetchData(response.data[0])
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log('Palabra nueva', data);
  }, []);

  return (
    <div>
      {loading ? <p>Cargando datos...</p> : <p>Let's play ...</p>}
      <button onClick={fetchData}>New Word</button>
    </div>
  );
}

export default memo(ApiWord);
