import logo from "../../assets/logo.jpg";
import id from './Header.module.css';
import Button from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
export default function Header({displayData}){
 
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;
    const cartNumber = cartItems.reduce((carry, item)=>(carry+(item.quantity)), 0);
   
    return(
        <div id={id["main-header"]}>
        <div id={id.title}>
          <img src={logo}/>
          <h1>REACTFOODS</h1>
        </div>
    
    
        <Button onClick={displayData} >
        {`Cart(${cartNumber})`}
        </Button>
      </div>
    );
}