

export default function ProductBlock({ img, desc, price }) {
    return (
        <div className="product-block" >
            <img src={img} alt={desc} className="product-block-img" />
            <p className="product-block-desc">{desc}</p>
            <p className="product-block-price">{price}$</p>
        </div>
    )
}