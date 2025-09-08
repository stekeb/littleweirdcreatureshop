import Product from "./Product"
import './productRange.css'

export default function ProductRange() {

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
        <div className="range-container">
                {array.map(item =>(<Product key={item.id} name={item.name} description={item.description} size={item.size} price={item.price}/>))}
        </div>
    )
}
