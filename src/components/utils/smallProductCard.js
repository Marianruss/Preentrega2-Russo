import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import Aos from "aos"
import { useEffect } from "react"
import { CartWidget } from './cartWidget';



export const SmallProduct = ({ productPrice, productPhoto, productName }) => {

    useEffect(() => {
        Aos.init()
        Aos.refresh()
        localStorage.setItem("cartQuantity", 0)
    }, [])

    const addToCart = () => {
        alertify.success('Item agregado al carrito');
        let value = localStorage.getItem("cartQuantity")
        value++
        localStorage.setItem("cartQuantity", value)
    }

    return (


        <div>
            <div className=" d-flex items-center h-500 w-250 container self-center " data-aos="zoom-in">
                <div className="w-50 h-50 flex gap-y-40 flex-col flex-wrap items-center lg:justify-between justify-center ">
        {/* Inicia tarjeta */}
                    <div className=" flex flex-col justify-around mx-2 w-100 h-50  self-center xl:mb-0 mb-8 shadow-2xl shadow-gray-900">
                        <img src={productPhoto} className="w-50 h-50 object-cover product-photo" />
                    </div>
                    </div>
                </div>
            </div>

    )
}