import { createContext, useState, useEffect } from "react";
const CartContext = createContext()

function CartContextProvider({ children }) {

    const [visibility, setVisibility] = useState(false)
    const [productsInCart, setproductsInCart] = useState(JSON.parse(localStorage.getItem('shopping-cart')) || [])

    useEffect(function () {
        localStorage.setItem('shopping-cart', JSON.stringify(productsInCart))
    }, [productsInCart])

    function open() {
        setVisibility(true)
    }
    function close() {
        setVisibility(false)
    }
    function addToCart(product) {
        const newProduct = {
            ...product,
            count: 1
        }
        setproductsInCart(prev => [...prev, newProduct,])
    }
    // function onQuantityChange(productId, count) {
    //     setproductsInCart(prevProducts => {
    //         const productIndex = prevProducts.findIndex(item => {
    //             item.id === productId
    //         })
    //         if (productIndex !== -1) {
    //             prevProducts[productIndex].count = count
    //         }
    //         return [...prevProducts]
    //         console.log(productIndex)
    //     })
    // }
    const onQuantityChange = (
        productId,
        count
    ) => {
        setproductsInCart((oldState) => {
            const productsIndex =
                oldState.findIndex(
                    (item) =>
                        item.id === productId
                );
            if (productsIndex !== -1) {
                oldState[productsIndex].count =
                    count;
            }
            return [...oldState];
        });
    };
    //     function onProductRemove(product) {
    //         setproductsInCart(prevProducts => {
    //             // const productIndex = prevProducts.findIndex(item => {
    //             //     item.id === product.id
    //             const productIndex = prevProducts.findIndex(
    //                 item => item.id === product.id
    //             )
    //         })
    //         console.log(productIndex)
    //         if (productIndex !== -1) {
    //             prevProducts.splice(productIndex, 1)
    //         }
    //         return [...prevProducts]
    //     }
    // }
    // const onProductRemove = (product) => {
    //     setproductsInCart((oldState) => {
    //         const productsIndex =
    //             oldState.findIndex(
    //                 (item) =>
    //                     item.id === product.id
    //             );
    //         if (productsIndex !== -1) {
    //             oldState.splice(productsIndex, 1);
    //         }
    //         return [...oldState];
    //     });
    // };

    const onProductRemove = (product) => {
        setproductsInCart(oldState => {
            const productIndex = oldState.findIndex(
                item => item.id === product.id
            )
            if (productIndex !== -1) {
                oldState.splice(productIndex, 1)
            }
            return [...oldState]
        })
    }

    return (
        <CartContext.Provider value={{
            visibility, addToCart, onQuantityChange, open, close, productsInCart,
            onProductRemove
        }}>
            {children}
        </CartContext.Provider>
    )
}
export { CartContextProvider, CartContext }















