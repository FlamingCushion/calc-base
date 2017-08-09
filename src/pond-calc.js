import React, {Component} from 'react';

// App Components
import Range from './inputs';

export default class PondCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = this.defaultState();
    }

    render() {
        return (
            <div className='calculator'>
                <h3>Pond Liner Calculator</h3>
                <div className='seed-result-container'></div>

                <div className='seed-input'>
                    <div className='input-fields'>
                        <div className='input-group'>
                            <span className='label'>Width (m)</span>
                            <Range min={0.5} value={ this.state.width } onChange={ this.widthChange } />
                        </div>

                        <div className='input-group'>
                            <span className='label'>Length (m)</span>
                            <Range min={0.5} value={ this.state.length } onChange={ this.lengthChange } />
                        </div>
                        
                        <div className='input-group'>
                            <span className='label'>Depth (m)</span>
                            <Range min={0.25} value={ this.state.depth } onChange={ this.depthChange } />
                        </div>
                        
                        <div className='input-group'>
                            <span className='label'>Lip (m)</span>
                            <Range min={0.02} value={ this.state.lip } onChange={ this.lipChange } />
                        </div>
                    </div>
                </div>
                
                <div className='seed-result-number'>
                    Liner Area = { this.state.liner } 
                </div>
            </div>
        );
    }

    widthChange = (width) => {
        this.setState({ width: width }, this.setLiner);
    }

    lengthChange = (length) => {
        this.setState({ length: length }, this.setLiner);
    }
    
    depthChange = (depth) => {
        this.setState({ depth: depth }, this.setLiner);
    }
    
    lipChange = (lip) => {
        this.setState({ lip: lip}, this.setLiner);
    }

    reset = () => { this.setState(this.defaultState()); }

    defaultState = () => {
        return {
            width: 1,
            length: 1,
            depth: 1,
            lip: 0.1,
        };
    }

    setLiner = () => {
        let liner = 2 * (this.state.width * this.state.depth) + 2 * (this.state.length * this.state.depth) + (this.state.width * this.state.length);
        this.setState({ liner: liner });
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