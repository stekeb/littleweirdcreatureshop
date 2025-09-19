
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function ProductDetail({array}) {

    //   id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
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