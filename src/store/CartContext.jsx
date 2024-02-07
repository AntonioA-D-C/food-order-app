import { createContext, useState } from 'react';

export const CartContext = createContext(
    {
        items: [],
        addToOrder: (item) => {

        },
        removeFromOrder: (id) => { },
        clearCart: (id) => { }

    }

);
const CartProvider = ({ children }) => {
    const [items, setOrderItems] = useState([]);
    function addToOrder(item) {

        const itemExistsIndex = items.findIndex((thisItem) => thisItem.id === item.id);
        if (itemExistsIndex > -1) {

            const updatedItems = [...items];

            updatedItems[itemExistsIndex] = { ...updatedItems[itemExistsIndex], quantity: updatedItems[itemExistsIndex].quantity + 1 }
            console.log(updatedItems);
            setOrderItems(updatedItems);
        } else {
            setOrderItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
        }
    }
    function removeFromOrder(id) {

        const itemExistsIndex = items.findIndex((thisItem) => thisItem.id === id);
        const updatedItems = [...items];
        if (itemExistsIndex > -1 && updatedItems[itemExistsIndex].quantity >1) {
            updatedItems[itemExistsIndex] = { ...updatedItems[itemExistsIndex], quantity: updatedItems[itemExistsIndex].quantity - 1 }
            setOrderItems(updatedItems);
        } else {
            setOrderItems((prevItems) => prevItems.filter((item) => item.id !== id));
        }

    }
    function clearCart(){
        setOrderItems([]);
    }
    
    const value = {
        items: items,
        addToOrder: addToOrder,
        removeFromOrder: removeFromOrder,
        clearCart: clearCart
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;