import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cardSlice";
import OrderConfirmationModal from "./OrderConfirmationModal";

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.card.cart);
    const [isModalVisible, setModalVisible] = useState(false);

    // Calculate the total number of items and total price in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleClearCart = () => {
        dispatch(clearCart(cartItems))
    }

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId))
    }

    const handlePlaceOrder = () => {
        //console.log("Placing order...");
        dispatch(clearCart()); 
        setModalVisible(true); 
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <div className="text-center m-4 p-4">
                <h1 className="text-2xl">Cart</h1>
                <button className=" mr-2 border border-box p-3 m-3 rounded-lg shadow-lg bg-red-300 hover:bg-slate-500 text-white " onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="flex flex-col items-center">
                {cartItems.length === 0 ? (
                    <p>Your Cart is empty😔. Add items to your Cart</p>
                ) : (
                    <>
                        <p className="text-xl">Total Price: ${totalPrice.toFixed(2)}</p>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center border m-4 p-4">
                                <img
                                    className="w-32 h-32 object-cover"
                                    src={item.image}
                                    alt={item.title}
                                />
                                <div className="ml-4">
                                    <h2 className="text-l font-bold">{item.title}</h2>
                                    <p>${item.price}</p>

                                    <p className="p-2 m-2">Total Items: {totalItems}</p>
                                    <div className="p-2">
                                        <button className="p-2   mx-auto m-2 border border-box rounded-lg shadow-lg bg-red-300 hover:bg-slate-500 text-white" onClick={handleRemoveItem}>Remove Item</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div>
                            <button className="p-3 m-3 border border-box rounded-lg shadow-lg bg-red-300 hover:bg-slate-500 text-white" onClick={handlePlaceOrder} >Place Order </button>
                        </div>
                    </>
                )}
            </div>
            {isModalVisible && <OrderConfirmationModal closeModal={closeModal} />}
        </div>
    );
};

export default Cart;






