import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import {Config} from '../config';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchResults: []};
    }

    onSearchSubmit = (term) => {
        console.log('onSearchSubmit was invoked in the parent (App) component')
        console.log(term);
        const AxiosConfig = {
            headers: {
                Authorization: `Client-ID ${Config.unsplash.access_key}`
            },
            params: {
                query: term
            }
        }
        // Issue GET request to unsplash for images that match term
        axios.get(Config.unsplash.baseURL, AxiosConfig)
        .then(response => {
            console.log(response);
            const imageResults = response.data.results.map((result, key) => { 
                console.log(key);
                console.log(result);
                return result.urls.regular;
            });
            console.log(imageResults);
            this.setState({ error: false, imageResults: imageResults });
        })
        .catch(function (error) {
            console.log(error);
            this.setState({ error: true });
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList searchResults={this.state.imageResults} />
            </div>
            
        )
    }
}


export default App;