import { Ofertas } from "./ofertas"
import { useState } from "react"
import { useEffect } from "react"
import MOCK_DATA from "../../data/MOCK_DATA.json"
import { useParams } from "react-router-dom"
import { New } from "./newsItem";
import Carousel from 'react-bootstrap/Carousel';
import { productData } from "../utils/functions";
import { Loader } from "../utils/loader";

export const Index = () => {

    const [products, setProducts] = useState([])
    const { category, subcategory } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        productData(MOCK_DATA)

            .then((res) => {

                setLoading(false)

                setProducts(res.filter((prod) => prod.new === true))

            })
            .catch((err) => {
                console.log(err)
            })
    }, [category, subcategory])


    return (
        loading
        ? <Loader/>
        : <div className="m-w-xl">
            <h2 className="novedades m-w-900 mb-20 text-2xl mt-5">Novedades Destacadas</h2>
            <Carousel indicators={false} controls={false} className='mb-20 mt-50 m-w-900'>

                {products.map((prod) => <Carousel.Item key={prod.id} interval={2000} >
                    <div className="d-flex flex-row justify-around">
                        <New item={prod} />
                    </div> </Carousel.Item>)}
            </Carousel>
            <Ofertas />

        </div>

    )
}