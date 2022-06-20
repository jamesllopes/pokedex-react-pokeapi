import './style.css'
import prev from '../../assets/prev.svg'
import heart from '../../assets/heart.svg'
import peso from '../../assets/peso.svg'
import altura from '../../assets/altura.svg'
import close from '../../assets/close.svg'

export default function ModalPokemon({ pokemon, setOpen, infoPokemon }) {
    const types = pokemon.types
    const stats = pokemon.stats
    const ability = pokemon.abilities[0].ability.name

    const handleCloseModal = () => {
        setOpen(false)
    }

    return (
        <>
            <main className={`main__modal ${infoPokemon.color}`} >
                <div className='btn__close'>
                    <img className='btn--close' src={close} alt='Close'
                        onClick={() => handleCloseModal()} />
                </div>
                <div className='box__modal'>
                    <section className={`container__modal ${infoPokemon.color}`}>
                        <div className='icons__nav'>
                            <img className='icon--back' src={prev} onClick={() => handleCloseModal()} alt='Button Back' />
                            <img className='icon--fav' src={heart} alt='Favorite' />
                        </div>
                        <div className='info__pokemon--modal' >
                            <div className='info__name__id'>
                                <h2 className='pokemon__name'>{pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}</h2>
                                <span className='pokemon__id'>{pokemon.id.toString().padStart(4, '#00')}</span>
                            </div>
                            <div className={`types__pokemon ${infoPokemon.color}`}>
                                <p className='type' >{types[0].type.name[0].toUpperCase() + types[0].type.name.substr(1)}</p>
                                <p className={types.length === 2 ? 'type' : ''}>{types.length === 2 ? types[1].type.name[0].toUpperCase() + types[1].type.name.substr(1) : ''}</p>
                            </div>
                        </div>
                        <picture className='container__image'>
                            <img className='imagem__pokemon' src={pokemon.sprites.other.home.front_default} alt='Pokemon' />

                        </picture>
                    </section>

                    <section className='info__card'>
                        <section className='description__card'>
                            <h2 className='title__description'>Descrição</h2>
                        </section>
                        <section className='info__data'>
                            <div className='box__peso'>
                                <div className='info__peso'>
                                    <img className='peso__imagem' src={peso} alt='peso' />
                                    <span className='peso__data'>{`${pokemon.weight / 10} kg`}</span>
                                </div>
                                <span className='peso__description'>Peso</span>
                            </div>
                            <div className='box__altura'>
                                <div className='info__altura'>
                                    <img className='altura__imagem' src={altura} alt='altura' />
                                    <span className='altura__data'>{`${pokemon.height / 10} m`}</span>
                                </div>
                                <span className='altura__description'>Altura</span>
                            </div>
                            <div className='box__poder'>
                                <h3 className='poder__data'>{ability[0].toUpperCase() + ability.substr(1)}</h3>
                                <span className='poder__description'>Poder Principal</span>
                            </div>
                        </section>
                        <section className='container__feature'>
                            <h2 className='feature__title'>Suas Caracteristicas</h2>

                            {stats.map(stat =>
                            (<div className='stats'
                                key={stat.stat.name}>
                                <p className='stats__title'>{stat.stat.name[0].toUpperCase() + stat.stat.name.substr(1)}
                                </p>
                                <div className='stats__value__container'>
                                    <p className='stats__value'>{stat.base_stat}</p>
                                    <progress value={stat.base_stat} max="100" className={stat.base_stat >= 50 ? 'progress progress-green' : 'progress progress-red'}></progress>
                                </div>
                            </div>))}
                        </section>
                    </section>
                </div>
            </main>
        </>
    )
} 