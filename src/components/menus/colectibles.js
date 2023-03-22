import { Link } from "react-router-dom"

export const Colectibles = () => {
    // /* <!-- Menú de coleccionables --> */
    return (
        <div className="dropdown">
            <button className="dropbutton">Coleccionables</button>
            <div className="drop-content">
                <Link to="#">Funkos</Link>
                <Link to="#">Figuras</Link>
            </div>
        </div>)

}