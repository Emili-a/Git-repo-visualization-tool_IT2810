import React from 'react';
import '../styles/repoVisualsPage.css';
import Api from '../Api'
import { Commits } from '../components/Commits';
import { Issues } from '../components/Issues';

const VisualizationPage = () => {
    return (
        <div className='PageWrapper'>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <body>
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
                                {<Commits />}
                                <p> data data data <br/> tabell eller liste</p>
                            </section>
                        </div>
                        <div className="col-6">
                            <section className="sect2">
                                <img src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg" alt="piechart"/>
                            </section>
                        </div>
                    </div>
                    <div className="sectWrapper">
                        <div className="col-12">
                            <h2>Issues</h2>
                                
                            <hr />
                        </div>
                        <div className="col-6">
                            <section className="sect1">
                                {<Issues />}
                            </section>
                        </div>
                        <div className="col-6">
                            <section className="sect2">
                                <h1>Repo</h1>
                            </section>
                        </div>
                    </div>
                </main>
            </body>
        </div>
    )
}

export default VisualizationPage