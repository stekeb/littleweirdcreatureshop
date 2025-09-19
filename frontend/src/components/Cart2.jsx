import { useNavigate } from "react-router-dom";

export default function Cart() {

    const navigate = useNavigate();

    return (
        <button onClick={ ()=> navigate('/')}>back</button>
    );
}