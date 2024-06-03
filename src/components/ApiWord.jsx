import "../styles/ApiWord.scss";
import React, { useState, useEffect, memo } from "react";
import axios from "axios";

const apiRandomWord = "https://random-word-api.herokuapp.com/word?length=";
const length = "5";

function ApiWord({ onFetchData }) {
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(apiRandomWord + length);
      onFetchData(response.data[0]);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="apiword">
      {loading ? <p>Cargando datos...</p> : <p>Let's play ...</p>}
      <button onClick={fetchData}>New Word</button>
    </div>
  );
}

export default memo(ApiWord);
