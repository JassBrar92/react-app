import { useState } from "react";
import Alert from "./components/Alert";
//import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { BsCalendar2DayFill } from "react-icons/bs";
import Like from "./components/Like";
import Message from "./components/Message";
import produce from "immer";
//import  './App.css';
function App(){
  const [bugs,setBug]=useState(
    [
      {id:1,title:"Bug1",fixed:false},
      {id:2,title:"Bug2",fixed:false}
    ]
    );
  const handleClick=()=>{
    //setBug(bugs.map(bug=>bug.id===1?{...bug,fixed:true}:bug));
    //console.log(bugs);
    setBug(produce(draft=>{
      const bug=draft.find(bugs=>bugs.id===1);
      if(bug) bug.fixed=true;
    }));
  }
  return(<div>
    {bugs.map(bug=><p key={bug.id}>
     {bug.title} {bug.fixed? 'fixed':'New'}
    </p>)}
    <button onClick={handleClick}>Button</button>
  </div>)
  /*const [tags,setTags]=useState(["happy","Cheerful"]);
  const handleClick=()=>{
    //Add
    //setTags([...tags,"exciting"]);
    //remove
    setTags(tags.filter(tag=>tag!=="happy"));
    //
    //setTags(tags.map(tag=>tag==="happy"?"happiness":tag));
  }
  return(
    <div>
      {tags}
      <button onClick={handleClick}>Button</button>
    </div>
  );*/
   /*const [customer,setCustomer]=useState({
    name:"Jas",
    address:{
      city:"Moga",
      zipCode:1123
    }
   });
   const  handleClick=()=>{
    setCustomer({...customer,
      address:{...customer.address,zipCode:3456}
    });
   };
   return(<div>
    {customer.address.zipCode},
    <button onClick={handleClick}>Button</button>
   </div>);*/
  /*const[drink,setDrink]=useState({
    title:"Coke",
    price:5
  });
  const handleClick=()=>{
  setDrink({...drink,price:6})
  }
  return(<div>
    {drink.price}
   <button onClick={handleClick}>Button</button>
  </div>);*/
  //return (<div><Message/></div>);
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