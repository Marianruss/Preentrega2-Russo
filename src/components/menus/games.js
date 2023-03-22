import { Link } from "react-router-dom"

export const Games = () => {

    return (
        // <---- Menu de Juegos ---->
        <div className="dropdown">
            <Link to="/juegos"><button className="dropbutton">Juegos</button></Link>
            <div className="drop-content">
                <Link to="/juegos/pc">PC</Link>
                <Link to="/juegos/playstation">PlayStation</Link>
                <Link to="/juegos/xbox">Xbox</Link>
            </div>
        </div>

    )
}