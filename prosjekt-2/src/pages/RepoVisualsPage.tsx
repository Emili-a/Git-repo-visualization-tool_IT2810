import React, { useState } from 'react';
import DropdownTagFilter from '../components/DropdownTagFilter';
import DataTable from '../components/DataTable'
import PieChart from '../components/piechart';
import '../styles/repoVisualsPage.css';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


const VisualizationPage = () => {
    const [selectedOptions, setSelectedOptions] = useState ([]);
    
    return (
        <div className='PageWrapper'>
            <div className='header'>
                <button>
                    Log out/change repo
                </button>
                <h1>
                    Reponavn
                </h1>
                <hr />
            </ div>
            <main className="row">
                <div className="sectWrapper">
                    <div className="col-12">
                        <h2>Commits</h2>
                        <div className="filters">
                            <DropdownTagFilter setSelectedOptions={(selectedOptions: any) => setSelectedOptions(selectedOptions)} filterOptions={options} filterName="Author"/>
                            <DropdownTagFilter filterOptions={options} filterName="Issues"/>
                            <p> info - filter ... {selectedOptions}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="col-6">
                        <section className="sect1">
                            <p> data data data <br /> tabell eller liste</p>
                            <DataTable filters={selectedOptions}/>
                        </section>
                    </div>
                    <div className="col-6">
                        <section className="sect2">
                            <img src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg" alt="piechart" />
                        </section>
                    </div>
                </div>
                <div className="sectWrapper">
                    <div className="col-12">
                        <h2>Branches</h2>
                        <hr />
                    </div>
                    <div className="col-6">
                        <section className="sect1">
                            <p> info - filter ...</p>
                        </section>
                    </div>
                    <div className="col-6">
                        <section className="sect2">
                            <h1>Repo</h1>
                            <PieChart />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default VisualizationPage