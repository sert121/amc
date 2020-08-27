import React from 'react';
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import CurrencyFormat from "react-currency-format" ; 




function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                    
                <img className="checkout_ad" src="https://images7.alphacoders.com/633/thumb-1920-633262.png" alt=""/>
                {basket?.length === 0 ? (
                    <div>

                        <h2>Your shopping Basket is empty</h2>
                        <p>
                            To add items, please visit home and click on "Add to Basket", to fill the cart.
                        </p>


                    </div>
                )
                :(
                    <div>
                        <h2 className="checkout_title"> Your Shopping Basket </h2>
                        {/* LIst of all products */}
                        {   basket?.map(item =>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}

                    </div>
                )}

            </div>
            
            {  basket.length > 0 && 
            ( <div className="checkout_right">
                <Subtotal/>
            </div> )
            }

        </div>
    )
}

export default Checkout;
