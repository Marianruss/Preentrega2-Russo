import { Games } from "../menus/games"
import { Colectibles } from "../menus/colectibles"
import { CartWidget } from "../header/cart/cartWidget"
import "../../css/header-styles.css"
import { Link } from "react-router-dom"


export const Navbar = () => {

    return (
        <header className='header m-w-xl'>
            <nav className='nav-bar'>
                <div className="logo-title">
                    <Link to="/"><h1 className="main-title bg-opacity-100	">GEEKERS</h1></Link>
                </div>


                <div className="menus">
                    <Link to="/"> 
                    <button className='index-button'>Inicio</button>
                    </Link>
                    <Games/>
                    <Colectibles/>
                    <CartWidget cartQuantity={0}/>
                </div>
            </nav>
        </header>
    )
}