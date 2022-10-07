import React, { useState } from 'react';
import DropdownTagFilter from '../components/DropdownTagFilter';
import '../styles/repoVisualsPage.css';
import { Commits } from '../components/Commits';
import { Issues } from '../components/Issues';
import { LogOut } from '../components/LogOut';
import { Chart } from '../components/CommitsChart';
import { Authors } from '../components/authors';
import { ProjectName } from '../components/ProjectName';

/* const options = [
    { value: 'philiptinius', label: 'philiptinius' },
    { value: 'emilima', label: 'emilima' },
    { value: 'Philip Tinius Hansen Crome', label: 'Philip Tinius Hansen Crome' },
    { value: 'kbrattli', label: 'kbrattli' }
] */

const VisualizationPage = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = Authors();


    return (
        <div className='PageWrapper'>
            <div className='header'>
                {<LogOut />}
                <h1>
                    {<ProjectName />}
                </h1>
                <hr />
            </ div>
            <main className="row">
                <div className="sectWrapper">
                    <div className="col-12">
                        <div className="filters">
                            <DropdownTagFilter setSelectedOptions={setSelectedOptions} filterOptions={options} filterName="Author" />
                        </div>
                    </div>
                    <div className="col-6">
                        <section className="sect1">
                            {<Commits filters={selectedOptions} />}
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
                        <h2 className="isuues">Issues</h2>

                        <hr />
                    </div>
                    <div className="col-12">
                        <section className="sect1">
                            {<Issues />}
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default VisualizationPage