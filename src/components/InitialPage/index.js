import Header from '../Header'
import './style.css'

export default function InitialPage() {

    return (
        <>
            <Header
                page={'Home'} />
            <main className='main'>
                <div className='content'>
                    <h1 className='title'>
                        Qual pokemon
                        você escolheria?
                    </h1>
                    <p className='subtitle'>Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</p>
                    <button className='btn'>Veja os Pokemons</button>
                </div>

            </main>
        </>
    )
}    