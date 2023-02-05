import { useState } from 'react';

import AppTitle from './components/AppTitle';
import Cards from './components/Cards';
import HighScore from './components/HighScore';
import Modal from './components/Modal';
import Overlay from './components/Overlay';
import { useGlobalContext } from './context';

function App() {
  const { modalOpen } = useGlobalContext();

  return (
    <div className="App">
      <AppTitle />
      <HighScore />
      <Cards />
      {modalOpen && <Modal />}
      {modalOpen && <Overlay />}
    </div>
  );
}

export default App;
