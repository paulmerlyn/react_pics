import React from 'react';

export default class SearchBar extends React.Component {
    state = {term: 'please enter keywords'};

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        //this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // I'm now using an inline anonymous function declaration instead of this function
    onInputChange(event) {
        console.log(event);
        this.setState(
            {term: event.target.value},
            () => {
                console.log(this.state)
            });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log('onSearchSubmit was invoked in the child (SearchBar) component')
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    /* Note how the onBlur property is assigned an arrow function rather than a handler. This eliminates the need to bind 'this'
     * to onFormSubmit in the constructor. Note also that, in the declaration of that arrow function, we must INVOKE onFormSubmit
     * through the use of (). Contrast that with how we merely associate the onFormSubmit handler with the <form> element's onSubmit
     * handler, and we don't need the () parentheses to invoke the handler there. */
    render(props) {
        return (
            <div className="ui segment">
                <form className="ui form" id="form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            onChange={e => {this.setState({term: e.target.value})}}
                            onFocus={e => {this.setState({term: ''})}} 
                            onBlur={this.onFormSubmit}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>        
            );
    };
}
