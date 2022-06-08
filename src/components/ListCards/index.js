import './style.css'
import { useState, useEffect } from "react";
import ModalPokemon from "../ModalPokemon";

export default function CardsPokemon({ pokemon, pagination }) {
    const [open, setOpen] = useState(false)
    const [infoPokemon, setInfoPokemon] = useState({})
    const types = pokemon.types

    useEffect(() => {
        const getColores = async () => {
            const response = await fetch(`${pokemon.species.url}`)
            const data = await response.json()
            setInfoPokemon({
                name: data.name,
                color: data.color.name
            })
        }
        getColores()
    }, [pagination]);

    const handleOpenModal = () => {
        setOpen(true)
    }
    return (
        <>
            {open && <ModalPokemon
                key={pokemon.id}
                pokemon={pokemon}
                setOpen={setOpen}
                infoPokemon={infoPokemon} />}
            <div
                className={pokemon.name === infoPokemon.name && `pokemon__cards ${infoPokemon.color}`}
                id={pokemon.name}
                onClick={() => handleOpenModal()} >
                <div className='pokemon__id'>
                    <span className='id--pokemon'>{pokemon.id.toString().padStart(4, '#00')}</span>
                </div>
                <div className='pokemon__infos'>
                    <div
                        className='pokemon--name--type'>
                        <h1 className='name--pokemon'>{pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}</h1>
                        <p className={pokemon.name === infoPokemon.name && `type--pokemon ${infoPokemon.color}`}>{types[0].type.name}</p>
                        <p className={types.length === 2 ? 'type--pokemon' : ''}>{types.length === 2 ? types[1].type.name : ''}</p>
                    </div>
                    <img
                        className='pokemon__img'
                        src={pokemon.sprites.other.home.front_default}
                        alt={pokemon.name} />
                </div>
            </div>
        </>
    )
} 