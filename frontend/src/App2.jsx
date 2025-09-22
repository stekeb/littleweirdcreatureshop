
import './App.css'
import StandardView2 from './components/StandardView2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile2 from './components/Profile2'
import Cart2 from './components/Cart2'
import ProductDetail from './components/ProductDetail'
import { useState, useEffect } from 'react'

const getAllData = async() => {
    const response = await fetch(`http://localhost:3000/`, {
		method: 'GET',
	});
	const data = await response.json();
	return data;
}

function App() {

const [allData, setAllData] = useState([]);
const [workingData, setWorkingData] = useState([]);

useEffect(() => {
	try {
		getAllData().then((files) => {
			setAllData(files);
            setWorkingData(files)
		});
	} catch (error) {
		console.error(err);
	}
}, []);




            
            
        
    

    let array = [
        {id:0, name:"A", description:"lecker schads schads schads schads schads schads schads schads schads schads schads schads schads schads schads", size:"m", price:259.95}, 
        {id:1, name:"B", description:"madig madig", size:"L", price:689.95},
        {id:2, name:"A", description:"lecker schm", size:"m", price:259.95}, 
        {id:3, name:"B", description:"madig madig", size:"L", price:689.95},        
        {id:4, name:"A", description:"lecker schmecker", size:"m", price:259.95}, 
        {id:5, name:"B", description:"madig madig", size:"L", price:689.95},        
        {id:6, name:"A", description:"lecker schmecker", size:"m", price:259.95}, 
        {id:7, name:"B", description:"madig madig", size:"L", price:689.95},        
        {id:8, name:"A", description:"lecker schmecker", size:"m", price:259.95}, 
        {id:9, name:"B", description:"madig madig", size:"L", price:689.95},        
        {id:10, name:"A", description:"lecker schmecker", size:"m", price:259.95}, 
        {id:11, name:"B", description:"madig madig", size:"L", price:689.95},       
        {id:12, name:"A", description:"lecker schmecker", size:"m", price:259.95}, 
        {id:13, name:"B", description:"madig madig", size:"L", price:689.95},        
        {id:14, name:"A", description:"lecker schmecker", size:"m", price:259.95}, 
        {id:15, name:"B", description:"madig madig", size:"L", price:689.95},        
        {id:16, name:"A", description:"lecker schmecker", size:"m", price:259.95}, 
        {id:17, name:"B", description:"madig madig", size:"L", price:689.95},        
        {id:18, name:"A", description:"lecker schmecker", size:"m", price:259.95}, 
        {id:19, name:"B", description:"madig madig", size:"L", price:689.95},        
        {id:20, name:"A", description:"lecker schmecker", size:"m", price:259.95}, 
        {id:21, name:"B", description:"madig madig", size:"L", price:689.95},
    ]



  return (
  
        <Routes> 
            <Route path='/' element={<StandardView2 array={workingData} />} />
            <Route path='/profile' element={<Profile2 />} />
            <Route path='/cart' element={<Cart2 />} />
            <Route path='/product/:id' element={<ProductDetail array={allData}/>} />
        </Routes>



  )
}
export default App
