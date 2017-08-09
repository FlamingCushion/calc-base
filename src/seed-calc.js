import React, {Component} from 'react';

// App Components
import Range from './inputs';

export default class SeedCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = this.defaultState();
    }

    render() {
        return (
            <div className='calculator'>
                <h3>Grass Seed Calculator</h3>
                <div className='seed-result-container'></div>

                <div className='seed-input'>
                    <div className='input-fields'>
                        <div className='input-group'>
                            <span className='label'>Area (m^2)</span>
                            <Range min={10} value={ this.state.area } onChange={ this.areaChange } />
                        </div>
                        
                        <div className='input-group'>
                            <span className='label'>Area (m^2)</span>
                            <Range min={10} value={ this.state.area } onChange={ this.areaChange } />
                        </div>

                        <div className='input-group'>
                            <span className='label'>Seeding (kg/m^2)</span>
                            <Range min={0.02} value={ this.state.seeding } onChange={ this.seedingChange } />
                        </div>
                    </div>
                </div>
                
                <div className='seed-result-number'>
                    Grass Seed Needed = { this.state.seed } kg
                </div>
            </div>
        );
    }

    areaChange = (area) => {
        this.setState({ area: area }, this.setSeed);
    }

    seedingChange = (seeding) => {
        this.setState({ seeding: seeding }, this.setSeed);
    }

    reset = () => { this.setState(this.defaultState()); }

    defaultState = () => {
        return {
            area: 100,
            seeding: 0.1,
            seed: 10,
        };
    }

    setSeed = () => {
        let seed = (this.state.area * this.state.seeding );
        this.setState({ seed: seed });
    }

    getStyles = () => {
        return {
            underweight: { color: '#FFFFFF' },
            normal: { color: '#F9F68D' },
            overweight: { color: '#FED88B' },
            obese: { color: '#FF5411' }
        }
    }
}