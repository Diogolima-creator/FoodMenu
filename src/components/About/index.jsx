import * as C from './styles'
import images from '../../images/teste.png'

export const About = () => {
    return(
        <C.Container>
            <div className='about'>
                <div className='about-img'>
                    <div className='circle-yellow'></div>
                    <img src={images} alt=''></img>
                    
                </div>
                <div className='about-text'>
                    <p>About Us</p>
                    <h1>The Best Enjoyable</h1>
                    <h1>Place Around You</h1>
                    <p className='about-text-p'>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam</p>
                    <button className='about-btn'>Learn More</button>
                </div>
            </div>
        </C.Container>
    )
}