import React, { useState } from 'react';
import Api from "../Api";


// Desired behaviour
// ta inn en array med options
// vis opptions i en dropdown meny
// lagre og ha mulighet for exportere valge options

const options = [
    { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "blue", label: "Blue" },
  { value: "white", label: "White" }
];
// Usefull links to enable mutiple select
//https://yogeshchauhan.com/how-to-select-multiple-values-in-react-dropdown/
//https://sebhastian.com/handlechange-react/
//https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react

// event.target gives new value
function DropdownTagFilter() {
    const [selected, setSelected] = useState([] as any);    
    const handleChange = (event:any) => {
        let value = Array.from(
            event.target.selectedOptions,
            (option:any) => option.value
          );
        setSelected( {options:value});
        console.log(selected)
      };
      // sets selected afer update

    return (
        <div >
            <select 
            multiple 
            onChange={handleChange}>
            value= {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>
        </div>
    )
}

export default DropdownTagFilter