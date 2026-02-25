// function Item({name="Bag", isPacked=true}){
//     if (isPacked){
//     return(
//         <div>
//             <li className="item">{name} + ✅</li>
//         </div>
//     );
// }
// else{
//     return( <li className="item">{name} + ❌</li>)
// }
// }

// uisng ternary operator
// function Item({name, isPacked}){
// return(
//     <li>
//         {
//             isPacked ? name + "✅" :name + "❌"
//         }
//     </li>
// )
// }


// using  and operator
function Item({name, isPacked}){
return(
    <li> {name} {isPacked && "✅"}</li>
)
}


export default Item