import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productData } from "../utils/functions"
import { ProductDetail } from "./individualItemDetail"
import MOCK_DATA from "../../data/MOCK_DATA.json"


export const ItemDetails = () => {

    const [item,setItem] = useState(null)
    const [loading,setLoading] = useState(true)
    


    const {id} = useParams()


    useEffect(() => {
        setLoading(true)

        productData(MOCK_DATA)
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(id)) )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])




    return (
        <div>
            {
            loading 
            ? <h2>Cargando</h2>
            :  <ProductDetail item={item}/>
        }
        </div>
    )
}