import React, { useState } from 'react';
import DropdownTagFilter from '../components/DropdownTagFilter';
import DataTable from '../components/DataTable'
import '../styles/repoVisualsPage.css';
import Api from '../Api'
import { Commits } from '../components/Commits';
import { Issues } from '../components/Issues';
import { LogOut } from '../components/LogOut';
import { Chart } from '../components/CommitsChart';

const options = [
    { value: 'philiptinius', label: 'philiptinius' },
    { value: 'emilima', label: 'emilima' },
    { value: 'Philip Tinius Hansen Crome', label: 'Philip Tinius Hansen Crome' }
]


const VisualizationPage = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <div className='PageWrapper'>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <body>
                <div className='header'>
                    {<LogOut />}
                    <h1>
                        Reponavn
                    </h1>
                    <hr />
                </ div>
                <main className="row">
                    <div className="sectWrapper">
                        <div className="col-12">
                            <div className="filters">
                                <DropdownTagFilter setSelectedOptions={setSelectedOptions} filterOptions={options} filterName="Author" />
                            </div>
                            <hr />
                        </div>
                        <div className="col-6">
                            <section className="sect1">
                                {<Commits filters={selectedOptions}/>}
                            </section>
                        </div>
                        <div className="col-6">
                            <section className="sect2">
                                {<Chart />}
                            </section>
                        </div>
                        <hr />
                    </div>
                    <div className="sectWrapper">
                        <div className="col-12">
                            <h2>Issues</h2>

                            <hr />
                        </div>
                        <div className="col-12">
                            <section className="sect1">
                                {<Issues />}
                            </section>
                        </div>
                    </div>
                </main>
            </body>
        </div>
    )
}

export default VisualizationPage