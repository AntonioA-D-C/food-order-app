import SavedFood from "../SavedFood/SavedFood";
import Button from "../Button/Button";
import { useContext, useEffect } from "react";
import { CartContext } from "../../store/CartContext";
import Modal from "../Modal/Modal";
import { ProgressContext } from "../../store/ProgressContext";
export default function Cart(){

    
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;
    const progressCtx = useContext(ProgressContext);
    const amount = cartItems.reduce((carry, item)=>(carry+(item.quantity*item.price)), 0);
 
 
    return(
     
 <Modal title="Your Cart" open={progressCtx.progress === 'cart'} >
    {Array.isArray(cartItems) && cartItems.length >0 && cartItems.map((item)=><SavedFood key={item.id} itemData={item}/>)}
   
   
    <div style={{display:"flex", flex: 1, alignContent:"flex-end", alignItems:"flex-end", justifyContent:"flex-end"}}>
    <p style={{fontWeight:"bold"}}>{`$${amount.toFixed(2)}`}</p>
    </div>
    <div style={{display:"flex", justifyContent:"flex-end", gap: "1rem"}}>
    <Button type="close" color="black" onClick={progressCtx.closeCart}>
    Close
   </Button>
   {
   cartCtx.items.length>0 && <Button type="submit" onClick={progressCtx.openCheckout} >
    Go to checkout
   </Button>
}
    </div>
    </Modal>
 
    );
}