import AppTitle from './components/AppTitle';
import Cards from './components/Cards';
import TrackScore from './components/TrackScore';
import Modal from './components/Modal';
import Overlay from './components/Overlay';
import { useGlobalContext } from './context';

function App() {
  const { modalOpen } = useGlobalContext();

  return (
    <div className="App">
      <AppTitle />
      <TrackScore />
      <Cards />
      {modalOpen && <Modal />}
      {modalOpen && <Overlay />}
    </div>
  );
}

export default App;
