import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { BsCalendar2DayFill } from "react-icons/bs";
import Like from "./components/Like";
import Message from "./components/message";
//import  './App.css';
function App(){
  return (<div><Message/></div>);
  //return <Like onClick={()=>console.log('clicked')}/>
  //return <Button onClick={()=>{}}>Submit</Button>
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
   //return <BsCalendar2DayFill color="red" size={40}/>
};
export default App;