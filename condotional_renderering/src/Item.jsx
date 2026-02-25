function Item({name="Bag", isPacked=true}){
    if (isPacked){
    return(
        <div>
            <li className="item">{name} + ✅</li>
        </div>
    );
}
else{
    return( <li className="item">{name} + ❌</li>)
}
}

export default Item