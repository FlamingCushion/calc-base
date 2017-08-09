import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SeedCalculator from './seed-calc';
import PondCalculator from './pond-calc';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3 className="App-intro">
                        Demo of react calculator for seed and pond liners
                    </h3>
                </div>                
                <div className="App-body">                
                    <div>
                        <div></div>
                        <div>
                            <SeedCalculator />
                        </div>
                    </div>
                    
                    <div>
                        <div></div>
                        <div>
                            <PondCalculator />
                        </div>
                    </div>
                
                </div>
                
            </div>
        );
    }
}

export default App;
