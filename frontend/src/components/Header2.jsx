import { useNavigate } from 'react-router-dom';
import './Header.css'

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="header-container">

            <div className="header-logo-container">
               {/* <img className="header-logo" src="/images/svg_01_bw.svg" /> */}


                <img src="/images/svg_02_bw.svg" alt="a" className="image image1" />
                <img src="/images/svg_02_re.svg" alt="b" className="image image2" />

            
            </div>

            <div className="header-title-container">
                <div className='header-title'>LittleWeirdCreatureClub</div>
                <h2 className='header-subtitle'>Welcome to our Creature Shop - Discover a world of magical creatures</h2>
            </div>

            <div className="header-button-container">
                <button className="HeaderButton" onClick={ ()=>navigate('/profile')}>Profil</button>
                <button className="HeaderButton" onClick={ ()=>navigate('/cart')} >Warenkorb</button>
            </div>
        </div>
    );
}