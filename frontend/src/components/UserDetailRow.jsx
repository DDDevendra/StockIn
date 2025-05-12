import React, { useEffect } from 'react'
import style from '../styles/Components/userDetailRow.module.css'
import { userStore } from '../stores/userStore.js'

const UserDetailRow = (props) => {

  const { users , addUser , clearUsers} = userStore(); 
  
  const onColorClick = () =>{
    let useri ={
      userId:props.id,
      userColor:props.color
    }
    addUser(useri);
    console.log(useri);
  }

  useEffect(() => {
    console.log("The user :-"+JSON.stringify(users));  // Logs the updated user after state change
  }, [users]); 

  return (
    <>
      <div>
        <div className={style.mainDiv}>
          <div className={style.userID}  onClick={()=>{clearUsers()}}>{props.id}</div>
          <div className={style.userName}><input type='text'></input></div>
          <div className={style.userColor} style={{ backgroundColor: props.color }} onClick={onColorClick}></div>
        </div>
      </div>
    </>
  )
}

export default UserDetailRow
