import * as C from './styles';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { testimonialList } from '../../data/TestimonialList';
import { MemorialCard } from '../MemorialCard';

export const Memorial = () => {

    const options = {
        nav:true,
        pagination:true,
        rewind:true,
        autoplay:true,
        loop:true,
        dots:false,
        stagePadding:0,
        autoplayHoverPause:true,
        autoplayTimeout:5000,
        slideBy:1,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            1200:{
                items:2
            },
            1600:{
                items:2
            }
        }
    }
    
    

    return(
        <C.Container id='review'>
            <div className='memorial-text'>
                <p>Testimonial</p>
                <h1>What Are Saying Our Customers</h1>
                <p className='memorial-text-long'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore  consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className='memorial-carousel'>
                <OwlCarousel {...options}
                > 
                    {
                        testimonialList.map((item) => 
                            <MemorialCard name={item.name} profession={item.profession} url={item.ProfilePic} text={item.text}/>
                        )
                    }              
                </OwlCarousel>
            </div> 
        </C.Container>
    )
}