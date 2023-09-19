import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice";
import { toast } from 'react-hot-toast';
import "./Product.css";

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");

  }
  return (
    
      <div className="w-[500px] h-[200px] flex flex-row">
        <div className="w-[200px] h-full">
          <img src={item.image} className="h-[200px] w-[150px]" alt=""></img>
        </div>
        <div className="w-[300px] h-full flex flex-col mt-3 justify-between">
          <h1 className="text-gray-700 font-semibold text-lg">{item.title}</h1>
          <h1 className="text-gray-500 font-semibold text-sm">{item.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
          <div className="flex flex-row justify-between mb-6">
            <p  className="text-green-600 font-semibold text-md">${item.price}</p>
            <AiFillDelete className="text-red-600 font-bold text-lg" onClick={removeFromCart}></AiFillDelete>
          </div>
        </div>
      </div>
  );
};

export default CartItem;
