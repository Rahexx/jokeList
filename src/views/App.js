import React, { useState } from 'react';
import AppContext from '../context';
import '../styles/main.css';
import Table from '../components/Table/Table';
import Modal from '../components/Modal/Modal';

const App = () => {
  const [listJokes] = useState([
    {
      id: 22,
      type: 'general',
      setup: 'What does C.S. Lewis keep at the back of his wardrobe?',
      punchline: 'Narnia business!',
    },
    {
      id: 337,
      type: 'general',
      setup: 'Why did the cowboy have a weiner dog?',
      punchline: 'Somebody told him to get a long little doggy.',
    },
    {
      id: 45,
      type: 'general',
      setup: 'If you boil a clown...',
      punchline: 'Do you get a laughing stock?',
    },
    {
      id: 382,
      type: 'programming',
      setup: 'What did the router say to the doctor?',
      punchline: 'It hurts when IP.',
    },
    {
      id: 210,
      type: 'general',
      setup: 'What do you call a dad that has fallen through the ice?',
      punchline: 'A Popsicle.',
    },
    {
      id: 356,
      type: 'general',
      setup: 'Why do bears have hairy coats?',
      punchline: 'Fur protection.',
    },
    {
      id: 302,
      type: 'general',
      setup: 'Where do you learn to make banana splits?',
      punchline: 'At sundae school.',
    },
    {
      id: 350,
      type: 'general',
      setup: 'Why did the tree go to the dentist?',
      punchline: 'It needed a root canal.',
    },
    {
      id: 237,
      type: 'general',
      setup: 'What do you call two barracuda fish?',
      punchline: ' A Pairacuda!',
    },
    {
      id: 340,
      type: 'general',
      setup: 'Why did the half blind man fall in the well?',
      punchline: "Because he couldn't see that well!",
    },
  ]);

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
