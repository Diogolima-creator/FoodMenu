import * as C from './styles';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFire, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faLinkedinIn,faTwitter,faPinterest} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return(
        <C.Container>
            <div className='background'>

            </div>
            <div className='footer-top'>
                <div className='logo'>
                    <FontAwesomeIcon icon={faFire} className="icon" />
                    <h1>Resturante Flex</h1>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore </p>
                </div>
                <div className='footer-company'>
                    <h1>Company</h1>
                    <p>Home</p>
                    <p>Service</p>
                    <p>Menu</p>
                    <p>Review</p>
                    <p>Contact us</p>
                </div>
                <div className='footer-services'>
                    <h1>Services</h1>
                    <p>Online Delivery</p>
                    <p>Healthy Food</p>
                    <p>Online Order</p>
                    <p>Book Table</p>
                </div>
                <div className='footer-updates'>
                    <h1>If You Get More Upbeats</h1>
                    <div className='footer-updates-input'>
                        <input placeholder='Enter email address'></input>
                        <button><FontAwesomeIcon icon={faArrowRight}/></button>
                    </div>
                    <div className='footer-social'>
                        <a href='https://www.facebook.com/' target="_blank"><FontAwesomeIcon icon={faFacebookF} className="icon-social"/></a>
                        <a href='https://www.linkedin.com/in/diogo-lima1408/'  target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="icon-social"/></a>
                        <a href='https://twitter.com/'  target="_blank"><FontAwesomeIcon icon={faTwitter} className="icon-social"/></a>
                        <a href='https://pinterest.com/'  target="_blank"><FontAwesomeIcon icon={faPinterest} className="icon-social"/></a>
                    </div>
                </div>  
            </div>
            <hr></hr>
            <div className='footer-bottom'>
                <p>Copyright 2022 All right reserverd.</p>
                <p>Diogo Lima.</p>
            </div>
        </C.Container>
    )
}
