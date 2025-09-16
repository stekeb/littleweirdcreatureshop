import { useState } from 'react'
// import './App.css'
// import Header from 'C:/Users/j_wie/Desktop/littleweirdcreatureshop/frontend/src/components/Header.jsx'
import Header from './Header.jsx'
import SortField from './SortField'
import Cart from './Cart'
import ProductRange from './ProductRange'
import Profile from './Profile'
// import StandardView from './components/StandardView'
 
 


      const [headerState, setHeaderState] =  useState(true); 
      const [cartState, setCartState] = useState(false);
      const [profileState, setProfileState] = useState(false);
      const [sortFieldState, setSortFieldState] = useState(true);
      const [productRangeState, setProductRangeState] = useState(true);
    
      const displayCart = () => {
        setHeaderState(!headerState);
        setSortFieldState(!sortFieldState);
        setCartState(!cartState);
        setProductRangeState(!productRangeState)
      }
    
      const displayProfile = () => {
        setHeaderState(!headerState);
        setSortFieldState(!sortFieldState);
        setProfileState(!profileState);
        setProductRangeState(!productRangeState)
      }
 
 export default function StandardView() {




    return (
        <div className="global-container">
     
            {headerState && <Header displayCart={displayCart} displayProfile={displayProfile}/>}
            {/* warenkorb */}
            {cartState && <Cart />}
            {/* profil */}
            {profileState && <Profile />}
            {/* filter */}
            {sortFieldState && <SortField />}
            {/* sortiment */}
            {productRangeState && <ProductRange />}
            {/* produkt */}


         </div>
    )
 } 
   
   
