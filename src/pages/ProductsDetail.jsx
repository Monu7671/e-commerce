import { useParams } from "react-router-dom"
import { useState, useContext } from "react"
import { CartContext } from "../CartContext.jsx"
import { items } from '../AllData.js'

import TrendingSlider from "../components/TrendingSlider.jsx"



export default function ProductsDetail() {
    const { addToCart, onQuantityChange } = useContext(CartContext)
    const params = useParams()
    // const product = items[params.id - 1]
    const [param, setParam] = useState(params.id)
    const product = items[param - 1]
    console.log(param, product)

    const toggleParam = (id) => {
        setParam(id)
    }


    const [img, setImg] = useState(product.img)
    const toggleImg = (img) => {
        setImg(img)
    }
    console.log(param, product, img)
    return (
        <div className="" >
            <h2 className="product-title">{product.description}</h2>

            <div className="">
                <div className="product-page-top">
                    <div className="product-img-cont">
                        <img src={img} className="product-main-img" />
                        <div className="secondary-img-cont flex">
                            <img src={product.img} className="secondary-img" onMouseOver={() => setImg(product.img)} />
                            <img src={product.otherImgs[0]} className="secondary-img" onMouseOver={() => setImg(product.otherImgs[0])} />
                            <img src={product.otherImgs[1]} className="secondary-img" onMouseOver={() => setImg(product.otherImgs[1])} />
                        </div>
                    </div>
                    <div className="text-cont">
                        <p className="product-desc">{product.specs}</p>
                        <p className="product-price">{product.price}$</p>
                        <div className="product-btn-cont flex">
                            <button className="product-btn black-btn" onClick={() => {
                                addToCart(product)
                            }}>
                                add to cart
                            </button>
                            <button className="product-btn red-btn">buy now</button>
                        </div>
                    </div>
                </div>
                <div className="product-details-cont flex">
                    <div className="product-detail">
                        <p className="title">Texture:</p>
                        <p className="value">{product.texture}</p>
                    </div>
                    <div className="product-detail">
                        <p className="title">Weight:</p>
                        <p className="value">{product.weight}</p>
                    </div>
                    <div className="product-detail">
                        <p className="title">Size:</p>
                        <p className="value">{product.size}</p>
                    </div>
                </div>
            </div>
            <TrendingSlider toggleParam={toggleParam} toggleImg={toggleImg} />
        </div>
    )
}














// export default function ProductsDetail() {
//     const { lsData, setLsData } = useContext(context)
//     const params = useParams()
//     const chosenProduct = items[params.id - 1]

//     const [img, setImg] = useState(chosenProduct.img)
//     const [count, setCount] = useState(1)
//     function addCount() {
//         setCount(prevCount => prevCount + 1)
//     }
//     function decreaseCount() {
//         count > 1 ? setCount(prev => prev - 1) : null
//     }

//     // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])
//     function addToCart() {
//         const ls = JSON.parse(localStorage.getItem('cartItems')) || []
//         for (let i = 0; i < count; i++) {
//             setLsData(prev => {
//                 return [...prev, ...ls, chosenProduct]

//             })
//             localStorage.setItem('cartItems', JSON.stringify(lsData))
//         }
//         //localStorage.setItem('cartItems', JSON.stringify(lsData))
//     }


//     return (
//         <>
//             <h2>{chosenProduct.description}</h2>
//             <div>
//                 <div style={{ width: '50px' }}>
//                     <img src={img} />
//                     <img src={chosenProduct.img} onMouseOver={() => setImg(chosenProduct.img)} />
//                     <img src={chosenProduct.otherImgs[0]} onMouseOver={() => setImg(chosenProduct.otherImgs[0])} />
//                     <img src={chosenProduct.otherImgs[1]} onMouseOver={() => setImg(chosenProduct.otherImgs[1])} />
//                 </div>
//                 <p>{chosenProduct.specs}</p>
//                 <div>
//                     <p>Quantity</p>
//                     <button onClick={addCount}>+</button>
//                     <p>{count}</p>
//                     <button onClick={decreaseCount}>-</button>
//                 </div>
//                 <div>
//                     <button onClick={addToCart}>add to cart</button>
//                     <button>buy now</button>
//                 </div>
//             </div>
//         </>
//     )
// }