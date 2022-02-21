import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import * as C from './styles';
import { faFacebookF,faLinkedinIn,faTwitter,faPinterest} from '@fortawesome/free-brands-svg-icons';
import images from '../../images/pimenta.png'
import images1 from '../../images/home.png'

export const Home = () => {
    return(
        <C.Container>
            <div className='background-left'>
                <img src={images} alt=''></img>
            </div>
            <div className='background-circle'>
                    <div className='background-circle-bold'>
                        <h1>OUR BEST</h1>
                        <h1>HEALTHY FOOD</h1>
                    </div>
                    <div className='background-circle-text'>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className='background-circle-buttons'>
                        <button>Order Now</button>
                        <button className='btn-play'><FontAwesomeIcon icon={faPlay} className="icon"/> See how it work</button>
                    </div>
                    <div className='background-circle-img'>
                        <img src={images1} alt=''></img>
                    </div>
                    <div className='background-circle-social'>
                    <a href='https://www.facebook.com/' target="_blank"><FontAwesomeIcon icon={faFacebookF} className="icon-social"/></a>
                        <a href='https://www.linkedin.com/in/diogo-lima1408/'  target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="icon-social"/></a>
                        <a href='https://twitter.com/Diogo_NCSM'  target="_blank"><FontAwesomeIcon icon={faTwitter} className="icon-social"/></a>
                        <a href='https://pinterest.com/'  target="_blank"><FontAwesomeIcon icon={faPinterest} className="icon-social"/></a>
                    </div>
            </div>
            
        </C.Container>
    )
}