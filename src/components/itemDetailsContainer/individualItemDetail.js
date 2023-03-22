

export const ProductDetail = ({item}) =>{

    return(
        <div className="d-flex flex-row gap-10 my-10">
            <img src={item.photo} className="w-400 h-500 object-cover" />
            <div className="d-flex flex-col justify-around gap-10 ">
                <p className="text-white text-3xl font-card outline-black">{item.name}</p>
                <p className="text-white font-card outline-black">{item.description}</p>
                <button className=" mt-10 w-32 h-12 bg-amber-300 hover:bg-grey-500 rounded-xl w-32 p-1 mb-10 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 ">Agregar al carro</button>
            </div>
        </div>
    )
}