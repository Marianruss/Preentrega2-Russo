import React from 'react';
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Product } from '../utils/product-card';
import MOCK_DATA from "../../data/MOCK_DATA.json"
import { collection, getDocs, query, where } from "firebase/firestore"
import { productData } from '../utils/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loader } from '../utils/loader';
import { db } from "../../firebase/firebaseConfig"





export const Ofertas = () => {

    const [offers, setOffers] = useState([])
    const [loading,setLoading] = useState(true)

    const { category, subcategory } = useParams()
    // console.log(category,subcategory)

    useEffect(() => {
        productData(MOCK_DATA)

        const prodsRef = collection(db, "productos")

        getDocs(prodsRef)
        const q = query(prodsRef, where("offer", "==", true))
        getDocs(q)
            .then((res) => {
                setOffers(res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return (
        loading 
        ? <Loader/>
        : <div >
            <h2 className="novedades m-w-900 mb-20 text-2xl mt-5">Ofertas de la semana</h2>
            <Carousel indicators={false} className='mb-20 m-w-900'>

                {offers.map((prod) => < Carousel.Item key={prod.id} interval={4000} >
                    <div className="d-flex flex-row justify-around">
                        <Product item={prod} />
                    </div> </Carousel.Item>)}
            </Carousel>
        </div >
    );

}