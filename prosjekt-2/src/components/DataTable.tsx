import React, { useState } from 'react';
import Api from "../Api";
import DropdownTagFilter from "./DropdownTagFilter";


// needs a state for current table that can be updated externally
// data table and Dropdown filterTag both use props with optins and data from api?

const commits = [
    ['1', 'hei', 'Strawberry'],  // title, message, author
    ['2', 'hei', 'Strawberry'],
    ['3', 'hei', 'Chocolate'],
    ['4', 'hei', 'Vanilla'],
    ['5', 'hei', 'Vanilla']]

//let choosenTags = ['e', 't'];

function findFilteredData(choosenTags: String[], data: String[][]) {
    let dataList: String = '';
    for (var i of choosenTags) {
        for (var j of data) {
            if (i === j[2]) {
                dataList = `${dataList} \ntitle: ${j[0]}, message: ${j[1]}, author: ${j[2]}`;
            }
        }
    }
    return dataList;
}

// https://forum.freecodecamp.org/t/newline-in-react-string-solved/68484

function NewlineText(props: any) {
    const text = props.text;
    const newText = text.split('\n').map((str: string | number | boolean | React.ReactElement<any, string | React.
        JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => <p>{str}</p>);

    return newText;
}



function DataTable(props:any) {
    const filters String[]= props.filters[1]
    return (
        <div >
            <h2>{props.filters}</h2>
            <h2> <NewlineText text={findFilteredData((props.filters), commits)} /></h2>;
        </div>
    )
}

export default DataTable
