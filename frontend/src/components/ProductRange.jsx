import Product from "./Product"
import './productRange.css'

export default function ProductRange({array}) {

    return (
        <div className="range-container">
                {array.map(item =>(
                    <Product 
                        id={item.id}
                        product_id={item.product_id}
                        product_name={item.product_name}
                        price={item.price}
                        key={item.id} 
                        name={item.name} 
                        description={item.description} 
                        size={item.size} 
                        weight={item.weight}
                        talent={item.talent}
                        feature={item.feature}
                        front_url={item.front_url}
                        side_url={item.side_url}
                        back_url={item.back_url}
                    />
                ))}
        </div>
    )
}
