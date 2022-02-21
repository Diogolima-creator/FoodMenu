import * as C from './styles'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAppleWhole, faCartShopping,faMotorcycle} from '@fortawesome/free-solid-svg-icons';
import images from '../../images/onion.png'
import images1 from '../../images/bowlSalad.jpg'
import images2 from '../../images/shop.jpg'
import images3 from '../../images/motoboy.jpg'

export const Features = () => {
    return(
        <C.Container id='service'>
            <div className='features-img'>
                <img src={images} alt="" />
            </div>
            <div className='features-div'>
                <p>Features</p>
                <h1>Our Creative Service</h1>
            </div>
            <div className='features-cards'>

                <div className='card'>
                    <img src={images1} alt='' />
                    <p className='card-title'>Healthy Food</p>
                    <p className='card-text'>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                </p>
                    <a href='' className='card-more'>Learn More...</a>
                </div>

                <div className='card'>
                    <img src={images2} alt='' />
                    <p className='card-title'>Online Order</p>
                    <p className='card-text'>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                </p>
                    <a href='' className='card-more'>Learn More...</a>
                </div>

                <div className='card'>
                <img src={images3} alt='' />
                    <p className='card-title'>Home Delivery</p>
                    <p className='card-text'>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                </p>
                    <a href='' className='card-more'>Learn More...</a>
                </div>

            </div>
        </C.Container>
    )
}