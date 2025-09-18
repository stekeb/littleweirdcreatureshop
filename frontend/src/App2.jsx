
import './App.css'
import StandardView2 from './components/StandardView2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile2 from './components/Profile2'
import Cart2 from './components/Cart2'


function App() {



  return (
  
        <Routes> 
            <Route path='/' element={<StandardView2 />} />
            <Route path='/profile' element={<Profile2 />} />
            <Route path='/cart' element={<Cart2 />} />
        </Routes>



  )
}
export default App
