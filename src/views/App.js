import React, { useState, useEffect } from 'react';
import AppContext from '../context';
import '../styles/main.css';
import Table from '../components/Table/Table';
import Modal from '../components/Modal/Modal';
const axios = require('axios');

const App = () => {
  const [listJokes, setListJokes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('https://official-joke-api.appspot.com/random_ten')
        .then((res) => {
          setListJokes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getData();
  }, []);

  const getPunchline = (id) => {
    const searchObject = listJokes.find((item) => item.id === id);
    const punchline = searchObject.punchline;

    return punchline;
  };

  const contextValue = {
    listJokes,
    getPunchline,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Table />
      <Modal />
    </AppContext.Provider>
  );
};

export default App;
