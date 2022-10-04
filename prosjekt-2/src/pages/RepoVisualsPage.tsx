import React from 'react';
import DropdownTagFilter from '../components/DropdownTagFilter';
import PieChart from '../components/piechart';
import '../styles/repoVisualsPage.css';


const VisualizationPage = () => {
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
                            <p> info - filter ...</p>
                            <hr />
                        </div>
                        <div className="col-6">
                            <section className="sect1">
                                <DropdownTagFilter />
                                <p> data data data <br /> tabell eller liste</p>
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
                                <PieChart/>
                            </section>
                        </div>
                    </div>
                </main>
        </div>
    )
}

export default VisualizationPage