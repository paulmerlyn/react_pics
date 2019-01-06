import React from 'react';
import './ImageList.css';

class ImageList extends React.Component {

    render() {
        const images = (
            this.props.searchResults ? 
                this.props.searchResults.map(
                    (imgUrl, key) => { return <img key={key} src={imgUrl} alt="" height={this.props.selectedSize === "small" ? 200 : null} />}) : 
                <span>Images will appear here</span>
        );
        return (
            <div className="">
                {images}
            </div>
        );
    }
}

export default ImageList;