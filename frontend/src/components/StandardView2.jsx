import { useNavigate } from "react-router-dom"
import Header2 from './Header2.jsx'
import ProductRange from "./ProductRange.jsx";
import SortField from "./SortField.jsx";

export default function StandardView2({array}) {
    const navigate = useNavigate();
    return (
        <div>
            <Header2 />
            {/* // sortField-Komponente anzeigen */}
            <SortField />
            <ProductRange array={array}/>
        </div>
    )
}