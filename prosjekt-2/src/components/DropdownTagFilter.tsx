import React, { useState } from 'react';
import Select from 'react-select'

//https://react-select.com/home
// Desired behaviour
// ta inn en array med options
// vis opptions i en dropdown meny
// lagre og ha mulighet for exportere valge options

/*interface Options {
  value: String
  label: String
}
*/

/*
const options: Option[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
*/

//pas props upp to Parent

function DropdownTagFilter(props: any) {
  //const [selectedOptions, setSelectedOptions] = useState([]);


  const handleChange = (options: any) => {
    props.setSelectedOptions(options.map((o:any) => (
      <option value={o.value}>{o.label}</option>
    )));
  };

  //console.log(selectedOptions)


  return (
    <div >
      <Select
        defaultValue={props.filterOptions}
        isMulti
        name={props.filterName} //make this flexible later
        options={props.filterOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder={props.filterName}
        onChange={handleChange}
      />
    </div>

  )
}

export default DropdownTagFilter