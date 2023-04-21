import { Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"

export const New = ({ item }) => {


    return (
        <Link to={`/detail/${item.id}`} ><div className="relative ">
            <img src={item.photo} className="object-cover h-300 w-200 md:h-600 md:w-500"></img>
            <Carousel.Caption>
                <h2 className="text-white text-2xl font-card shadow-text">{item.name}</h2>
            </Carousel.Caption>
        </div> </Link>

    )
}