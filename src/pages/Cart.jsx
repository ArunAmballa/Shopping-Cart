import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  const navigate=useNavigate()

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div className="w-[1180px] mx-auto mt-3">
      {
        cart.length >0 ? 
        (
        <div className="flex flex-row justify-between">

          <div>
            {
              cart.map((item,index)=>{
                return (
                <div className="flex flex-col">
                  <CartItem key={item.id} itemIndex={index} item={item}></CartItem>
                  <hr className="mt-5 mb-5"></hr>
                </div>);

              })
            }
          </div>
          <div className="space-y-3">

            <div className="mt-3 space-y-3">
              <div className="text-gray-700 font-semibold text-lg">Your Cart</div>
              <div className="text-gray-700 font-semibold text-lg"> Summary</div>
              <p>
                <span className="text-gray-700 font-semibold text-lg">Total Items:{cart.length}</span>
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-semibold text-lg">Total Amount:{totalAmount}</p>
              <button className="bg-green-600 rounded-full  mt-5 p-3 px-5 font-semibold text-white hover:pointer hover:bg-gray-700 transition duration-300 ease-in" onClick={()=>navigate("/")}>Checkout Now</button>
            </div>


          </div>

        </div>
        ) :
        (
          <div className="flex flex-col justify-center items-center w-[1180px] h-[100vh]">
          <h1 className="text-gray-800 font-semibold text-[40px]">Your Cart is Empty</h1>
          <button className="bg-green-600 rounded-full  mt-5 p-3 px-5 font-semibold text-white hover:pointer hover:bg-gray-700 transition duration-300 ease-in" onClick={()=>navigate("/")}>Shop Now</button>
          </div>
        )
      }

    </div>
  );
};

export default Cart;
