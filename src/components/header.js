import { Games } from "./menus/games"
import { Colectibles } from "./menus/colectibles"
import { CartWidget } from "./utils/cartWidget"
import '../css/header-styles.css'

export const Navbar = () => {

    return (
        <header className='header'>
            <nav className='nav-bar'>
                <div className="logo-title">
                    <a href="../index.html"><h1 className="main-title">GEEKERS</h1></a>
                </div>


                <div className="menus">
                    <a href="../index.html"> 
                    <button className='index-button'>Inicio</button>
                    </a>
                    <Games/>
                    <Colectibles/>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}