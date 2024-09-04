import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = props => {
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = item => {
        setItems(prevItems => [...prevItems, item]);
        setTotalAmount(prevAmount => prevAmount + item.price * item.amount);
    };

    const removeItemToCartHandler = id => {
        setItems(prevItems => prevItems.filter(item => item.id != id));
        const itemToRemove = items.find(item => item.id === id);
        setTotalAmount(prevAmount => prevAmount - itemToRemove.price * itemToRemove.amount);
    };
    const cartContext = {
        items: [],
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;