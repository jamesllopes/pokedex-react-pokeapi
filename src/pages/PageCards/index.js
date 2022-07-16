import { useEffect } from "react";
import Header from '../../components/Header'
import CardsPokemon from '../../components/ListCards';
import FilterPokemon from "../../components/FilterPokemon";
import Pagination from "../../components/Pagination";
import usePoke from '../../hooks/usePoke'
import './style.css'


export default function PageCards() {

    const { pokemons, setPokemons, pagination } = usePoke()

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
                <FilterPokemon />
                <section className="container__pokemon">
                    <div className='pokemons--cards'>
                        {pokemons.map(pokemon =>
                            <CardsPokemon
                                key={pokemon.id}
                                pokemon={pokemon}
                                id={pokemon.id} />)}
                    </div>
                    <Pagination />
                </section>
            </main>
        </>

    )
}    