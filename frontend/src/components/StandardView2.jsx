import { useNavigate } from "react-router-dom"
import Header2 from './Header2.jsx'
import ProductRange from "./ProductRange.jsx";

export default function StandardView2({array}) {
    const navigate = useNavigate();
    return (
        <div>
            <Header2 />

            <ProductRange array={array}/>

        </div>
    )
}