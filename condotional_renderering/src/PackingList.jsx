import Item from "./Item";
function PackingList(...props){
    return(
        <div>
            <h1>Packing List</h1>
            <ul>
                {/* <Item  /> */}
                <Item name="Towel" isPacked={false} />
                <Item name="Water" isPacked={true} />
                <Item name="Shoes" isPacked={false} />
            </ul>
        </div>
    );
}

export default PackingList;