import React from 'react';
import h from './Header.module.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/type=menu.png'
import map from '../../assets/type=map.png'
import shop from '../../assets/type=shop.png'
import mail from '../../assets/type=mail.png'
import search from '../../assets/type=search.png'
import {useDispatch} from "react-redux";
import {openCloseMenu} from "../../Redux/headerReducer";

const Header = () => {
     const dispatch = useDispatch()
    return (
        <div className={h.header}>
            <div className={h.itemsBlock}>
               <div>
                   <img  onClick={()=>dispatch(openCloseMenu())} src={menu} alt="menu"/>
               </div>
                <div>
                    <img src={map} alt="map"/>
                </div>
                <div>8 981 120-11-17</div>
            </div>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div className={h.itemsBlock} >
                <div>
                    <img src={shop} alt="menu"/>
                </div>
                <div>
                    <img src={mail} alt="map"/>
                </div>
                <div>
                    <img src={search} alt="map"/>
                </div>
            </div>
        </div>
    );
};

export default Header;