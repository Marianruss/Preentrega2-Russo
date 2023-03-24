import { useState } from "react"
import { useEffect } from "react"
import "../../css/styles.css"
import { Product } from "../utils/product-card"
import { productData } from "../utils/functions"
import MOCK_DATA from "../../data/MOCK_DATA.json"
import { Pager } from "../utils/pagination"
import { useParams } from "react-router-dom"
import { Loader } from "../utils/loader"



export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { category, subcategory } = useParams()

    useEffect(() => {
        <Loader style={{ display: "block" }} />
        productData(MOCK_DATA)

            .then((res) => {
                if (category && !subcategory) {
                    {
                        setProducts(res.filter((prod) => prod.category === category))
                    }
                }
                else if (category && subcategory) {
                    {
                        setProducts(res.filter((prod) => prod.category === category && prod.subcategory === subcategory))
                    }
                }

                else {
                    setProducts(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [category,subcategory])




    return (
        <div>
            <div className=' grid grid-cols-1 gap-y-10  md:grid-cols-2 mt-10'>

                {products.map((prod) => <Product key={prod.id} item={prod} />)}
            </div>
            <div className="grid grid-cols-1 gap-y-10  md:grid-cols-1 mb-10">
                <Pager />
            </div>
        </div>
    )
}