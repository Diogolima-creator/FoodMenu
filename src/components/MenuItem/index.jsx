import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const MenuItem = ({name,url,text,price}) => {
    return(
        <C.Container>
            <img src={url} alt=''></img>
            <div className='stars'>
                <FontAwesomeIcon icon={faStar} className='iconS'/>
                <FontAwesomeIcon icon={faStar} className='iconS'/>
                <FontAwesomeIcon icon={faStar} className='iconS'/>
                <FontAwesomeIcon icon={faStar} className='iconS'/>
                <FontAwesomeIcon icon={faStar} className='iconS'/>
            </div>
            <p className='name'>{name}</p>
            <p className='caption'>{text}</p>
            
            <div className='btn'>
                <button>+</button>${price}
            </div>
        </C.Container>
    )
}