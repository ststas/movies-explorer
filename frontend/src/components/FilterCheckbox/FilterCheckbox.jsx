import Input from "../Reusable/Input/Input";

function FilterCheckbox ({labelName, filterChecked, setFilterChecked}) {

  return (
    <div className="filter-checkbox">
      <div className={`filter-checkbox__container ${filterChecked? "filter-checkbox__container_checked" : ""}`}>
        <Input
          type={'checkbox'}
          inputClassName={'filter-checkbox__input'}
          checked={filterChecked}
          onChange={setFilterChecked}
        /> 
      <span className={`filter-checkbox__ball ${filterChecked ? "filter-checkbox__ball_checked" : ""}`}></span>    
      </div>
      <label className="filter-checkbox__label">{labelName}</label>
      
    </div>
  )
}

export default FilterCheckbox;