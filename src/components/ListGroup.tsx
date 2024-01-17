import { useState } from "react";

function ListGroup(){
  // <></> these brackets represent fragment it is used to return more than one element
  let items=[
    "Mango",
    "Apple",
    "Orange",
    "Banana"
  ];
  const [selectedIndex,setSelectedIndex]=useState(-1);
  
  return (
    <>  
  <h1>Fruits</h1>
  <ul className="list-group">
    {items.length===0 && <p>item not found</p>}
    {items.map((item,index)=><li className={selectedIndex===index
    ?"list-group-item active"
    :"list-group-item"
    } key={item} onClick={()=>setSelectedIndex(index)}>{item}</li>)}
</ul>
</>
  );
}

export default ListGroup;