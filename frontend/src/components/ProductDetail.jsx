
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function ProductDetail({array}) {

    const navigate= useNavigate()

    const { id } = useParams()
    const product = array.find(p => String(p.id) === String(id))

    if (!product) {
        return <div>Produkt nicht gefunden...</div>
    }

    return (
        <>
            <div className="image-container">
                <img src =""/>
                
            </div>

            <div className="description-container">
                <p>

                </p>
            </div>

            <div className="price">
                Preis: <p>{product.price}</p>
            </div>

            <button>
                kaufen
            </button>

            <button onClick={ ()=> navigate('/')}>back</button>

        </>
    )
}