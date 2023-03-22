import React from 'react';
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Product } from './product-card';
import OFFERS from "../../data/OFFERS.json"
import { productData } from './functions';




export const Ofertas = () => {

    const [offers, setOffers] = useState([])

    const { category, subcategory } = useParams()
    // console.log(category,subcategory)

    useEffect(() => {
        productData(OFFERS)

            .then((res) => {
                setOffers(res)})

            .catch((err) => {
                console.log(err)
            })
    }, [])
    

    return (
        
        <div >
            <h2 className="novedades m-w-900 mb-20 text-2xl mt-5">Ofertas de la semana</h2>
            <Carousel indicators={false} className='mb-20 m-w-900'>
                {/* <Carousel.Item interval={4000}>
                    <div  className="d-flex flex-row justify-around">
                        <SmallProduct />

                    </div>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                <div  className="d-flex flex-row justify-around ">
                        <SmallProduct />

                    </div>
                </Carousel.Item>

                <Carousel.Item interval={4000}>
                <div  className="d-flex flex-row justify-around ">
                        <SmallProduct />

                    </div>
                </Carousel.Item> */}

                <Carousel.Item interval={4000}>
                <div  className="d-flex flex-row justify-around  ">
                {offers.map((prod) => <Product key={prod.id} productPrice={prod.price} productName={prod.name} subcategory={prod.subcategory} />)}
                        {/* <SmallProduct /> */}
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}