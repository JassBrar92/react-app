import { useState } from "react";
interface Props{
  items:string[],
  heading:string,
  onSelectItem:(item:string)=>void
}
function ListGroup({items,heading,onSelectItem}:Props){
  // <></> these brackets represent fragment it is used to return more than one element
  
  const [selectedIndex,setSelectedIndex]=useState(-1);
  
  return (
    <>  
  <h1>{heading}</h1>
  <ul className="list-group">
    {items.length===0 && <p>item not found</p>}
    {items.map((item,index)=><li className={selectedIndex===index
    ?"list-group-item active"
    :"list-group-item"
    } 
    key={item} 
    onClick={()=>{
      setSelectedIndex(index); 
      onSelectItem(item);
    }
    } >{item}</li>)}
</ul>
</>
  );
}

export default ListGroup;