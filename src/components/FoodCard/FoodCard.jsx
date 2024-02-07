import { useContext } from 'react';
import Button from '../Button/Button'
import classes from './FoodCard.module.css' 
import { CartContext } from '../../store/CartContext';

export default function FoodCard({meal}){
    const cartCtx = useContext(CartContext);
    function addThisMeal(meal){
 
       cartCtx.addToOrder(meal);
    }
    
    
    return(
        <div className={classes["meal-item"]}>
            <img src={`http://localhost:3000/${meal.image}`}></img>
            <div className={classes.cardTextContainer}>
            <h3>{meal.name}</h3>
          <p className={classes["meal-item-price"]}>${meal.price}</p>
          <p className={classes["meal-item-description"]}>{meal.description}</p>

          </div>
          <div className={classes["meal-item-actions"]}>
          <Button  onClick={()=>addThisMeal(meal)} type="submit">Add To Cart</Button>
          </div>
        </div>
    )
}

