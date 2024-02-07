import useHttp from "../../my-hooks/useHttp";
import FoodCard from "../FoodCard/FoodCard"
import id from './Meals.module.css';

const requestConfig = {};
export default function Meals({title, loadingText, isLoading, data, addItems}){
  /* 
   const {
    data: loadedMeals,
    isLoading, 
    error
   } = useHttp('http://localhost:3000/meals', requestConfig, []);
*/
   if(isLoading){
    return <p>Fetching meals...</p>
   }
    return(
        <div id={id.meals}>
        {data.map((meal) =><FoodCard meal={meal} key={meal.id} />)}
       
     
      
        </div>
    )
}