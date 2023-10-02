
import { Outlet, NavLink } from "react-router-dom"
import { useState, useContext } from "react"

import Footer from '../components/Footer.jsx'
import NavBar from "../components/NavBar.jsx"


export default function Layout() {

    return (
        <div className="">
            <NavBar />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}



















// const { lsData, setLsData } = useContext(context)

    // function removeItem(index) {
    //     const ls = JSON.parse(localStorage.getItem('cartItems')) || []
    //     // ls.splice(index, 1)
    //     const x = [...ls, ...lsData]
    //     setLsData(x.splice(index, 1))
    //     localStorage.setItem('cartItems', JSON.stringify(lsData))
    // }

    // const [showCart, setShowCart] = useState(false)
    // // const [dataFromLS, setdataFromLS] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])

    // let el
    // if (lsData.length > 0) {
    //     el = lsData.map((item, index) => {
    //         return (
    //             <div key={index}>
    //                 <img src={item.img} width='50' />
    //                 <button onClick={() => removeItem(index)}>X</button>
    //                 <p>{item.description}</p>
    //                 <p>{item.price}</p>
    //             </div>
    //         )
    //     })
    // } else {
    //     el = <p>cart is empty</p>
    // }
    // function handleShowCart() {
    //     setShowCart(prev => !prev)
    // }

