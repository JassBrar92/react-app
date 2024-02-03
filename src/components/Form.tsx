import React, { FormEvent, useRef, useState } from 'react'
import{FieldValues, useForm} from 'react-hook-form'

const Form = () => {
       const {register,handleSubmit,formState:{errors}}=useForm();
       const onSubmit=(data: FieldValues)=>{
        console.log(data);
       }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3"><label htmlFor="name" className="form-label">Name</label>
      <input {...register('name',{required:true,minLength:3})} id='name' type="text" className="form-control" />
      {errors.name?.type==="required"&&<p className='text-danger'>Name is required.</p>}
      {errors.name?.type==="minLength"&&<p className='text-danger'>Name must be atleast 3 characters long</p>}
      </div>
      <div className="mb-3"><label htmlFor="age" className="form-label">Age</label>
      <input {...register('age',{required:true})} 
       id='age' type="number" className="form-control" />
       {errors.age?.type==="required"&&<p className='text-danger'>age is required</p>}
       </div>
      <button className='btn-primary btn'>Submit</button>
    </form>
  )
}

export default Form