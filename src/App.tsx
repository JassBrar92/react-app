import ListGroup from './components/ListGroup'
let items=[
  "Mango",
  "Apple",
  "Orange",
  "Banana",
  "Grapes"
];
const handleSelectItem=(item:string)=>{
  console.log(item)
}
function App(){
  return <h1><ListGroup items={items} heading='Fruits' onSelectItem={(handleSelectItem)} /></h1>
}

export default App;