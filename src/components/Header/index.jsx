import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    return(
        <C.Container>
            <div className='logo'>
                <FontAwesomeIcon icon={faFire} className="icon" />
                <p>Resturante Flex</p>
            </div>
            <div className='menu-header'>
                <a href="#">Home</a>
                <a href='#service'>Service</a>
                <a href='#menu'>Menu</a>
                <a href='#review'>Review</a>
                <a href='#contact'>Contact US</a>
            </div>
        </C.Container>
    )
}