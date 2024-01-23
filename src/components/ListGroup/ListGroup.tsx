import { useState } from "react";
import  './ListGroup.css'
import styled  from "styled-components";
interface Props{
  items:string[],
  heading:string,
  onSelectItem:(item:string)=>void
}
interface ListItemProps{
  active:boolean
}
const List=styled.ul`
list-style: none;
padding: 0px;
`
const ListItem=styled.li<ListItemProps>`
padding:5px 0;
background:${props=>props.active? 'blue':'none'}
`
function ListGroup({items,heading,onSelectItem}:Props){
  // <></> these brackets represent fragment it is used to return more than one element
  const [selectedIndex,setSelectedIndex]=useState(0);
  
  return (
    <>  
  <h1>{heading}</h1>
  <List>
    {items.length===0 && <p>item not found</p>}
    {items.map((item,index)=><ListItem
    active={index===selectedIndex}
    key={item} 
    onClick={()=>{
      setSelectedIndex(index); 
      onSelectItem(item);
    }
    } >{item}</ListItem>)}
</List>
</>
  );
}

export default ListGroup;