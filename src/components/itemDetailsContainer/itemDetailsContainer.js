import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productData } from "../utils/functions"
import { ProductDetail } from "./individualItemDetail"
import MOCK_DATA from "../../data/MOCK_DATA.json"
import { Loader } from "../utils/loader"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"



export const ItemDetails = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)



    const { id } = useParams()


    useEffect(() => {
        setLoading(true)


        const docRef = doc(db,"productos", id)
        getDoc(docRef)
            .then((res) => {
                console.log(res.data())
                setItem({
                    id: doc.id,
                    ...res.data()
                })
            })
            .finally(() => {
                setLoading(false)
            })
        // productData(MOCK_DATA)
        //     .then((res) => {
        //         setItem(res.find((prod) => prod.id === Number(id)))
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }, [])




    return (
        <div>
            {
                loading
                    ? <Loader />
                    : <ProductDetail item={item} />
            }
        </div>
    )
}