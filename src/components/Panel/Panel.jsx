import React from "react";
import p from './Panel.module.css'
import {useDispatch} from "react-redux";
import {openCloseMenu} from "../../Redux/headerReducer";

export const Panel = () => {
    const dispatch = useDispatch()
    return <div className={p.sidePanel}>
        <button className={p.exitButton} onClick={()=>dispatch(openCloseMenu())}>X</button>
    </div>
}