import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { PieChart, Pie, Tooltip } from "recharts";


const api = axios.create({
    baseURL: "https://gitlab.stud.idi.ntnu.no/api/v4/projects/"
})

interface PieChartInfo {
    authors: string[];
    commits: number[];
}

interface ICommit {
  id: string;
  title: string;
  author_name: string;
}

const defaultCommits:ICommit[] = [];

export const Chart = () => {
    const [commits, setCommits]: [ICommit[], (commits: ICommit[]) => void] = React.useState(defaultCommits);
    const [token, setToken] = useLocalStorage("token", "");
    const [id, setId] = useLocalStorage("id", "");
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = React.useState("");

    function countCommitsPer() {
        const ICommitLength = commits.length;
        const authors: string[] = [];
        const commitAmount: number[] = [];

        for (let i = 0; i < ICommitLength; i++) {
            if (authors.includes(commits[i].author_name)) {
            commitAmount[authors.indexOf(commits[i].author_name)]++;
        }
        if (!(authors.includes(commits[i].author_name))) {
            authors.push(commits[i].author_name);
            commitAmount.push(1);
        }
      }
        const pieChartInfo: PieChartInfo = {
            authors: authors,
            commits: commitAmount,
        }

        const data = [];
        for (let i = 0; i < pieChartInfo.authors.length; i++) {
            data.push({ name: pieChartInfo.authors[i], value: pieChartInfo.commits[i] });
        }
        console.log(data);

    return data;
    }
    
    useEffect(() => {
        var repoId = "/" + id + "/repository/commits";
        var bearerToken = "Bearer " + token;
        api.get<ICommit[]>(repoId, { 
            headers: {
                "Authorization" : bearerToken
            },
        }).then((response: { data: ICommit[]; }) => {
            setCommits(response.data);
            setLoading(false);
          }).catch((ex: { response: { status: number; }; }) => {
            const error =
            ex.response.status === 404
              ? "Resource Not found"
              : "An unexpected error has occurred";
            setError(error);
            setLoading(false);
          });
    }, []);

    return (
        <div className="Pie">
            <h1>Chart</h1>
            <PieChart>
                <Pie
                data={countCommitsPer()}
                dataKey="value"
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
                />
                <Tooltip />
            </PieChart>
        </div>
    );
}