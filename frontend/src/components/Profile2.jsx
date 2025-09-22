import { useNavigate } from "react-router-dom";

export default function Profile() {

    const navigate = useNavigate();

    return (
        <>
            <input className="login-username">USERNAME</input>
            <input className="login-password">PASSWORD</input>
            <button onClick={ ()=> navigate('/')}>Login</button>
            <button onClick={ ()=> navigate('/')}>Register</button>    
            <button onClick={ ()=> navigate('/')}>back</button>
        </>

    );
}