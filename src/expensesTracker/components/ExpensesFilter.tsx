import React from 'react'

interface Props{
  onSelectedCategory:(category:string)=>void;
}
const ExpensesFilter = ({onSelectedCategory}:Props) => {

  return (
    <div>
      <select className="form-select" onChange={(event)=>{onSelectedCategory(event.target.value)}}>
        <option value="">All Categories</option>
        <option value="utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Groceries">Groceries</option>
      </select>
    </div>
  )
}

export default ExpensesFilter