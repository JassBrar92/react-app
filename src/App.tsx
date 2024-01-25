import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsCalendar2DayFill } from "react-icons/bs";
//import  './App.css';
function App(){
  /*const [alertVisible,setAlertVisibility]=useState(false);
  return(
  <div>
  {alertVisible&&<Alert onClose={()=>setAlertVisibility(false)}>Alert</Alert>}
  <Button color="primary" onClick={()=>setAlertVisibility(true)}>
    Hello
  </Button>
  </div>
  )*/
  //const items=["Apple","Banana","Grapes","Orange"]
  //return <div><ListGroup heading="Fruits"items={items} onSelectItem={()=>{}}/></div>
   return <BsCalendar2DayFill color="red" size={40}/>
};
export default App;