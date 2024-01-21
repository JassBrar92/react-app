import ListGroup from './components/ListGroup'
let items=[
  "Mango",
  "Apple",
  "Orange",
  "Banana",
  "Grapes"
];
function App(){
  return <h1><ListGroup items={items} heading='Fruits'/></h1>
}

export default App;