import './style.css'


export default function CardsPokemon({ pokemon }) {
    const types = pokemon.types


    return (
        <div className="cardPokemon">
            <div className='div-id'>
                <span className='id-pokemon'>{pokemon.id.toString().padStart(4, '#00')}</span>
            </div>
            <div className='div-pokemon'>
                <div className='div-types'>
                    <h1 className='name-pokemon'>{pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}</h1>
                    <p className='types'>{types[0].type.name}</p>
                    <p className={types.length === 2 ? 'types' : ''}>{types.length === 2 ? types[1].type.name : ''}</p>
                </div>
                <img src={pokemon.sprites.front_default} alt='pokemon' />
            </div>
        </div>
    )
} 