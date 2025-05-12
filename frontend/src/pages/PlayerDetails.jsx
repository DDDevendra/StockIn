import React from 'react'
import style from '../styles/playerDetails.module.css'
import { useState } from 'react';
import UserDetailRow from '../components/UserDetailRow.jsx';
import Next from '../components/Next.jsx';
import { userStore } from '../stores/userStore.js';

const PlayerDetails = () => {

    const [count, setCount] = useState(0);
    const { users } = userStore(); 

    const onClickNext = () =>{
        console.log(users);
    };

    const updateCount = (change) => {
        setCount((count + change) < 0 ? 0 : count + change);
    }

    const renderRows = () => {
        const elements = [];
        for (let i = 0; i < count; i++) {
            elements.push(<UserDetailRow key={i} id={i} color={colors[parseInt(i) % 4]} />);
        }
        return elements;
    };

    const colors = ['red', 'blue', 'orange', 'yellow']
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Tagesschrift&display=swap" rel="stylesheet"></link>
            <div className={style.root}>
                <div className={style.PlayerCounterMain}>
                    <div className={style.PlayerIcon}></div>
                    <div className={style.Counter}>
                        <div className={style.minusIcon} onClick={() => updateCount(-1)}></div>
                        <div className={style.Number}>{count}</div>
                        <div className={style.plusIcon} onClick={() => updateCount(1)}></div>
                    </div>
                </div>
                <div className={style.PlayerDetailsMain}>
                    <div>
                        {renderRows()}
                    </div>
                </div>
                <div className={style.playerDetailsFooter}>
                    <Next navigateTo='/information' BtnText='Back' />
                    <Next navigateTo='/playerDetails' BtnText='Next' onClick={onClickNext}/>
                </div>
            </div>
        </>
    )
}

export default PlayerDetails
