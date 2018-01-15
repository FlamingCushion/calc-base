import React, {Component} from 'react';

// App Components
import Range from './inputs.js';

export default class PondCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = this.defaultState();
    }

    render() {
        return (
            <div className='calculator'>
                <h3>Pond Liner Calculator</h3>
                <div>
                    <p>
                        Please input the maximum width, length and depth of your pond in meters <br />
                        This will calculate the size of pond liner you require, including a little extra for the lip.
                    </p>
                </div>


                <div className='calculator__input'>
                    <div className='form-elements'>
                        <div className='form-group'>
                            <span className='label'>Max Width (m)</span>
                            <Range min={0.5} value={ this.state.maxWidth } onChange={ this.widthChange } />
                        </div>

                        <div className='form-group'>
                            <span className='label'>Max Length (m)</span>
                            <Range min={0.5} value={ this.state.maxLength } onChange={ this.lengthChange } />
                        </div>

                        <div className='form-group'>
                            <span className='label'>Max Depth (m)</span>
                            <Range min={0.25} value={ this.state.maxDepth } onChange={ this.depthChange } />
                        </div>
                    </div>
                </div>

                <div className="calculator__results">
                    <span>Pond Liner Size</span>
                    <span className="calculator__result">Length: { this.state.linerLength } m</span>
                    <span className="calculator__result">Width: { this.state.linerWidth } m</span>

                </div>
            </div>
        );
    }

    widthChange = (maxWidth) => {
        this.setState({ maxWidth: maxWidth }, this.setLiner);
    }

    lengthChange = (maxLength) => {
        this.setState({ maxLength: maxLength }, this.setLiner);
    }

    depthChange = (maxDepth) => {
        this.setState({ maxDepth: maxDepth }, this.setLiner);
    }

    reset = () => { this.setState(this.defaultState()); }

    defaultState = () => {
        return {
            maxWidth: 1,
            maxLength: 1,
            maxDepth: 1,
            linerWidth: 4,
            linerLength: 4,
        };
    }

    setLiner = () => {
        let linerWidth = this.state.maxWidth + (2 * this.state.maxDepth) + 1;
        let linerLength = this.state.maxLength + (2 * this.state.maxDepth) + 1;
        this.setState({ linerWidth: linerWidth });
        this.setState({ linerLength: linerLength });
    }
}
