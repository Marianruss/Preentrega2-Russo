
import { useContext } from "react"
import { DataContext } from "../../../contexts/DataContext"

export const DataTable = () => {

    const {datos} = useContext(DataContext)
    console.log(datos)

    return (
        <div>
            {datos.map((d) => <p>{d.name}</p>)}
        </div>
    )
}