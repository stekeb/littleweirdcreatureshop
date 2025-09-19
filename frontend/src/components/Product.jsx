import './Product.css'
import { Link } from "react-router-dom"

export default function Product({id, name, description, size, color, weight, price}) {
    return (
        <Link to={`/product/${id}`}>
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
        </Link>
        
    )
}