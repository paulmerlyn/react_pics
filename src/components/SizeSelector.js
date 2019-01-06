import React from 'react';

export default class SizeSelector extends React.Component {
    state = { size: 'small' };

    onChangeHandler = (selectedSize) => {
        console.log(this.state);
        this.setState( { size: selectedSize});
        console.log(this.state);
        console.log(`selectedSize is: ${selectedSize}`);
        this.props.onChange(selectedSize);
    }

    render() {
        return (
            <div className="inline fields">
                <label htmlFor="fruit">Image size:</label>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input name="fruit" onChange={this.onChangeHandler.bind(this, 'regular')} checked={this.state.size === 'regular'} 
                        value="regular" tabIndex="0" type="radio" />
                        <label>Regular</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input name="fruit" onChange={this.onChangeHandler.bind(this, 'small')} checked={this.state.size === 'small'} 
                        value="small" tabIndex="0" type="radio" />
                        <label>Small</label>
                    </div>
                </div>
            </div>
        )
    }
}