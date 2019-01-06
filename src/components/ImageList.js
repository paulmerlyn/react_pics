import React from 'react';

class ImageList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const images = (
            this.props.searchResults ? 
                this.props.searchResults.map(
                    (imgUrl, key) => { return <img key={key} src={imgUrl} />}) : 
                <span>Please wait</span>
        );
        return (
            <div>
                {images}
            </div>
        );
    }
}

export default ImageList;