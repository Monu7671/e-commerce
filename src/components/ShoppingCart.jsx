import emptyCart from '../img/cart/empty-cart.png'
import { CartContext } from "../CartContext.jsx";
import { useContext, useState } from 'react';
import { ImCross } from 'react-icons/im'
import { RxCross2 } from 'react-icons/rx'


export default function ShoppingCart() {
    const { visibility, close, productsInCart, onProductRemove, onQuantityChange } = useContext(CartContext)
    let price = 0
    return (
        <div className='shopping-cart flex' style={{ flexDirection: 'column', }}>
            <div className="cart-top flex" style={{ order: '-1' }}>
                <p className="epmty-cart-title" style={{ letterSpacing: '1px' }}>Your Shopping Cart ({productsInCart.length})</p>
                <button onClick={close}><ImCross /></button>
            </div>

            {productsInCart.length == 0 && (
                <div style={{ textAlign: 'center', marginTop: '5em', }}>
                    <img className='empty-cart-img' src={emptyCart} />
                    <h3>Your cart is epmty</h3>
                </div>
            )}
            {
                productsInCart.map((product, index) => {
                    price = price + (product.count * product.price)
                    return (
                        <div key={index} className='cart-product flow'>
                            <div className="cart-product-top flex">
                                <img src={product.img} alt={product.description} />
                                <p className='cart-product-name'>{product.description}</p>
                                <p className='cart-product-price'>{product.price}$</p>
                            </div>
                            {/* <p>count : {product.count}</p>
                            <p>total price = {product.count * product.price}$</p> */}
                            <div className='flex cancel-select-cont'>
                                <select
                                    className="count"
                                    value={
                                        product.count
                                    }
                                    onChange={(
                                        event
                                    ) => {
                                        onQuantityChange(
                                            product.id,
                                            event
                                                .target
                                                .value
                                        );
                                    }}>
                                    {[
                                        ...Array(
                                            10
                                        ).keys(),
                                    ].map(
                                        (number) => {
                                            const num =
                                                number +
                                                1;
                                            return (
                                                <option
                                                    value={
                                                        num
                                                    }
                                                    key={
                                                        num
                                                    }>
                                                    {
                                                        num
                                                    }
                                                </option>
                                            );
                                        }
                                    )}
                                </select>
                                <button onClick={() => onProductRemove(product)}
                                    className='cart-product-cancel'   ><RxCross2 size={25} /></button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='total-price'>
                <p className='price-text'>Subtotal : <span>{price}$</span> </p>
            </div>
        </div>
    )
}