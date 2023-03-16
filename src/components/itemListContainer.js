import '../css/styles.css'  
import { Product } from "./utils/product-card"

export const ItemListContainer = ({ greetings }) => {
    return (
        <div>
            <h2 className="novedades mb-5 ml-5 text-3xl">{greetings}</h2>
            <div className=' grid grid-cols-1 gap-y-10  md:grid-cols-2 '>
                <Product productName={"Doom Eternal"} productPhoto={"..../public/images/product-photos/doometernal.jpg"} productPrice={"$600"} />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}