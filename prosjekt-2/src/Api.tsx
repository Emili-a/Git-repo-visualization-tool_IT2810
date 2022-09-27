import React, { Component, useState } from 'react';
import axios from 'axios';
import { countReset } from 'console';

const api = axios.create({
  baseURL: "https://gitlab.stud.idi.ntnu.no/api/v4/projects/17584/"
//   /repository/branches/
})

// const [data, setData] = useState<any[]>([]);

export default class Api extends Component {

// Endre dette til AJAX fetch

  state = {
    branches: [],
    issues: []
  }

  constructor(props: {} | Readonly<{}>){
    super(props);
    api.get('/repository/branches/', { headers: {"Authorization" : `Bearer glpat-Wt--zzBda12_5e612yx2`} 
      
    }).then(res => {
      console.log(res.data)
      this.setState({branches: res.data})
    })
    api.get('/issues/', { headers: {"Authorization" : `Bearer glpat-Wt--zzBda12_5e612yx2`} 
      
    }).then(res => {
      console.log(res.data)
      this.setState({issues: res.data})
    })

  }
  render() {
    return <div>
        <h1>BRANCHES</h1>
        {this.state.branches.map(branch => <h2 key={branch['id']}>{branch['name']} </h2>)}
        <h1>ISSUES</h1>
        {this.state.issues.map(issue => <h2 key={issue['id']}>{issue['title']} </h2>)}

    </div>
  }
}


