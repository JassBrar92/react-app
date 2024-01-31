import React, { FormEvent, useRef } from 'react'

const Form = () => {
  const refName=useRef<HTMLInputElement>(null);
  const refAge=useRef<HTMLInputElement>(null);
  const person={
    name:"",
    age:0
  };
  const handleSubmit=(event:FormEvent)=>{
    event.preventDefault();
    if(refName.current!==null)
    person.name=refName.current.value;
  if(refAge.current!==null)
    person.age=parseInt(refAge.current.value);
    console.log(person);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3"><label htmlFor="name" className="form-label">Name</label>
      <input ref={refName} id='name' type="text" className="form-control" /></div>
      <div className="mb-3"><label htmlFor="age" className="form-label">Age</label>
      <input ref={refAge} id='age' type="number" className="form-control" /></div>
      <button className='btn-primary btn'>Submit</button>
    </form>
  )
}

export default Form