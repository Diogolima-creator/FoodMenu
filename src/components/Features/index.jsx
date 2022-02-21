import * as C from './styles'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAppleWhole, faCartShopping,faMotorcycle} from '@fortawesome/free-solid-svg-icons';

export const Features = () => {
    return(
        <C.Container id='service'>
            <div className='features-img'>
                <img src="images/onion.png" alt="" />
            </div>
            <div className='features-div'>
                <p>Features</p>
                <h1>Our Creative Service</h1>
            </div>
            <div className='features-cards'>

                <div className='card'>
                    <img src='images/bowlSalad.jpg' alt='' />
                    <p className='card-title'>Healthy Food</p>
                    <p className='card-text'>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                </p>
                    <a href='' className='card-more'>Learn More...</a>
                </div>

                <div className='card'>
                    <img src='images/shop.jpg' alt='' />
                    <p className='card-title'>Online Order</p>
                    <p className='card-text'>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                </p>
                    <a href='' className='card-more'>Learn More...</a>
                </div>

                <div className='card'>
                <img src='images/motoboy.jpg' alt='' />
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