import { BiSolidLeftArrow } from 'react-icons/bi'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from "react-router-dom"
import ProductBlock from '../components/ProductBlock.jsx'
import { items } from '../AllData.js'

export default function TrendingSlider({ toggleImg, toggleParam }) {
    const slideLeft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft -= 235
    }
    const slideRight = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft += 235
    }
    const trendingProductsEl = items.map(item => {
        if (item.id > 7) {
            return (
                <Link onClick={() => {
                    toggleParam(item.id)
                    toggleImg(items[item.id - 1].img)
                    scrollTo(0, 0)
                }} to={`/products/${item.id}`} key={item.id} className='product-link'>
                    <ProductBlock img={item.img} desc={item.description} price={item.price} />
                </Link>
            )
        } else {
            return null
        }
    })
    return (
        <div>
            <div className='flex trending-header'>
                <h2 className='secondary-heading' style={{ fontSize: '1.75rem' }}>Trending Now</h2>
                <div className='btn-cont flex'>
                    <button onClick={slideLeft}><BiSolidLeftArrow size={20} color='white' /></button>
                    <button onClick={slideRight}><BiSolidRightArrow size={20} color='white' /></button>
                </div>
            </div>
            <div className='flex product-row-container' id='slider'>
                {trendingProductsEl}
            </div>
        </div>
    )
}