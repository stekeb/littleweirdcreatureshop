import Product from "./Product"

export default function ProductRange() {

    let array = [{id:0, name:"A", size:"m", price:259.95}, {id:1, name:"B", size:"L", price:689.95}]
    

    return (
        <>
                 <div id="prod">TESTSTSTSTS</div>
                {array.map(item =>(<Product id="prod"  className="product" key={item.id} name={item.name} size={item.size} price={item.price}/>))}
              
        </>
    )
}


// function PersonList() {
//   return (
//     <ul>
//       {persons.map(person => (
//         <Person key={person.id} name={person.name} age={person.age} />
//       ))}
//     </ul>
//   );
// }

// function Person({ name, age }) {
//   return <li>{name} ({age} Jahre)</li>;
// }