
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { ClientDetails, MyDocument } from "../utils/generatePdf"

export const Form = () => {

    const {emptyCart} = useContext(CartContext)

    

    return (
        <div>
            <form className="  rounded px-8 pt-6 pb-8 mb-4 d-grid md:grid-cols-2 md:justify-items-center ml-20 gap-y-0">
                <h2 className="text-2xl mb-50 font-card justify-self-start ml-80 text-amber-300 col-span-full">Finalizar compra</h2>
                
                <div className="mb-4 md:col-span-full md:justify-self-start md:ml-70">
                    <label className="block text-white font-card mb-2" htmlFor="name">
                        Nombre completo:
                    </label>
                    <input className="shadow appearance-none border rounded w-300 md:w-750 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Nombre" required />
                </div>

                <div className="mb-4 md:col-span-full md:justify-self-start md:ml-70">
                    <label className="block text-white font-card mb-2" htmlFor="email">
                        Correo electrónico:
                    </label>
                    <input className="shadow appearance-none border rounded w-300 md:w-750 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Correo electrónico" required />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-card mb-2" htmlFor="address">
                        Dirección:
                    </label>
                    <input className="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" name="address" type="text" placeholder="Dirección" required />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-card mb-2" htmlFor="city">
                        Ciudad:
                    </label>
                    <input className="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" name="city" type="text" placeholder="Ciudad" required />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-card mb-2" htmlFor="state">
                        Estado:
                    </label>
                    <input className="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="state" name="state" type="text" placeholder="Estado" required />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-card mb-2" htmlFor="zip">
                        Código postal:
                    </label>
                    <input className="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" name="zip" type="text" placeholder="Código postal" required />
                </div>

                <Link to={"/purchase_finished"}><button className="bg-amber-300 w-110 hover:bg-grey-500 rounded-xl w-200  p-2 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 mt-30 ">Confirmar</button></Link>
            </form>


        </div>

    )
}