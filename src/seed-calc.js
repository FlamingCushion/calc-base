import React, {Component} from 'react';

// App Components
import Range from './inputs.js';

/*
    Grass seed calculator

    Allows for New lawn and Over seeding calculations
    Uses Range Component for any user inputed values

    For new lawns 35g/m^2 of seed is required

    When overseeding 35g/m^2 of see is required
*/

export default class SeedCalculator extends Component {
    constructor(props) {
        super(props);
        this.state =this.defaultState();
    }

    render() {
        return (
            <div className="calculator">
                <h3>Grass Seed Calculator</h3>
                <div>
                    <p>
                        Calculates the amount of seed required for either a new lawn or to over seed existing turf.<br />
                        Please enter the length and width of the area you wish to seed.
                    </p>
                </div>

                <div className="calculator__input">
                    <div className="form-elements">
                        <div className="form-group">
                            <span className="label">Bag Size (kg)</span>
                            <Range min={1} value={ this.state.size } onChange={ this.sizeChange } />
                        </div>

                        <div className="form-group">
                            <span className="label">Width (m)</span>
                            <Range min={0.5} value={ this.state.width } onChange={ this.widthChange } />
                        </div>

                        <div className="form-group">
                            <span className="label">Length (m)</span>
                            <Range min={0.5} value={ this.state.length } onChange={ this.lengthChange } />
                        </div>

                        <div className="form-group">
                            <span className="radio-label">Seeding</span>
                            <label className="radio-inline">
                                <input
                                    type="radio"
                                    value={0.035}
                                    checked={this.state.selectedOption === "0.035"}
                                    onChange={this.handleOptionChange} />
                                <span className="radio__label">New Lawn</span>
                            </label>
                            <label className="radio-inline">
                                <input
                                    type="radio"
                                    value={0.025}
                                    checked={this.state.selectedOption === "0.025"}
                                    onChange={this.handleOptionChange} />
                                <span className="radio__label">Over Seeding</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="calculator__button">
                    <button onClick={this.calculateSeed} className="btn btn-secondary">
                        Calculate
                    </button>
                </div>

                <div className="calculator__results">
                    <span>No of Bags you require: </span>
                    <span className="calculator__result">{ this.state.seedBags }</span>
                </div>
            </div>
        );
    }

    //change handlers for variables in calc, on every change it recalculates the tota
    widthChange = (width) => {
        this.setState({ width: width });
    }

    lengthChange = (length) => {
        this.setState({ length: length });
    }

    sizeChange = (size) => {
        this.setState({ size: size });
    }

    //assigns seeding density on radio button change
    handleOptionChange = (e) => {
        this.setState({selectedOption: e.target.value});
    }

    calculateSeed = (e) => {
        let seed = ((this.state.width * this.state.length) * this.state.selectedOption);
        let seedBags = Math.ceil(((this.state.width * this.state.length) * this.state.selectedOption) / this.state.size);
        this.setState({ seed: seed });
        this.setState({ seedBags: seedBags });
    }

    reset = () => { this.setState(this.defaultState()); }

    // inital values
    defaultState = () => {
        return {
            length: 1,
            width: 1,
            selectedOption: "0.035",
            seed: 0.035,
            size: 10,
            seedBags: 1
        };
    }

    // seed calculation
    setSeed = () => {
        let seed = ((this.state.width * this.state.length) * this.state.selectedOption);
        let seedBags = Math.ceil(((this.state.width * this.state.length) * this.state.selectedOption) / this.state.size);
        this.setState({ seed: seed });
        this.setState({ seedBags: seedBags})
    }
}
