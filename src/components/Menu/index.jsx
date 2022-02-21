import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { menuFood } from '../../data/menuFood';
import { MenuCard } from '../MenuCard';
import { menuItems } from '../../data/menuItems';
import { MenuItem } from '../MenuItem';
import { useState } from 'react';
import images from '../../images/pizza.png';
import images1 from '../../images/frits.jpg';

export const Menu = () => {

    const[selectedFood, setselectedFood] = useState(menuItems);
    const[selectedBox,setSelectedBox] = useState(10);
    
    const selected = (name,key) => {
        if(selectedBox === key){
            setselectedFood(menuItems);
            document.getElementById(selectedBox).style.boxShadow = '';
            document.getElementById(selectedBox).style.border = '2px solid transparent';
            setSelectedBox(none)
        }else{
            if(selectedBox < 10){
                document.getElementById(selectedBox).style.boxShadow = '';
                document.getElementById(selectedBox).style.border = '2px solid transparent';
            }
            const res = menuItems.filter((item) => item.type === name);
            console.log(res);
            setselectedFood(res);
            document.getElementById(key).style.boxShadow = '0px 0px 20px 0px pink'
            document.getElementById(key).style.border = '2px solid pink'
            setSelectedBox(key)
        }
    }

    return(
        <C.Container id='menu'>
            <div className='left'>
                <img src={images1}></img>
            </div>
            <div className='center'>
                <div className='menu-center-text'>
                    <p>Menu</p>
                    <div className='menu-center-arrows'>
                        <h1>Choose Your Test</h1>
                        <div className='menu-center-button'>
                            <button><FontAwesomeIcon icon={faArrowLeft} className='icon'/></button>
                            <button className='btn-right'><FontAwesomeIcon icon={faArrowRight} className='icon'/></button>
                        </div>
                    </div>
                </div>
                <div className='menu-center-options'>
                    <div className='menu-center-card'>  
                        {menuFood.map((item,key) => <MenuCard select={selected} id={key} name={item.Name} type={item.type} url={item.Url}/>)}
                    </div>
                </div>
                <div className='menu-center-card-item'>
                        {/*menuItems
                        .map((item,key) => <MenuItem name={item.name} text={item.caption} url={item.url} price={item.price}/>)*/}
                        {selectedFood
                        .map((item,key) => <MenuItem id={key} name={item.name} text={item.caption} url={item.url} price={item.price}/>) }
                        
                </div>
                <div className='btn-footer'>
                    <button className='btn-see'><p>See More</p><FontAwesomeIcon icon={faArrowRight} className='iconRight'/></button>
                </div>
            </div>
            <div className='right'>
                <img className='right-Img'src={images}></img>
            </div>
        </C.Container>
    )
}