import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SortField from './components/SortField'
import Cart from './components/Cart'
import ProductRange from './components/ProductRange'
import Profile from './components/Profile'


function App() {

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
export default App
