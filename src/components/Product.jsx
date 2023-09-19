import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/cartSlice";
import "./Product.css"
const Product = ({post}) => {
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const addToCart=()=>{
    dispatch(add(post))
    toast.success("Item Added to Cart");
  }
  const removeFromCart=()=>{
    dispatch(remove(post.id))
    toast.error("Item Removed to Cart");
  }

  return (
    <div className='flex flex-col relative items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl' id='box'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-540 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className="h-full w-full" alt=""></img>
      </div>
      <div className='flex justify-between gap-12'>
        <div>
          <p className='text-green-600 font-semibold items-center w-full mt-5'>${post.price}</p>
        </div>
          {
            cart.some((p)=>p.id===post.id) ? (<button 
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-3 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in  mb-2 mt-2"  onClick={removeFromCart}>Remove Item</button>):
              (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-3 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in  mb-3 mt-2"  onClick={addToCart}>Add to Cart</button>)
          }
        
      </div>
      
    
    </div>
  );
};

export default Product;