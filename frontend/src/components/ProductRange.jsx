import Product from "./Product"
import './productRange.css'

export default function ProductRange({array}) {

    return (
        <div className="range-container">
                {array.map(item =>(
                    <Product 
                        id={item.id}
                        key={item.id} 
                        name={item.name} 
                        description={item.description} 
                        size={item.size} 
                        price={item.price}
                    />
                ))}
        </div>
    )
}
