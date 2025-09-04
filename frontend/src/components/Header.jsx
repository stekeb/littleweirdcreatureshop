//   function Header() {
//     return (
//       <>
//         <span>Cibaria Civis</span>
//         <span>
//           <button className="HeaderButton">Account</button>
//           <button className="HeaderButton">Warenkorb</button>
//         </span>
//       </>
//     )  
//   }

  export default function Header({displayCart}) {
  return (
    <div className="header">
      <span>Cibaria Civis</span>
      <button className="HeaderButton">Profil</button>
      <button className="HeaderButton" onClick={()=>{displayCart()}} >Warenkorb</button>
    </div>
  );
}