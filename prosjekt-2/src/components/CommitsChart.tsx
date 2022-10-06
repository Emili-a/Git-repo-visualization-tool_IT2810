import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";


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

    function numberOfCommitsByUser() {
        const authors: string[] = [];
        const commitAmount: number[] = [];

        for (let i = 0; i < commits.length; i++) {
            if (authors.includes(commits[i].author_name)) {
                commitAmount[authors.indexOf(commits[i].author_name)]++;
            } else {
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
        // [ { name: 'name1', value: 400 }, { name: 'name2', value: 300 } ]
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
// https://stackoverflow.com/questions/52134350/set-height-and-width-for-responsive-chart-using-recharts-barchart
    return (
        <div className="Pie" style={{ height: "100%", width: '100%'}}>
            <h1>Commits per person</h1>
            <ResponsiveContainer height={410} width="100%">
                <PieChart>
                    <Pie
                        data={numberOfCommitsByUser()}
                        dataKey="value"
                        outerRadius="80%"
                        fill="darkred"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}