import Product from "./Product"

export default function ProductRange() {

    let array = [{name:"A", size:"m"}, {name:"B", size:"L"}]
    

    return (
        <>
            <ul>
                {array.map(item =>(<Product name={item.name} size={item.size}/>))}
            </ul>  
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