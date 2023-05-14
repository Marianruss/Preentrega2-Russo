import { useState } from "react"
import { useEffect } from "react"
import "../../css/styles.css"
import { Product } from "../utils/product-card"
import { productData } from "../utils/functions"
import MOCK_DATA from "../../data/MOCK_DATA.json"
import { useParams } from "react-router-dom"
import { Loader } from "../utils/loader"
import { shuffleArray } from "../utils/functions"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"




export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])
    const { category, subcategory } = useParams()


    useEffect(() => {
        setLoading(true)
        // productData(MOCK_DATA)

        const prodsRef = collection(db, "productos")

        getDocs(prodsRef)
        const q = query(prodsRef, where("category","==", category), where("subcategory", "==", subcategory))
        getDocs(q)
            .then((res) => {
                // setProducts(res.docs.filter((doc) => doc.category === category && doc.subcategory === subcategory))

                setProducts(res.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }          
                }))
            })
            .finally(() => {
                setLoading(false)
            })

    }, [category, subcategory])




    return (
        loading
            ? <Loader />
            : <div>
                <div className=' grid grid-cols-1 gap-y-10  md:grid-cols-2 mt-10'>

                    {products.map((prod) => <Product key={prod.id} item={prod} />)}
                </div>
                <div className="grid grid-cols-1 gap-y-10  md:grid-cols-1 mb-10">

                </div>
            </div>
    )



}