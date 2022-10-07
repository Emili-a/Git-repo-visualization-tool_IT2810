import React, { useState, useRef } from 'react';
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

type OptionProps = {
  value: string;
  label: string;
}

const Option: React.FC<OptionProps> = ({
  label, value
}) => {
  return <option value={value}>{label}</option>
}

//pas props upp to Parent

function DropdownTagFilter(props: any) {

  const handleChange = (options: any) => {
    /*
      props.setSelectedOptions(options.map((o:any) => (
        <option value={o.value}>{o.label}</option>
      )));
    */


    const choises: any = []
    for (var i of options) {
      choises.push(<Option {...i} />)
    }
    console.log(choises)
    props.setSelectedOptions(choises)

  };

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