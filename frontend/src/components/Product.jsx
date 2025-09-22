import './Product.css'
import { Link } from "react-router-dom"

//       id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    //   product_id TEXT,
    //   product_name TEXT,
    //   price NUMERIC,
    //   size NUMERIC,
    //   weight NUMERIC,
    //   talent TEXT,
    //   feature TEXT,
    //   front_url TEXT,
    //   side_url TEXT,
    //   back_URL TEXT
export default function Product({id, product_id, product_name, price, size, weight, talent, feature,  front_url, side_url, back_url}) {
    return (
        <Link to={`/product/${id}`}>
            <div className="product-container">

                <div className="product-image-container">
                    <img src={front_url} className="product-image"  alt="Alternativtext2"/>
                </div>

                <div className="product-name-container">
                    <p className="product-name">{product_name}</p>
                </div>

                <div className="product-description-container">
                    <p className="product-description">{feature}</p>
                </div>
            
                <div className="product-properties-container">
                    <div className='product-properties product-properties-size'>Größe: {size}</div>
                    {/* <div className='product-properties product-properties-color'>Farbe: {color}</div> */}
                    <div className='product-properties product-properties-weight'>Gewicht: {weight}</div>
                </div>
            
                <div className="product-price-container">
                    <div className="product-price">Preis: {price}</div>    
                </div>
            
            </div>
        </Link>
        
    )
}