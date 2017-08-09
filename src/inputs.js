import React from 'react';

/**
 * A range element.
 * 
 */
export default class Range extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMouseDown: false,
            value: props.value
        };
    }

    static defaultProps = {
        min: 0,
        max: Infinity,
        step: 1,
        sensitivity: 5,
        onInput: () => {}
    };

    static propTypes = {
        value: React.PropTypes.number.isRequired,
        onChange: React.PropTypes.func.isRequired,
        /* min bound */
        min: React.PropTypes.number,
        /* max bound */
        max: React.PropTypes.number,
        /* number to increment by */
        step: React.PropTypes.number,
        /* number of pixels mouse has to move to step */
        sensitivity: React.PropTypes.number,
        onInput: React.PropTypes.func
    };

    componentWillMount() {
        this.setState({ isMouseDown: false });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ value: nextProps.value });
    }

    render() {
        return (
            <div className='range-container'>
            <input
                className='range-input'
                disabled={ this.props.disabled }
                value={ this.state.value }
                type='number'
                onChange={ this.onChange }
                onDoubleClick={ this.onDoubleClick }
                onBlur={ this.onBlur } />
            </div>
        );
    }

    /* Clip the value based on the min and max bounds */
    cutoff = (num) => { return Math.min(Math.max(num, this.props.min), this.props.max); }

    onChange = (e) => { this.setState({ value: e.target.value }); }

    onBlur = () => {
        let parsed = parseFloat(this.state.value);
        if(isNaN(parsed)) this.setState({ value: this.props.value });
        else {
            this.props.onChange(this.cutoff(parsed));
            this.setState({ value: this.cutoff(parsed) });
        }
    }

    onDoubleClick = (e) => { e.target.focus(); }
}