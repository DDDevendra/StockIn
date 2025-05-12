import React from 'react'
import style from '../styles/information.module.css'
import Next from '../components/Next'

const Information = () => {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Tagesschrift&display=swap" rel="stylesheet"></link>
            <div className={style.root}>
                <div className={style.informationBlock}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam corrupti non, alias consequatur blanditiis exercitationem iusto nam possimus inventore quasi nostrum dolores, maxime enim consectetur eos nobis cumque, minus ea voluptate fugit qui praesentium. Suscipit, nostrum quae pariatur error voluptas similique laborum vitae cupiditate ex rerum consequatur animi quam.</div>
                <div className={style.btnBar}>
                    <Next navigateTo='/' BtnText='Back' />
                    <Next navigateTo='/playerDetails' BtnText='Next' />
                </div>
            </div>
        </>
    )
}

export default Information