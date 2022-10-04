import React, { Component } from 'react';
import Api from "../Api";

/*
let commit: [title, string, string] = [
    title: 'titletest',
    message: 'messagetest',
    author: 'authortest'
]
let commits = [commit];

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
*/

//const commit:string[] = ['1', 'hei', 'e'] // title, message, author


//interface for commit seems smart
const commits = [
    ['1', 'hei', 'e'],  // title, message, author
    ['2', 'hei', 't'],
    ['3', 'hei', 'm'],
    ['4', 'hei', 'p'],
    ['5', 'hei', 'e']]

let allTags:String[];
let choosenTags = ['e', 't'];

function addChoosenTags() {

}

function findAutoursCommits(choosenTags: string[], commits: string[][]) {
    let commitList: string = '';
    for (var i of choosenTags) {
        for (var j of commits) {
            if (i === j[2]) {
                commitList = `${commitList} \ntitle: ${j[0]}, message: ${j[1]}, author: ${j[2]}`;
            }
        }
    }
    return commitList;
}


function NewlineText(props: any) {
    const text = props.text;
    const newText = text.split('\n').map((str: string | number | boolean | React.ReactElement<any, string | React.
            JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => <p>{str}</p>);
    
    return newText;
  }

function DropdownTagFilter() {

    return (
        <div >
            <h2> <NewlineText text={findAutoursCommits(choosenTags, commits)} /></h2>;
        </div>
    )
}

export default DropdownTagFilter
