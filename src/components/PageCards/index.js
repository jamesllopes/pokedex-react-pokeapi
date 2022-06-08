import { useState, useEffect } from "react";
import Header from '../Header'
import CardsPokemon from '../ListCards';
import FilterPokemon from "../FilterPokemon";
import Pagination from "../Pagination";
import './style.css'
export default function PageCards() {
    const [pokemons, setPokemons] = useState([])
    const [pagination, setpagination] = useState(0)


    const fetchPokemon = async (getPokemons) => {
        const localPokemons = []
        for (let pokemon of getPokemons) {
            const response = await fetch(pokemon.url)
            const data = await response.json()
            localPokemons.push(data)
        }
        setPokemons(localPokemons)
    }

    useEffect(() => {
        const callAPI = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=18&offset=${pagination}`)
            const data = await response.json()
            fetchPokemon(data.results)
        }
        callAPI()
    }, [pagination]);

    return (
        <>
            <Header />
            <main className='main__cards'>
                <FilterPokemon
                    pokemons={pokemons}
                    setPokemons={setPokemons}
                    setpagination={setpagination}
                    fetchPokemon={fetchPokemon}
                />
                <section className="container__pokemon">
                    <div className='pokemons--cards'
                    >
                        {pokemons.map(pokemon =>
                            <CardsPokemon
                                key={pokemon.id}
                                pokemon={pokemon}
                                id={pokemon.id}
                                pagination={pagination}
                            />)}
                    </div>
                    <Pagination
                        pokemons={pokemons}
                        pagination={pagination}
                        setpagination={setpagination} />
                </section>
            </main>
        </>
    )
}    