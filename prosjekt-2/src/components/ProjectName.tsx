import React, { useState } from "react";
import { useLocalStorage } from '../useLocalStorage';

export const ProjectName = () => {
    const [token, setToken] = useLocalStorage("token", "");
    const [id, setId] = useLocalStorage("id", "");
    const [projectName, setProjectName] = useState<string>("");
    async function getProjectName() {
        const url = "https://gitlab.stud.idi.ntnu.no/api/v4/projects/" + id;
        const response = await fetch(url, { method: 'GET', headers: { "PRIVATE-TOKEN": token } });
        
        const data = await response.json();
        setProjectName(data.name);
    }
    
    getProjectName()

    return (
        <div>
        <h1>{projectName}</h1>
        </div>
    );
    }