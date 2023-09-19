import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return(
    <div>
      <nav className="flex justify-between mx-auto items-center h-20 max-w-6xl">
        <NavLink to="/">
          <div className="ml-5">
          <img src="../logo.png"  height={40} width={180} alt="Image"></img>
          </div>
        </NavLink>
        
        <div className="flex items-center font-medium space-x-6 text-slate-100 mr-5">
          <NavLink to="/">
              <p>Home</p>
          </NavLink>
          
          <NavLink to="/cart">
            <div className="relative">
                 <FaShoppingCart className="text-3xl"></FaShoppingCart>
          
                 {
                  cart.length>0 && (<span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>)
                 }
    
                 
                 
            </div>
            

          </NavLink>
          
        </div>

      </nav>

    </div>
  );
};

export default Navbar;
