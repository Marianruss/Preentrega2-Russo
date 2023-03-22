import MOCK_DATA from "../../data/MOCK_DATA.json"
import { Loader } from "./loader";


export const productData = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr.games)
        }, 1000);
    })
}

