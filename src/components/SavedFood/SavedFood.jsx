import { useContext } from "react";
import classes from "./SavedFood.module.css";
import { CartContext } from "../../store/CartContext";
export default function SavedFood({itemData}){

  
  const cartCtx = useContext(CartContext);
  const addThis= cartCtx.addToOrder;
  const removeThis= cartCtx.removeFromOrder;
    return(
        <div style={{display: "flex", flex: 1, alignItems:"center",flexDirection:"row", justifyContent:"space-between"}}>
      <div style={{flex: 6}}>
        <p>{`${itemData.name}- ${itemData.quantity} x $${(itemData.price * itemData.quantity).toFixed(2)}`}</p>
        </div>
        <div style={{display: "flex",  flex: 1,  gap: 15, flexDirection:"row", justifyContent:"space-between", alignItems: "center", alignContent: "center"}}>
         <button className={classes.button}>
          <p onClick={()=>{removeThis(itemData.id)}}>-</p>
          </button>
          <p>{itemData.quantity}</p>
          <button onClick={()=>{addThis(itemData)}} className={classes.button}>
          <p>+</p>
          </button>
        </div>
      </div>
    )
}


 