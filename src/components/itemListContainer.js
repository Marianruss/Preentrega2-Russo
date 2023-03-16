import "../css/styles.css"
import { Product } from "./utils/product-card"



export const ItemListContainer = ({ greetings }) => {
    return (
        <div>
            <h2 className="novedades mb-5 ml-5 text-3xl">{greetings}</h2>
            <div className=' grid grid-cols-1 gap-y-10  md:grid-cols-2 '>
                <Product productPhoto={require("../assets/images/product-photos/gamepictures/doom.jpg")} productPrice="600" productName="Doom eternal"/>
                <Product productPhoto={require("../assets/images/product-photos/gamepictures/plaguetale.jpg")} productName="A plague tale" productPrice={1200}/>
                <Product productPhoto={require("../assets/images/product-photos/gamepictures/sekiro.jpg")} productName="Sekiro" productPrice="800"/>
                <Product productPhoto={require("../assets/images/product-photos/gamepictures/skyrim.jpg")} productName="Skyrim" productPrice="550"/>
                <Product />
                <Product />
            </div>
        </div>
    )
}