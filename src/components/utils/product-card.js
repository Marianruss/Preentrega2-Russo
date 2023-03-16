import "/Coder React/src/css/card-styles.css"
import Aos from "aos"
import { useEffect } from "react"

export const Product = ({productPrice,productName,productPhoto}) => {
    useEffect(() => {
        Aos.init()
        Aos.refresh()
    },[])

    return (

        
        <div  className="focus:outline-none ">
            <div className=" h-500 w-250 container self-center " data-aos="zoom-in">
                <div className="w-250 h-500 flex gap-y-40 flex-col flex-wrap items-center lg:justify-between justify-center ">
                    {/* <!-- Card 1 --> */}
                    <div  className=" flex flex-col justify-around mx-2 w-250 h-500  self-center xl:mb-0 mb-8 shadow-2xl shadow-gray-900">
                        <img src={productPhoto} className="w-250 h-300 object-cover"/>
                        <div className="bg-white md:w-80 bg-transparent">
                            <div className="flex items-center flex-column gap-4 justify-between px-4 pt-4 w-250 ">
                                <p className="text-white font-card outline-black">{productName}</p>
                                <p className="text-white font-card">{productPrice}</p>
                                <button className="bg-amber-300 hover:bg-grey-500 rounded-xl w-32 p-1 mb-10 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 ">Añadir al carro</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 1 Ends --> */}
                </div>
            </div>
            {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
        </div>
    )
}