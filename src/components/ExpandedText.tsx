import React, { useState } from 'react'
interface Props{
  children:string
  maxLength?:number
}
const ExpandedText = ({children,maxLength=50}:Props) => {
  const [isExpanded,setExpandable]=useState(false);
  if(children.length<=maxLength) return <p>{children}</p>
  const text=isExpanded?children:children.substring(0,maxLength);
  return (
    <>    
    <p>{text}...</p>
    <button onClick={()=>setExpandable(!isExpanded)}>{isExpanded?'Less':'More'}</button>
    </>

  )
}

export default ExpandedText