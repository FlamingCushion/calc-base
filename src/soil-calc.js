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
                            <span className='label'>Width (m)</span>
                            <Range min={0.5} value={ this.state.width } onChange={ this.widthChange } />
                        </div>
                        
                        <div className='input-group'>
                            <span className='label'>Area (m^2)</span>
                            <Range min={10} max={10000000} value={ this.state.area } onChange={ this.areaChange } />
                        </div>

                        <div className='input-group'>
                            <span className='label'>depth (kg/m^2)</span>
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
    
þ☼ƒ

    areaChange = (area) => {
        this.setState({ area: area }, this.setSeed);
    }

    depthChange = (depth) => {
        this.setState({ depth: depth }, this.setLiner);
    }
    
    reset = () => { this.setState(this.defaultState()); }

    defaultState = () => {
        return {
            area: 100,
            depth: 0.1,
            seed: 10,
            seedClass: 'Normal Weight'
        };
    }

    setSoil = () => {
        let soil = (this.state.area * this.state.depth );
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