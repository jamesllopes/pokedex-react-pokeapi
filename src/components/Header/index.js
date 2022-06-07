import './style.css'
import logo from '../../assets/logo.svg'


export default function Header() {
    return (
        <>
            <header className='header'>
                <div className='box__header'>
                    <img src={logo} className='logo--pokemon' alt='Logo Pokemon' />
                    <nav className='nav__header'>
                        <ul className='nav-list'>
                            <li className='item__list'>Home</li> {/*refatorar*/}
                            <li className='item__list'>Pokemons</li> {/*refatorar*/}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}    