import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight,faSpinner } from "@fortawesome/free-solid-svg-icons"


export const Loader = () => {
    return(
    <div className='d-flex justify-center w-100 mb-20'>
    <FontAwesomeIcon icon={faSpinner} spin size="2xl" style={{color: "#f2f4f8",}} />
    </div>
    )
}