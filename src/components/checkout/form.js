import { useState, useEffect } from "react"
import { useContext } from "react"
import { DataContext } from "../../contexts/DataContext"
import alertify from "alertifyjs"
import validator from "validator"



export const Formulary = () => {


    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [codigoPostal, setCodigoPostal] = useState("")
    const [provincia, setProvincia] = useState("")

    const { saveFormData,submitted,setSubmitted } = useContext(DataContext)

    const checkSubmit = form => {

        form.preventDefault()
        if (validator.isEmpty(nombre)) {
            alertify.alert("Ingresá un nombre valido")
        }
        else if (!validator.isEmail(mail)) {
            alertify.alert("Ingresá un mail valido")
        }
        else if (validator.isEmpty(direccion)) {
            alertify.alert("Ingresá una dirección valida")
        }
        else if (validator.isEmpty(ciudad)) {
            alertify.alert("Ingresá una ciudad valida")
        }
        else if (validator.isEmpty(provincia)) {
            alertify.alert("Ingresá una provincia valida")
        }
        else if (!validator.isNumeric(codigoPostal)) {
            alertify.alert("Ingresá un codigo postal valido")
        }
        else {
            setSubmitted(true)
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        
        console.log(submitted)
        let data = {
            nombre,
            mail,
            direccion,
            ciudad,
            codigoPostal,
            provincia
        }

        saveFormData(data)
    }

    return (

        
        <div>
            < form className="  rounded px-8 pt-6 pb-8 mb-4 d-grid md:grid-cols-2 md:justify-items-center ml-20 gap-y-0" >
                <h2 className="text-2xl mb-50 font-card justify-self-start ml-80 text-amber-300 col-span-full">Finalizar compra</h2>

                <div className="mb-4 md:col-span-full md:justify-self-start md:ml-70">
                    <label className="block text-white font-card mb-2" htmlFor="name">
                        Nombre completo:
                    </label>
                    <input onChange={(e) => setNombre(e.target.value)} className="shadow appearance-none border rounded w-300 md:w-750 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Nombre"  />
                </div>

                <div className="mb-4 md:col-span-full md:justify-self-start md:ml-70">
                    <label className="block text-white font-card mb-2" htmlFor="email">
                        Correo electrónico:
                    </label>
                    <input onChange={(e) => setMail(e.target.value)} className="shadow appearance-none border rounded w-300 md:w-750 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Correo electrónico"  />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-card mb-2" htmlFor="address">
                        Dirección:
                    </label>
                    <input  onChange={(e) => setDireccion(e.target.value)} className="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" name="address" type="text" placeholder="Dirección" />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-card mb-2" htmlFor="city">
                        Ciudad:
                    </label>
                    <input  onChange={(e) => setCiudad(e.target.value)} className="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" name="city" type="text" placeholder="Ciudad" />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-card mb-2" htmlFor="state">
                        Estado:
                    </label>
                    <input onChange={(e) => setProvincia(e.target.value)} className="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="state" name="state" type="text" placeholder="Estado"  />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-card mb-2" htmlFor="zip">
                        Código postal:
                    </label>
                    <input onChange={(e) => setCodigoPostal(e.target.value)} className="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" name="zip" type="text" placeholder="Código postal"  />
                </div>

                <button type="submit" onClick={checkSubmit} className="bg-amber-300 w-110 hover:bg-grey-500 rounded-xl w-200  p-2 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 mt-30 ">Confirmar</button>


            </form >
        </div >)
}