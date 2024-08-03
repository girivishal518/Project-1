import React from 'react'
import Whats from "../data/Whatsapp.js"
import { CiVideoOn } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import "../css/Cart.css"
function Cart({whts}) {
  console.log(whts);
  console.log(whts.Name);
  return (
    <>
       <div className='cart'>
        <img src={whts.Image} alt="img" />
        <div className='msggg'>
          <div className='innermsg'>
            <h1>{whts.Name}</h1>
            <div className='icon'>
            <div>
                <i><CiVideoOn /></i>
                <i><MdLocalPhone /></i>
            </div>
            <i><IoIosSearch /></i>
            </div>
            {/* <p className='date'>{whts.Date}</p> */}
          </div>
          <div className='pehra'>
            {/* <p>{whts.msg}</p> */}
          </div>
        </div>
        </div>

    </>
  )
}

export default Cart
