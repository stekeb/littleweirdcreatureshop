import './Product.css'

export default function Product({name, description, size, color, weight, price}) {
    return (
        <div className="product-container">

            <div className="product-image-container">
                <img src="/images/lion.jpg" className="product-image"  alt="Alternativtext2"/>
            </div>

            <div className="product-name-container">
                <p className="product-name">{name}</p>
            </div>

            <div className="product-description-container">
                <p className="product-description">{description}</p>
            </div>
            
            <div className="product-properties-container">
                    <div className='product-properties product-properties-size'>Größe: {size}</div>
                    <div className='product-properties product-properties-color'>Farbe: {color}</div>
                    <div className='product-properties product-properties-weight'>Gewicht: {weight}</div>
            </div>
            
            <div className="product-price-container">
                <div className="product-price">Preis: {price}</div>    
            </div>
            
        </div>
        
    )
}