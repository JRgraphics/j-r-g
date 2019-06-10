
import React from "react";

import './ZoomImage.css';

class ZoomImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageStatus: "notloaded"
        }
    }

    componentDidUpdate = () => {
        if ( this.props.rightCaller === 'true' ) {
            console.log(this.props);
            if ( this.props.imgUrl !== '' && this.props.imgUrl !== undefined ) {
                this.refs['ZC'].classList.remove('hidden');
                if ( this.refs['Zimg'].complete ) {
                    this.refs['Zimg'].classList.remove('hidden');
                    this.refs['Zimg'].classList.remove('height0');
                } else {
                    /* No statement */
                }
            } else {
                /* No statement */
            }
        } else {
            /* No statement */
        }
    }
    
    handleImageLoaded = () => {
        this.setState({ imageStatus: "loaded" },
        () => {
            this.refs['Zimg'].classList.remove('hidden');
            this.refs['Zimg'].classList.remove('height0');
        });
    };

    closeZoom = () => {
        this.refs['Zimg'].classList.add('height0');
        setTimeout(() => {
            this.refs['Zimg'].classList.add('hidden');
            this.refs['ZC'].classList.add('hidden');
            this.props.handleZoomClose();
        }, 500);
    }

    render() { 
        return (
            <div ref={'ZC'} className="zoomContainer hidden" onClick={this.closeZoom}>
                <div ref={'BG'} className="blackBG"></div>
                <picture>
                    <source media="(min-width: 431px)" srcSet={this.props.imgUrlDT} />
                    <img ref={'Zimg'} className="zoomImg height0 hidden" src={this.props.imgUrl} alt={'img'} onLoad={this.handleImageLoaded.bind(this)} />
                </picture>
            </div>
        );
    }
}
 
export default ZoomImage;