import { useState } from "react";

function useProvider() {
    const [pokemons, setPokemons] = useState([])
    const [pagination, setpagination] = useState(0)
    const [open, setOpen] = useState(false)

    return {
        pokemons,
        setPokemons,
        pagination,
        setpagination,
        open,
        setOpen
    }

}

export default useProvider;