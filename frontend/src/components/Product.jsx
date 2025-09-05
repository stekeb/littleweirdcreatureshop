export default function Product({name, size, color, weight, price}) {
    return (
        <div>
            <img src="/images/lion.jpg" width="100" height="100" alt="Alternativtext2"/>
            <p>{name}</p>
            <ul>
                <li>Größe: {size}</li>
                <li>Farbe: {color}</li>
                <li>Gewicht: {weight}</li>
            </ul>
            <span>{price}</span>
        </div>
        
    )
}