import React from 'react';
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Product } from './product-card';
import MOCK_DATA from "../../data/MOCK_DATA.json"
import { productData } from './functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export const Ofertas = () => {

    const [offers, setOffers] = useState([])

    const { category, subcategory } = useParams()
    // console.log(category,subcategory)

    useEffect(() => {
        productData(MOCK_DATA)

            .then((res) => {
                setOffers(res.filter((prod) => prod.offer === true))
            })

            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (

        <div >
            <h2 className="novedades m-w-900 mb-20 text-2xl mt-5">Ofertas de la semana</h2>
            <Carousel indicators={false} className='mb-20 m-w-900'>

                {offers.map((prod) => < Carousel.Item key={prod.id} interval={2000} >
                    <div className="d-flex flex-row justify-around  ">
                        <Product item={prod} />
                    </div> </Carousel.Item>)}
            </Carousel>
        </div >
    );

}