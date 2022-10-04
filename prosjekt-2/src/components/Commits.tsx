
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const token = "glpat-Wt--zzBda12_5e612yx2"
const api = axios.create({
    baseURL: "https://gitlab.stud.idi.ntnu.no/api/v4/projects/17584/repository/commits/"
  //   /repository/branches/
})

interface ICommit {
    id: string;
    title: string;
    author_name: string;
  }

const defaultCommits:ICommit[] = [];

export const Commits = () => {
    const [commits, setCommits]: [ICommit[], (commits: ICommit[]) => void] = React.useState(defaultCommits);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = React.useState("");
    


    useEffect(() => {
        // api.get('/', { headers: {"Authorization" : `Bearer glpat-Wt--zzBda12_5e612yx2`}}).then(res => {
        //     console.log(res.data)
        //     const data = res.data;
        //     setBranches({data})
        // });

        api.get<ICommit[]>("/", { 
            headers: {
                "Authorization" : `Bearer glpat-Wt--zzBda12_5e612yx2`
            },
        }).then(response => {
            setCommits(response.data);
            setLoading(false);
          }).catch(ex => {
            const error =
            ex.response.status === 404
              ? "Resource Not found"
              : "An unexpected error has occurred";
            setError(error);
            setLoading(false);
          });
    }, []); 

    return (
        <div>
         <ul className="commits">
           {commits.map((commit) => (
            <li key={commit.id}>
             <h3>{commit.title}</h3>
             <p>{commit.author_name}</p>
            </li>
          ))}
         </ul>
         {error && <p className="error">{error}</p>}
       </div>
       );
    }
  



