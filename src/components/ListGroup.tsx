function ListGroup(){
  // <></> these brackets represent fragment it is used to return more than one element
  const items=[
    "Mango",
    "Apple",
    "Orange",
    "Banana"
  ]
  return (
    <>  
  <h1>Fruits</h1>
  <ul className="list-group">
    {items.map(item=><li key={item}>{item}</li>)}
</ul>
</>
  );
}

export default ListGroup;