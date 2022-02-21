import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const MemorialCard = ({ name, profession, text, url }) => {
    return(
        <C.Container>
            <div className='memorial-header'>
                <img src={url} alt=''></img>
                <div className='memorial-header-profile'>
                    <p className='name'>{name}</p>
                    <p>{profession}</p>
                </div>
                <div className='stars'>
                    <FontAwesomeIcon icon={faStar} className='iconS'/>
                    <FontAwesomeIcon icon={faStar} className='iconS'/>
                    <FontAwesomeIcon icon={faStar} className='iconS'/>
                    <FontAwesomeIcon icon={faStar} className='iconS'/>
                    <FontAwesomeIcon icon={faStar} className='iconS'/>
                </div>
            </div>
            <hr></hr>
            <div className='memorial-text'>
                <p>"{text}"</p>
            </div>
        </C.Container>
    )
}