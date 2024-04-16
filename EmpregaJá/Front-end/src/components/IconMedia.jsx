import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMobilePhone, faTabletAndroid, faDesktop, faTv} from "@fortawesome/free-solid-svg-icons"

function IconMedia() {
    return (
        <div>
            <FontAwesomeIcon icon={faMobilePhone} color='black' className='phone iconMedia' />
            <FontAwesomeIcon icon={faTabletAndroid} color='black' className='tablet iconMedia' />
            <FontAwesomeIcon icon={faDesktop} color='black' className='desktop iconMedia' />
            <FontAwesomeIcon icon={faTv} color='black' className='Tv iconMedia' />
        </div>
    )
}

export default IconMedia;