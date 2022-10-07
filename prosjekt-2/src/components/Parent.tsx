import React, { useState } from 'react';
import DropdownTagFilter from "./DropdownTagFilter";


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

function Parent() {


    return (
        <div >
            <DropdownTagFilter filterOptions={options} />
        </div>
    )
}

export default Parent
