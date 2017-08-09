import React, {Component} from 'react';
import Select from 'react-select';

class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    
    var defaultOptions = [
        { value: 20, label: '20kg' },
        { value: 40, label: '40kg' },
        { value: 80, label: '80kg' },
        { value: 100, label: '100kg' },
        { value: 140, label: '140kg' }
    ]
    
    render() {
        return (
            <Select 
                className='select-input'
                value={this.state.value}
                onChange={ this.onChange }
                options={defaultOptions}
            />
        )
    }
}