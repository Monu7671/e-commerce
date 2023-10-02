import { useSearchParams, Link } from "react-router-dom"
import { items } from '../AllData.js'
import ProductBlock from '../components/ProductBlock.jsx'
import { IoIosArrowBack } from 'react-icons/io'

export default function Categories() {
    const [searchParams, setSearchParams] = useSearchParams()

    const typefilter = searchParams.get('type')
    const productsEl = items.map(item => {
        if (typefilter === null) {
            return (
                <Link to={`/products/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                    <ProductBlock img={item.img} desc={item.description} price={item.price} />
                </Link>
            )
        } else if (typefilter) {
            if (item.category === typefilter) {
                return (
                    <Link to={`/products/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                        <ProductBlock img={item.img} desc={item.description} price={item.price} />
                    </Link>
                )
            } else if (item.category !== typefilter) {
                return null
            }
        }
    })
    return (
        <>
            <div className="categories-top flex">
                <Link to='/' className=""><IoIosArrowBack />Home</Link>
                <h1>{typefilter === null ? 'all' : `${typefilter}s`}</h1>
            </div>
            <div className="categories-btn-cont flex">
                <button onClick={() => setSearchParams({})}>all</button>
                <button onClick={() => setSearchParams({ type: 'furniture' })}>furnitures</button>
                <button onClick={() => setSearchParams({ type: 'electronic' })}>electronics</button>
                <button onClick={() => setSearchParams({ type: 'lamp' })}>lamps</button>
                <button onClick={() => setSearchParams({ type: 'kitchen' })}>kitchen</button>
                <button onClick={() => setSearchParams({ type: 'chair' })}>chairs</button>
                <button onClick={() => setSearchParams({ type: 'skin-care' })}>skin care</button>
            </div>
            <div className="product-container">
                {productsEl}
            </div>

        </>
    )
}