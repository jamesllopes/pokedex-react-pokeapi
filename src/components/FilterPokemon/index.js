import lupa from '../../assets/lupa.svg'
import './style.css'

export default function FilterPokemon({ setPokemons }) {

    const handlefilterPokemon = async (e) => {
        const pokemonFilter = []
        const value = e.target.value.toLowerCase()
        if (e.key !== 'Enter' || !value) return
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        const data = await response.json()
        pokemonFilter.push(data)
        setPokemons(pokemonFilter)
        e.target.value = ''
    }

    return (
        <section className="container__filter" >
            <h1 className="filter__title">Mais de 250 Pokemons para você escolher o seu favorito</h1>
            <div className="input__search">
                <input
                    onKeyDown={(e) => handlefilterPokemon(e)}
                    className="search__pokemon"
                    placeholder="Pesquisar Pokemon"></input>
                <img
                    src={lupa}
                    alt='lupa'
                    className="lupa" />
            </div>
        </section >
    )
}