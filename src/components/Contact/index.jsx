import * as C from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import images from '../../images/spaghetti.png'

export const Contact = () => {
    return(
        <C.Container id='contact'>
            <div className='left'>
                <div className='left-text'>
                    <p>Contact us</p>
                    <h1>Let's Talk</h1>
                    <p className='text'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore  
                    sed do eiusmod tempor incididunt ut labore et dolore </p>
                </div>
                <div className='left-form'>
                    <form>
                        <label>Your Name</label>
                        <input></input>
                        <label>Your Email</label>
                        <input></input>
                        <label>Your Message</label>
                        <textarea placeholder='Type your message if you want...'></textarea>
                        <button>Submit Message</button>
                    </form>
                </div>
            </div>
            <div className='right'>
                <div className='right-image'>
                    <img src={images}></img>        
                </div>
                <div>
                    <div className='right-text'>
                        <h1>Phone</h1>
                        <p><FontAwesomeIcon icon={faPhone} className='icon'/>+1234 4521 3581</p>
                        <p><FontAwesomeIcon icon={faPhone} className='icon'/>264 5941 000000</p>
                    </div>
                    <div className='right-text'>
                        <h1>Online Information</h1>
                        <p><FontAwesomeIcon icon={faEnvelope} className='icon'/>dbznetudo@gmail.com</p>
                        <p><FontAwesomeIcon icon={faGlobe} className='icon'/>portifolio-kappa-nine.vercel.app</p>
                    </div>
                    <div className='right-text'>
                        <h1>Address</h1>  
                        <p><FontAwesomeIcon icon={faLocationDot} className='icon'/>1st Office: 977 North Oak St. Westminster, MD 21157</p>
                        <p><FontAwesomeIcon icon={faLocationDot} className='iconDot'/>2nd Office: 7016 Somerset Road Superior, WI 54880</p>
                    </div>
                </div>
            </div>
        </C.Container>
    )
}