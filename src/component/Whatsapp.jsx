import React from 'react'
import { ImMenu } from "react-icons/im";
import "../css/Whatsapp.css";
import Whats from "../data/Whatsapp.js";
function Whatsapp({ whts ,click}) {
  // console.log(whts);
  return (
    <>
      {/* <div className='whats'>
      <h1>Whatsapp</h1>
    <div className='icons'>
    <h3>chats</h3>
    <ImMenu />
    </div>
    <div className='search'>
      <p className='start'>Search or start a new chat</p>
    </div> */}
      <div className='msg' onClick={()=> click(whts)}>
        <img src={whts.Image} alt="img" />
        <div className='msggg'>
          <div className='innermsg'>
            <p>{whts.Name}</p>
            <p className='date'>{whts.Date}</p>
          </div>
          <div className='pehra'>
            <p>{whts.msg}</p>
          </div>
        </div>

      </div>
      {/* </div> */}
    </>
  )
}

export default Whatsapp
