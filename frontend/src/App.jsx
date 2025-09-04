import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SortField from './components/SortField'
import Cart from './components/Cart'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

function App() {

  const [headerState, setHeaderState] =  useState(true); 
  const [cartState, setCartState] = useState(false);
  const [profilState, setProfilState] = useState(false);
  const [sortFieldState, setSortFieldState] = useState(true);

  const displayCart = () => {
    setHeaderState(!headerState);
    setSortFieldState(!sortFieldState);
    setCartState(!cartState)
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
        {/* produkt */}


    </>
  )
}
export default App
