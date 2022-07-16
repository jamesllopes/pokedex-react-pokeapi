import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import './style.css'

export default function InitialPage() {
    return (
        <>
            <Header />
            <main className='main'>
                <div className='container__main'>
                    <h1 className='title__content'>
                        Qual pokemon
                        você escolheria?
                    </h1>
                    <p className='subtitle__content'>Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</p>
                    <button className='btn'> <Link to="/pokemon" className='btn__link'>Veja os Pokemons</Link></button>
                </div>
            </main>
        </>
    )
}    