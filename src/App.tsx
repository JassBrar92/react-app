import Button from "./components/Button";
function App(){
  return <Button color="primary" onClick={()=>console.log("Button clicked")}>
    Hello
  </Button>
  }

export default App;