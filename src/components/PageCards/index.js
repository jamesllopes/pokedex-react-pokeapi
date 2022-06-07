import { useState, useEffect } from "react";
import Header from '../Header'
import CardsPokemon from '../ListCards';
import FilterPokemon from "../FilterPokemon";
import './style.css'
import prev from '../../assets/prev.svg'
import next from '../../assets/next.svg'


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

    const paginationNext = () => {
        if (pokemons.length < 18) return
        setpagination(pagination + 18)
    }

    const paginationPrev = () => {
        if (pagination === 0) return
        setpagination(pagination - 18)
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
            <Header
                page={'Pokemon'} />
            <main className='main-cards'>
                <FilterPokemon
                    pokemons={pokemons}
                    setPokemons={setPokemons}
                    setpagination={setpagination}
                />
                <div className="page-pokemon">
                    <img
                        className={pagination === 0 ? 'hidden' : 'page-icon prev'}
                        src={prev}
                        alt='prev'
                        onClick={() => paginationPrev()} />
                    <div className='pokemons'>
                        {pokemons.map(pokemon =>
                            <CardsPokemon
                                key={pokemon.id}
                                pokemon={pokemon}
                            />)}
                    </div>
                    <img
                        className={pokemons.length < 18 ? 'hidden' : 'page-icon next'}
                        src={next}
                        alt='next'
                        onClick={() => paginationNext()} />
                </div>
            </main>
        </>
    )
}    