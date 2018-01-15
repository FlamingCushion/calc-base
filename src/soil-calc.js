import React from 'react';

// App Components
import Range from './inputs.js';

export default class SoilCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.defaultState();
    }

    render() {
        return (
            <div className='calculator'>
                <h3>Top Soil Calculator</h3>
                <div>
                    <p>
                        Please enter the area measurements (in metres) and the depth of soil (in centermeters).
                    </p>
                </div>

                <div className='calculator__input'>
                    <div className='form-elements'>
                        <div className='form-group'>
                            <span className='label'>Width of Area (m)</span>
                            <Range min={0.5} value={ this.state.width } onChange={ this.widthChange } />
                        </div>

                        <div className='form-group'>
                            <span className='label'>Length of Area (m)</span>
                            <Range min={0.5} max={10000000} value={ this.state.length } onChange={ this.lengthChange } />
                        </div>

                        <div className='form-group'>
                            <span className='label'>Depth of Soil (cm)</span>
                            <Range min={0.02} value={ this.state.depth } onChange={ this.depthChange } />
                        </div>
                    </div>
                </div>

                <div className='calculator__results'>
                    <span>Volume of Soil Needed: </span>
                    <span>{ this.state.soil.toFixed(2) } m<sup>3</sup></span>
                </div>
            </div>
        );
    }

    widthChange = (width) => {
    this.setState({ width: width }, this.setSoil);
    }

    lengthChange = (length) => {
        this.setState({ length: length }, this.setSoil);
    }

    depthChange = (depth) => {
        this.setState({ depth: depth }, this.setSoil);
    }

    reset = () => { this.setState(this.defaultState()); }

    defaultState = () => {
        return {
            width: 10,
            length: 10,
            depth: 10,
            soil: 10,
        };
    }

    setSoil = () => {
        let soil = (this.state.length * this.state.width * (this.state.depth / 100));
        this.setState({ soil: soil });
    }
}
