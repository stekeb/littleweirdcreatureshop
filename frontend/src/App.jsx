// import { useState } from 'react'
import './App.css'
// import Header from './components/Header'
// import SortField from './components/SortField'
// import Cart from './components/Cart'
// import ProductRange from './components/ProductRange'
// import Profile from './components/Profile'
import StandardView from './components/StandardView'
// import StandardView2 from './components/StandardView2'


function App() {

  // const [headerState, setHeaderState] =  useState(true); 
  // const [cartState, setCartState] = useState(false);
  // const [profileState, setProfileState] = useState(false);
  // const [sortFieldState, setSortFieldState] = useState(true);
  // const [productRangeState, setProductRangeState] = useState(true);

  // const displayCart = () => {
  //   setHeaderState(!headerState);
  //   setSortFieldState(!sortFieldState);
  //   setCartState(!cartState);
  //   setProductRangeState(!productRangeState)
  // }

  // const displayProfile = () => {
  //   setHeaderState(!headerState);
  //   setSortFieldState(!sortFieldState);
  //   setProfileState(!profileState);
  //   setProductRangeState(!productRangeState)
  // }

  return (
    // <>
    //   {true && <StandardView />}
    // </>
    
    // <div className="global-container">
     
    //   {headerState && <Header displayCart={displayCart} displayProfile={displayProfile}/>}
    //     {/* warenkorb */}
    //   {cartState && <Cart />}
    //     {/* profil */}
    //   {profileState && <Profile />}
    //   {/* filter */}
    //   {sortFieldState && <SortField />}
    //   {/* sortiment */}
    //   {productRangeState && <ProductRange />}
    //     {/* produkt */}


    // </div>


    <div>
      <StandardView />
    </div>
  )
}
export default App
