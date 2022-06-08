import './style.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <>
            <header className='header'>
                <div className='box__header'>
                    <img src={logo} className='logo--pokemon' alt='Logo Pokemon' />
                    <nav className='nav__header'>
                        <ul className='nav-list'>
                            <li className='item__list'><Link to="/" className='item__link'>Home</Link> </li>
                            <li className='item__list'><Link to="/pokemon" className='item__link'>Pokemons</Link> </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}    