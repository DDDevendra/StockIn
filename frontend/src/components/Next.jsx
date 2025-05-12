import React from 'react'
import style from '../styles/buttons.module.css'
import { useNavigate } from 'react-router-dom'

const Next = (props) => {

    const naviagte = useNavigate();
    const onClickNext = () => {
        props.onClick();
        naviagte(props.navigateTo);
    }

   
    return (
        <div onClick={onClickNext}>
            <div className={style.next} onClick={onClickNext}>{props.BtnText}</div>
        </div>
    )
}

export default Next
