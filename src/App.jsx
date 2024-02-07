import FoodCard from "./components/FoodCard/FoodCard";
import NavBar from "./components/NavBar/NavBar";
import logo from "./assets/logo.jpg"
import Modal from "./components/Modal/Modal";
import { useState, useEffect, useContext} from "react";
 
 
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Button from "./components/Button/Button";
import Meals from "./components/Meals/Meals";
import { useFetchData } from "./my-hooks/useFetchData";
import { fetchMenuData } from "../http";
import Header from "./components/Header/Header";
import { CartContext } from "./store/CartContext";
import { ProgressContext } from "./store/ProgressContext";
function App() {

  const [showModal, setShowModal] = useState(false)
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
  const progressCtx = useContext(ProgressContext);
  const removeItem = cartCtx.removeFromOrder;
  const {
    isFetching, 
    error, 
    fetchedData: menuData, 
    setFetchedData: setMenuData
  } = useFetchData(fetchMenuData,[]);


  useEffect(()=>{
    console.log(isFetching)
   console.log(menuData)
  }, [isFetching])
  function displayData(){
    
    progressCtx.openCart();
  }
  function closeModal(){
 
    setShowModal(false);
  }
  return (
    <>
    
    <Header  displayData={displayData}/>
    
     <Cart />
     <Checkout/>
  
 
    <Meals
    title="Food"
    loadingText= "Loading menu.."
    isLoading ={isFetching}
    data= {menuData}
    setMenuData = {setMenuData}
    addItems = { cartCtx.addToOrder}
    />
  
 
    </>
  );
}

export default App;
