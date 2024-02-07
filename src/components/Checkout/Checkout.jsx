import { useContext, useEffect, useState, useCallback } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import classes from './Checkout.module.css';
import { CartContext } from "../../store/CartContext";
import { ProgressContext } from "../../store/ProgressContext";
import { isEmail } from "../../util/validation";
import useHttp from "../../my-hooks/useHttp";
import Error from "../../../Error/Error";


const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

}
 
export default function Checkout() {


    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;
    const progressCtx = useContext(ProgressContext);

    const { data, isLoading: isSending, error, sendRequest, clearData } = useHttp('http://localhost:3000/orders', requestConfig);
    const amount = cartItems.reduce((carry, item)=>(carry+(item.quantity*item.price)), 0);

    function submitData(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }

        }))
 
    }
    function handleFinish(){
        cartCtx.clearCart();
        progressCtx.closeCheckout();
        clearData();
    }
    let actions = (
        <>
            <Button type="close" color="black" >
                Close
            </Button>
            <Button type="submit">
                Go to checkout
            </Button></>
    )
    if(isSending){
        actions = <span>Sending order data</span>
    }

    if(data && !error){
        return <Modal  open={progressCtx.progress==='checkout'}>
            <h2>Success!</h2>
            <p>Order Submitted Successfully</p>
            <p className={classes["modal-actions"]}>
                <Button onClick={handleFinish} >Okay</Button>
            </p>
        </Modal>
    }
    return (
        <Modal title="Your Cart" open={progressCtx.progress === 'checkout'}  >
            <div>
                <p>{`Total amount $${amount}`}</p>
                <form onSubmit={submitData}>
                    <div>
                        <Input label="Full Name" type="text" id="name" />
                        <Input label="E-Mail Address" type="text" id="email" />
                        <Input label="Street" type="text" id="street" />
                    </div>
                    <div className={classes["control-row"]}>
                        <Input label="Postal Code" type="text" id="postal-code" />
                        <Input label="City" type="text" id="city" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                       <p className={classes["modal-actions"]}>{actions}</p>
                    </div>
 
                    {error && <Error title="Failed to Submit order" message="Cheeks"/>}
                </form>
            </div>

        </Modal>
    );
}