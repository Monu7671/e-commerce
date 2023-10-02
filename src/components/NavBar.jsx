import { NavLink } from "react-router-dom";
import navImage from '../img/newlogo2.png'
import { useContext, useState } from "react";
import { CartContext } from "../CartContext.jsx";
import ShoppingCart from './ShoppingCart'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross2 } from 'react-icons/rx'
import { MdTurnedIn } from "react-icons/md";


export default function NavBar() {
    const { visibility, open, productsInCart } = useContext(CartContext)
    const [show, setShow] = useState(false)
    const activeStyles = {
        borderBottom: '2px solid black',
        paddingBottom: '5px',
    }
    return (
        <header>
            <nav className="flex container">
                <div>
                    <NavLink to='/'><img src={navImage} alt='logo' className="nav-page-logo" /></NavLink>
                </div>
                <div className="flex">
                    <div className={`link-container ${show ? 'open' : 'close'}`}>
                        <button className="link-container-cancel"
                            onClick={() => setShow(false)}><RxCross2 size={30} /></button>
                        <NavLink style={({ isActive }) => isActive ? activeStyles : null}
                            onClick={() => setShow(false)}
                            to='categories' className='nav-link'>Categories</NavLink>
                        {show && <NavLink
                            onClick={() => setShow(false)} style={({ isActive }) => isActive ? activeStyles : null}
                            to='categories/?type=lamp' className='nav-link'>Lamps</NavLink>}
                        <NavLink onClick={() => setShow(false)} style={({ isActive }) => isActive ? activeStyles : null}
                            to='products/1' className='nav-link'>Product page</NavLink>
                    </div>
                    <button onClick={open} className="cart-icon-btn"><AiOutlineShoppingCart size={25} />
                        {productsInCart.length > 0 && <span className="cart-num">{productsInCart.length}</span>}</button>
                    <button className="hamburger-icon-btn" onClick={() => setShow(true)}><RxHamburgerMenu size={25} /></button>
                </div>
                {visibility && <ShoppingCart />}
            </nav>
        </header>
    )
}