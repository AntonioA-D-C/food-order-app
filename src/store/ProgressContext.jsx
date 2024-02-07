import { createContext, useState } from "react";

export const ProgressContext= createContext(
    {
    progress: '',
    closeCheckout: ()=>{},
    openCheckout: ()=>{},
    closeCart: ()=>{},
    openCart: ()=>{},
}
);

const ProgressProvider = ({ children }) => {
   const [progress, setProgress] = useState('');

   function closeCheckout(){
    setProgress('');
   }
   function closeCart(){
    setProgress('');
   }
   function openCheckout(){
    
    setProgress('checkout');
   }
   function openCart(){
    setProgress('cart');
   }
   
    const value = {
       progress:progress,
       closeCheckout: closeCheckout,
       openCheckout: openCheckout,
       closeCart: closeCart,
       openCart: openCart
    }
    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    )
}

export default ProgressProvider;