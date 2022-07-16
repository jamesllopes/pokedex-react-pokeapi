import { useContext } from "react";
import PokeContext from "../context/pokeContext";

function usePoke() {
    return useContext(PokeContext)
}

export default usePoke;