import { useState } from "react";

function useProvider() {
    const [pokemons, setPokemons] = useState([])
    const [pagination, setpagination] = useState(0)

    return {
        pokemons,
        setPokemons,
        pagination,
        setpagination
    }
}
export default useProvider;