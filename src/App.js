import './App.css';
import InitialPage from './components/InitialPage';
import ModalPokemon from './components/ModalPokemon';
import PageCards from './components/PageCards';

function App() {
  return (
    <div className="container">
      {/* <InitialPage /> */}
      <PageCards />
      {/* <ModalPokemon /> */}
    </div>
  );
}

export default App;
