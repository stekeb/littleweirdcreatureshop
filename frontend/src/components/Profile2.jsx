import { useNavigate } from "react-router-dom";

export default function Profile() {

    const navigate = useNavigate();

    return (
        <>
            <button onClick={ ()=> navigate('/')}>Login</button>
            <button onClick={ ()=> navigate('/')}>Register</button>    
            <button onClick={ ()=> navigate('/')}>back</button>
        </>

    );
}