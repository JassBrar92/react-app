function ListGroup(){
  // <></> these brackets represent fragment it is used to return more than one element
  let items=[
    "Mango",
    "Apple",
    "Orange",
    "Banana"
  ];
  items=[];
  return (
    <>  
  <h1>Fruits</h1>
  <ul className="list-group">
    {items.length===0 && <p>item not found</p>}
    {items.map(item=><li key={item}>{item}</li>)}
</ul>
</>
  );
}

export default ListGroup;