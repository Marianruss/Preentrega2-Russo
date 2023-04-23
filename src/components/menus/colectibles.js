import { Link } from "react-router-dom"

export const Colectibles = () => {
    // /* <!-- Menú de coleccionables --> */
    return (
        <div className="dropdown">
            <button className="dropbutton">Coleccionables</button>
            <div className="drop-content">
                <Link to="/coleccionables/funkos">Funkos</Link>
                <Link to="/coleccionables/figuras">Figuras</Link>
            </div>
        </div>)

}