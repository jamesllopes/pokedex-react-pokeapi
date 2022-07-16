import { createContext } from "react";
import useProvider from "../hooks/useProvider";


const PokeContext = createContext({});

export function PokeProvider(props) {
    const pokeProvider = useProvider()
    return (
        <PokeContext.Provider value={pokeProvider}>{props.children}</PokeContext.Provider>
    )
}

export default PokeContext;