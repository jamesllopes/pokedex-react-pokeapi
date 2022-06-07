import Header from '../Header'
import './style.css'
import pokemon from '../../assets/initialLogo.svg'

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
                </div>
                <div className='container__main'>
                    <figure className='pokemon__img'>
                        <img className='pokemon' src={pokemon} width='100%' />
                    </figure>
                    <button className='btn'>Veja os Pokemons</button>
                </div>
            </main>
        </>
    )
}    