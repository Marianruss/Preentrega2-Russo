
import { Carousel, CarouselItem } from "react-bootstrap"
import alertify from "alertifyjs"
import { ModalSorteo } from "./modalSorteo"
import { Link } from "react-router-dom"

export const Jumbo = () => {

    return (
        <Carousel indicators={false} controls={false}>
            <Carousel.Item interval={1500}>
                <div className="font-card d-flex flex-col justify-center items-center gap-60 w-100 h-300 mt-50 bg-gradient-to-r from-green-400 to-blue-500 bg-cover  rounded">
                    <h2 className="text-3xl text-amber-400 font-card shadow-text">Bienvenido a tu lugar de juegos</h2>
                    <p className="text-xl text-white font-card shadow-text">Tenemos stock permanente de juegos y un muy alto stock de figuras.</p>
                    <p className="text-xl text-white font-card shadow-text">La mejor selección de productos para vos!</p>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <div className="font-card d-flex flex-col justify-center items-center gap-60 w-100 h-300 mt-50 bg-gradient-to-r from-blue-400 to-green-500 bg-cover  rounded">
                    <h2 className="text-3xl text-amber-400 font-card shadow-text">Participá de nuestro mega sorteo!</h2>
                    <p className="text-xl text-white font-card shadow-text">Sorteamos 2 juegos y 2 figuras a elección</p>
                    <Link to={"/rafle"}><button className="bg-amber-300 hover:bg-grey-500 rounded-xl w-32 p-4 mb-10 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 ">
                        Participá aqui
                    </button></Link>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}