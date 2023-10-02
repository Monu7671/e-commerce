
import banner1 from '../img/banner/banner1.jpg'
import banner2 from '../img/banner/banner2.jpg'

import { Link } from 'react-router-dom'

import { items } from '../AllData.js'
import ProductBlock from '../components/ProductBlock.jsx'
import TrendingSlider from '../components/TrendingSlider.jsx'
export default function Home() {

    const productsEl = items.map(item => {
        if (item.id > 8) {
            return null
        } else if (item.id <= 8) {
            return (
                <Link to={`products/${item.id}`} key={item.id} className='product-link'>
                    <ProductBlock img={item.img} desc={item.description} price={item.price} />

                </Link>
            )
        }
    })



    return (
        <div className=''>
            <div className='img-container flex'>
                <div className='img-cont-1 flex'>

                    <Link to='categories?type=furniture' className='cont-1-img-1 '>
                        <h2 className='bg-img-text'>live comfortably</h2>
                    </Link>
                    <Link to='categories?type=skin-care' className='cont-1-img-2 '>
                        <h2 className='bg-img-text'>Skincare</h2>
                    </Link>
                </div>
                <div className='img-cont-2 flex'>
                    <Link to='categories?type=kitchen' className='cont-2-img-1'>
                        <h2 className='bg-img-text'>Kitchen</h2>
                    </Link>
                    <Link to='categories?type=electronics' className='cont-2-img-2'>
                        <h2 className='bg-img-text'>electronics</h2>
                    </Link>
                </div>
            </div>

            <h2 className='secondary-heading'>Products we are proud of</h2>
            <div className='product-container '>
                {productsEl}
            </div>
            <div className='banner flex'>
                <div className='banner-text-box '>
                    <h3 className='banner-heading'>Creative Harmonious Living</h3>
                    <p className='banner-text'>RAOUF Products are all made to standard sizes so that you can mix and match them freely</p>
                    <button className='banner-btn'>shop now</button>
                </div>
                <img src={banner1} style={{ width: '50%' }} />
            </div>
            <TrendingSlider />

            <div className='banner flex'>
                <img src={banner2} />
                <div className='banner-text-box'>
                    <h3 className='banner-heading'>Comfortable & Elegante Living</h3>
                    <p className='banner-text'>RAOUF Products are all made to standard sizes so that you can mix and match them freely</p>
                    <button className='banner-btn'>shop now</button>
                </div>

            </div>

        </div>
    )
}