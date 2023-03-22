import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from "@fortawesome/free-solid-svg-icons"

export const Loader = () => {
    return(
    <div className='d-flex justify-center w-100'>
    <FontAwesomeIcon icon={faRotateRight} spin size="2xl" style={{color: "#f2f4f8",}} />
    </div>
    )
}