import { createContext, useContext, useState } from "react";

export const DataContext = createContext()

export const Data = ({ children }) => {

    const [datos, changeDatos] = useState("")
    const [submitted,setSubmitted] = useState(false)

    const saveFormData = (data) => {
        changeDatos({ ...data })
        // console.log(datos)
    }


    return (
        <DataContext.Provider value={{
            datos,
            saveFormData,
            submitted,
            setSubmitted
        }}>
            {children}
        </DataContext.Provider>
    )
}

