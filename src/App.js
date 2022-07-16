import Routing from './Routes/routes';
import { PokeProvider } from './context/pokeContext'

function App() {
  return (
    <PokeProvider>
      <Routing />
    </PokeProvider>

  );
}

export default App;
