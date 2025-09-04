export default function Product({name, size, color, weight}) {
    return (
        <>
            <img src="lion.jpg" width="100" height="100" alt="Alternativtext"/>
            <p>{name}</p>
            <ul>
                <li>Größe: {size}</li>
                <li>Farbe: {color}</li>
                <li>Gewicht: {weight}</li>
            </ul>
            <span></span>
        </>
        
    )
}