import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";

const api = axios.create({
    baseURL: "https://gitlab.stud.idi.ntnu.no/api/v4/projects/"
})

interface ICommit {
    id: string;
    title: string;
    author_name: string;
}

const defaultCommits: ICommit[] = [];

export const Authors = () => {
    const [commits, setCommits]: [ICommit[], (commits: ICommit[]) => void] = React.useState(defaultCommits);
    const [token, setToken] = useLocalStorage("token", "");
    const [id, setId] = useLocalStorage("id", "");
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = React.useState("");

    function listOfAuthors() {
        const authors: string[] = [];

        for (let i = 0; i < commits.length; i++) {
            if (!authors.includes(commits[i].author_name)) {
                authors.push(commits[i].author_name);
            }
        }
        const data = [];
        for (let x = 0; x < authors.length; x++) {
            data.push({ value: authors[x], label: authors[x] })
        }
        return data;
    }

    useEffect(() => {
        var repoId = "/" + id + "/repository/commits";
        var bearerToken = "Bearer " + token;
        api.get<ICommit[]>(repoId, {
            headers: {
                "Authorization": bearerToken
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
    return listOfAuthors();
};

