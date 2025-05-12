import React from "react";
import style from '../styles/home.module.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const LetsPlayOnClick = () =>{
        navigate('/information');
    }


    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Tagesschrift&display=swap" rel="stylesheet"></link>
            <div>
                <div className={style.root}>
                    <div className={style.play}  onClick={LetsPlayOnClick}></div>
                    <div className={style.letsPlay}>Lets Play !</div>
                </div>
            </div>
        </>
    );
}

export default Home;