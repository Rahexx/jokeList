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

  const sortById = (type) => {
    const copyArray = [...listJokes];

    if (type === 'up') {
      copyArray.sort(function (a, b) {
        return a.id - b.id;
      });

      setListJokes(copyArray);
    } else {
      copyArray.sort(function (a, b) {
        return b.id - a.id;
      });

      setListJokes(copyArray);
    }
  };

  const sortByType = (type) => {
    const copyArray = [...listJokes];

    if (type === 'up') {
      copyArray.sort(function (a, b) {
        if (a.type[0] < b.type[0]) {
          return -1;
        }
        if (a.type[0] > b.type[0]) {
          return 1;
        }
        return 0;
      });

      setListJokes(copyArray);
    } else {
      copyArray.sort(function (a, b) {
        if (a.type[0] < b.type[0]) {
          return 1;
        }
        if (a.type[0] > b.type[0]) {
          return -1;
        }
        return 0;
      });

      setListJokes(copyArray);
    }
  };

  const contextValue = {
    listJokes,
    getPunchline,
    sortById,
    sortByType,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Table />
      <Modal />
    </AppContext.Provider>
  );
};

export default App;
