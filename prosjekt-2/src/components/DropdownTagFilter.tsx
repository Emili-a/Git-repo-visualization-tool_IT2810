import React from 'react';
import Select from 'react-select'

type OptionProps = {
  value: string;
  label: string;
}

const Option: React.FC<OptionProps> = ({
  label, value
}) => {
  return <option value={value}>{label}</option>
}

function DropdownTagFilter(props: any) {

  const handleChange = (options: any) => {
    const choises: any = []
    for (var i of options) {
      choises.push(<Option {...i} />)
    }
    props.setSelectedOptions(choises)

  };
  //https://react-select.com/home
  return (
    <div >
      <Select
        defaultValue={null}
        isMulti
        name={props.filterName}
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