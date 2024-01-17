import { MouseEvent } from "react";
function ListGroup(){
  // <></> these brackets represent fragment it is used to return more than one element
  let items=[
    "Mango",
    "Apple",
    "Orange",
    "Banana"
  ];
  //items=[];
 const handleClick=(event : MouseEvent)=>{
    console.log(event);
  }
  return (
    <>  
  <h1>Fruits</h1>
  <ul className="list-group">
    {items.length===0 && <p>item not found</p>}
    {items.map(item=><li className="list-group-item" key={item} onClick={handleClick}>{item}</li>)}
</ul>
</>
  );
}

export default ListGroup;