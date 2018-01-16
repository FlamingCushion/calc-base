import React, { Component } from 'react';
import logo from './logo.svg';
import './css/app.css';

import SeedCalculator from './seed-calc';
import PondCalculator from './pond-calc';
import SoilCalculator from './soil-calc';

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
                <div className="App-body calculators">
                    <div className="calculators__calc">
                            <SeedCalculator />
                    </div>

                    <div className="calculators__calc">
                            <PondCalculator />
                    </div>

                    <div className="calculators__calc">
                        <SoilCalculator />
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
