import {categories} from '../../App';
interface Props{
  onSelectedCategory:(category:string)=>void;
}
const ExpensesFilter = ({onSelectedCategory}:Props) => {

  return (
    <div>
      <select className="form-select" onChange={(event)=>{onSelectedCategory(event.target.value)}}>
        <option value="">All Categories</option>
        {categories.map(category=><option key={category} value={category}>{category}</option>)}
      </select>
    </div>
  )
}

export default ExpensesFilter