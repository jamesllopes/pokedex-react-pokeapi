import './style.css'
import logo from '../../assets/logo.svg'


export default function Header({ page }) {
    return (
        <>
            <header className='header'>
                <div className='box'>
                    <img src={logo} className='logoPokemon' alt='Logo Pokemon' />
                    <nav className='navigation'>
                        <ul className='nav-list'>
                            <li className={page === 'Home' ? 'list active' : 'list'}>Home</li> {/*refatorar*/}
                            <li
                                className={page === 'Pokemon' ? 'list active' : 'list'}>Pokemons</li> {/*refatorar*/}
                            <li className='list'>Contato</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}    