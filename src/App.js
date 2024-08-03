// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import { BiMenuAltRight } from "react-icons/bi";
// import { IoIosSearch } from "react-icons/io";
// import { HiPencilSquare } from "react-icons/hi2";
// import { IoMenu } from "react-icons/io5";
// import { IoIosCall } from "react-icons/io";
// import { BsChatText } from "react-icons/bs";
// import { BsDisc } from "react-icons/bs";
// import { FaRegStar } from "react-icons/fa";
// import { FaBoxArchive } from "react-icons/fa6";
// import { IoSettingsSharp } from "react-icons/io5";
// import Whatsapp from './component/Whatsapp';
// import Whats from '../src/data/Whatsapp.js';
// import image from "../src/images/chesss5.jpg"
// import Cart from './component/Cart.jsx';

// function App() {
  

//   const [whats, setcart] = React.useState([]);
//   const [total, settotal] = React.useState(0);
//   console.log(whats);
//   const click = (itemtoAdd) => {
//     console.log(itemtoAdd);
//     const itemindex = whats.findIndex(item => item.Name === itemtoAdd.Name);

//     if (itemindex === -1) {
//       setcart([...whats, { ...itemtoAdd, quantity: 1 }])
//     } else {
//       const updateditems = [...whats];
//       updateditems[itemindex].quantity += 1;
//       setcart(updateditems);

//     }
//     let newtotal = 0;
//     whats.forEach(item => {
//       newtotal +=  item.Msg * (parseInt(item.Name) || 0);
//       // console.log(item.Msg);
//     });
//       settotal(newtotal);
//   }
//   return (


//     <div className='main'>
//       {/* <div className='cartt'>
//       {
//       Whats.map((v, i) => {
//             return <Cart whts={v} key={i} />
//           })
//         }
//         </div> */}
//       <div className='line'>
//         <div className='first'>
//           <p><IoMenu /></p>
//           <p><BsChatText /></p>
//           <p><IoIosCall /></p>
//           <p><BsDisc /></p>
//         </div>
//         <div className='second'>
//           <b><FaRegStar /></b>
//           <b><FaBoxArchive /></b>
//           <b><IoSettingsSharp /></b>
//           <img src={image} alt='hhh' className='image'></img>
//         </div>
//       </div>
//       <div className='whats'>
//         {/* <h1>Whatsapp</h1> */}

//         <div className='upper'>
//           <div className='icons'>
//             <h3>chats</h3>
//             <div className='innericons'>
//               <HiPencilSquare />
//               <BiMenuAltRight />
//             </div>
//           </div>
//           <div className='search'>
//             <IoIosSearch />
//             <p className='start'>Search or start a new chat</p>
//           </div>
//         </div>




//         {
//           Whats.map((v, i) => {
//             return (
//               <Whatsapp
//                 whts={v} key={i}
//                 whats={Whats}
//                 setcart={setcart}
//                 click={click}
//               />
//             )
//           })

//         }

//       </div>
//       <div className='cartt'>
//         {
//           // Whats.map((item, index) => {
//           //   return (<Cart whts={item} key={index} />)
//           // })
//         }

//       </div>
//     </div>
//   );
// }

// export default App;


import './App.css';
import React from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { HiPencilSquare } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { BsChatText } from "react-icons/bs";
import { BsDisc } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import Whatsapp from './component/Whatsapp';
import Whats from '../src/data/Whatsapp.js';
import image from "../src/images/chesss5.jpg";
import Cart from './component/Cart.jsx';

function App() {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
// console.log(cart);
  const handleAddToCart = (itemToAdd) => {
    const itemIndex = cart.findIndex(item => item.Name === itemToAdd.Name);
    setCart([{...itemToAdd, quantity: 1 }]);

    // Update total price
    let newTotal = 0;
    cart.forEach(item => {
      newTotal += item.quantity * (parseInt(item.price) || 0); // Ensure 'price' is a property in item
    });
    setTotal(newTotal);
  };

  return (
    <div className='main'>
      <div className='line'>
        <div className='first'>
          <p><IoMenu /></p>
          <p><BsChatText /></p>
          <p><IoIosCall /></p>
          <p><BsDisc /></p>
        </div>
        <div className='second'>
          <b><FaRegStar /></b>
          <b><FaBoxArchive /></b>
          <b><IoSettingsSharp /></b>
          <img src={image} alt='chess' className='image' />
        </div>
      </div>
      <div className='whats'>
        <div className='upper'>
          <div className='icons'>
            <h3>Chats</h3>
            <div className='innericons'>
              <HiPencilSquare />
              <BiMenuAltRight />
            </div>
          </div>
          <div className='search'>
            <IoIosSearch />
            <p className='start'>Search or start a new chat</p>
          </div>
        </div>

        {Whats.map((item, index) => (
          <Whatsapp
            whts={item}
            key={index}
            whats={cart}
            setCart={setCart}
            click={handleAddToCart}
          />
        ))}
      </div>
      <div className='cartt'>
        {cart.map((item, index) => {
          console.log(item);
         return <Cart whts={item} key={index} />
})}
      </div>
    </div>
  );
}

export default App;








