
import React from "react";

import './Gallery.css';

/*------------------
|      Images       |
-------------------*/

/* Mobile */

import spinnilogo from '../../assets/mobilePosters/spinni_logo.png'

import blackBoxM from '../../assets/mobilePosters/blackBoxM.png';
import spaceM from '../../assets/mobilePosters/avaruus_poster.png';
import cccpM from '../../assets/mobilePosters/CCCP_poster.png';
import ghettoM from '../../assets/mobilePosters/ghetto_poster.png';
import jungleM from '../../assets/mobilePosters/jungle_poster.png';
import meltM from '../../assets/mobilePosters/melt_poster.png';
import fwrM from '../../assets/mobilePosters/FWR_poster.png';
import discoM from '../../assets/mobilePosters/disko_poster.png';

/*--------------------*/

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesMobile: [
                blackBoxM,
                discoM,
                spaceM,
                cccpM,
                ghettoM,
                jungleM,
                meltM,
                fwrM,
                discoM,
                blackBoxM
            ],
            leftImgId: 0,
            centerImgId: 1,
            rightImgId: 2,
            leftImgIdMove: 0,
            centerImgIdMove: 1,
            rightImgIdMove: 2
        }

    }

    componentDidMount = () => {
        this.setState({leftImgId: 0, centerImgId: 1, rightImgId: 2, leftImgIdMove: 0, centerImgIdMove: 1, rightImgIdMove: 2});
    }

    slideLeft = () => {
        if ( this.state.centerImgId > 1 ) {
            const left = this.state.leftImgId - 1;
            this.setState({leftImgId: left});
            this.refs['C1'].classList.add('hidden');
            this.refs['C2'].classList.add('makeRight');
            this.refs['C2'].classList.remove('centerImg');
            this.refs['L2'].classList.add('makeCenterLeft');
            this.refs['L2'].classList.remove('leftImg');

            setTimeout(() => {
                const right = this.state.rightImgId - 1;
                const right2 = this.state.rightImgIdMove - 1;
                const center = this.state.centerImgId - 1;
                const center2 = this.state.centerImgIdMove - 1;
                this.setState({rightImgId: right, rightImgIdMove: right2, centerImgId: center, centerImgIdMove: center2, leftImgIdMove: left});
                this.refs['L2'].classList.add('hidden');
                this.refs['C1'].classList.remove('hidden');
                this.refs['C2'].classList.add('centerImg');
                this.refs['C2'].classList.remove('makeRight');
                this.refs['L2'].classList.add('leftImg');
                this.refs['L2'].classList.remove('makeCenterLeft');
                this.refs['L2'].classList.remove('hidden');

            }, 500);
        } else {
            console.log('Unable to slide left further!');
        }
    }

    slideRight = () => {
        if ( this.state.centerImgId < this.state.imagesMobile.length - 2 ) {
            const right = this.state.rightImgId + 1;
            this.setState({rightImgId: right});
            this.refs['C1'].classList.add('hidden');
            this.refs['C2'].classList.add('makeLeft');
            this.refs['C2'].classList.remove('centerImg');
            this.refs['R2'].classList.add('makeCenterRight');
            this.refs['R2'].classList.remove('rightImg');

            setTimeout(() => {
                const left = this.state.leftImgId + 1;
                const left2 = this.state.leftImgIdMove + 1;
                const center = this.state.centerImgId + 1;
                const center2 = this.state.centerImgIdMove + 1;
                this.setState({leftImgId: left, leftImgIdMove: left2, centerImgId: center, centerImgIdMove: center2, rightImgIdMove: right});
                this.refs['R2'].classList.add('hidden');
                this.refs['C1'].classList.remove('hidden');
                this.refs['C2'].classList.add('centerImg');
                this.refs['C2'].classList.remove('makeLeft');
                this.refs['R2'].classList.add('rightImg');
                this.refs['R2'].classList.remove('makeCenterRight');
                this.refs['R2'].classList.remove('hidden');

            }, 500);
        } else {
            console.log('Unable to slide right further!');
        }
    }

    render() { 
        return (
            <div>
                <img className="spinniLogo" src={spinnilogo} alt={'img'} />
                <div className="slider">
                    <img ref={'L1'} className="leftImg" src={this.state.imagesMobile[this.state.leftImgId]} alt={'img'}></img>
                    <img ref={'C1'} className="centerImg" src={this.state.imagesMobile[this.state.centerImgId]} alt={'img'}></img>
                    <img ref={'R1'} className="rightImg" src={this.state.imagesMobile[this.state.rightImgId]} alt={'img'}></img>

                    <img ref={'L2'} className="leftImg mover leftMover" src={this.state.imagesMobile[this.state.leftImgIdMove]} alt={'img'}></img>
                    <img ref={'C2'} className="centerImg mover centerMover" src={this.state.imagesMobile[this.state.centerImgIdMove]} alt={'img'}></img>
                    <img ref={'R2'} className="rightImg mover rightMover" src={this.state.imagesMobile[this.state.rightImgIdMove]} alt={'img'}></img>
                </div>
                <div className="slideButtonBox">
                    <div className="slideButton hoverCurson" onClick={this.slideLeft}>Left</div>
                    <div className="slideButton hoverCurson" onClick={this.slideRight}>Right</div>
                </div>
            </div>
        );
    }
}
 
export default Gallery;