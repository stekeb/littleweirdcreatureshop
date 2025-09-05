import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SortField from './components/SortField'
import Cart from './components/Cart'
import ProductRange from './components/ProductRange'


function App() {

  const [headerState, setHeaderState] =  useState(true); 
  const [cartState, setCartState] = useState(false);
  const [profilState, setProfilState] = useState(false);
  const [sortFieldState, setSortFieldState] = useState(true);
  const [productRangeState, setProductRangeState] = useState(true);

  const displayCart = () => {
    setHeaderState(!headerState);
    setSortFieldState(!sortFieldState);
    setCartState(!cartState);
    setProductRangeState(!productRangeState)
  }

  return (
    <>
     
      {headerState && <Header displayCart={displayCart}/>}
        {/* warenkorb */}
      {cartState && <Cart />}
        {/* profil */}
      {profilState && <Profil />}
      {/* filter */}
      {sortFieldState && <SortField />}
      {/* sortiment */}
      {productRangeState && <ProductRange className="product" id="prod" />}
        {/* produkt */}


    </>
  )
}
export default App
