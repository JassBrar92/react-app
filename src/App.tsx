import Alert from "./components/Alert";
let items=[
  "Mango",
  "Apple",
  "Orange",
  "Banana",
  "Grapes"
];
const handleSelectItem=(item:string)=>{
  console.log(item);
}
function App(){
  return <Alert text="hello world"/>
  }

export default App;