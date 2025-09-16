import './Header.css'

  export default function Header({displayProfile, displayCart}) {
  return (
    <div className="header-container">

      <div className="header-logo-container">
        <img className="header-logo" src="/images/logo_04.svg" />
      </div>

      <div className="header-title-container">
        <div className='header-title'>LittleWeirdCreatureClub</div>
      </div>

      <div className="header-button-container">
        <button className="HeaderButton" onClick={()=>{displayProfile()}}>Profil</button>
        <button className="HeaderButton" onClick={()=>{displayCart()}} >Warenkorb</button>
      </div>
    </div>
  );
}