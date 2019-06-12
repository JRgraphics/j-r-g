
import React from "react";

import './Gallery.css';

/*------------------
|      Images       |
-------------------*/

import double_arrow_l from '../../assets/double_arrow_l.png';
import double_arrow_r from '../../assets/double_arrow_r.png';

/* Desktop */

import space from '../../assets/desktopPosters/jpgs/avaruus_poster.jpg';
import cccp from '../../assets/desktopPosters/jpgs/CCCP_poster.jpg';
import ghetto from '../../assets/desktopPosters/jpgs/ghetto_poster.jpg';
import jungle from '../../assets/desktopPosters/jpgs/jungle_poster.jpg';
import melt from '../../assets/desktopPosters/jpgs/melt_poster.jpg';
import fwr from '../../assets/desktopPosters/jpgs/FWR_poster.jpg';
import disco from '../../assets/desktopPosters/jpgs/disko_poster.jpg';

/* Mobile */

import spinnilogo from '../../assets/mobilePosters/jpgs/spinni_logo.jpg';

import blackBoxM from '../../assets/mobilePosters/jpgs/blackBoxM.jpg';
import spaceM from '../../assets/mobilePosters/jpgs/avaruus_posterM.jpg';
import cccpM from '../../assets/mobilePosters/jpgs/CCCP_posterM.jpg';
import ghettoM from '../../assets/mobilePosters/jpgs/ghetto_posterM.jpg';
import jungleM from '../../assets/mobilePosters/jpgs/jungle_posterM.jpg';
import meltM from '../../assets/mobilePosters/jpgs/melt_posterM.jpg';
import fwrM from '../../assets/mobilePosters/jpgs/FWR_posterM.jpg';
import discoM from '../../assets/mobilePosters/jpgs/disko_posterM.jpg';

/* Mobile Zoom */

import spaceM_BIG from '../../assets/mobilePosters/jpgs/avaruus_posterM_BIG.jpg';
import cccpM_BIG from '../../assets/mobilePosters/jpgs/CCCP_posterM_BIG.jpg';
import ghettoM_BIG from '../../assets/mobilePosters/jpgs/ghetto_posterM_BIG.jpg';
import jungleM_BIG from '../../assets/mobilePosters/jpgs/jungle_posterM_BIG.jpg';
import meltM_BIG from '../../assets/mobilePosters/jpgs/melt_posterM_BIG.jpg';
import fwrM_BIG from '../../assets/mobilePosters/jpgs/FWR_posterM_BIG.jpg';
import discoM_BIG from '../../assets/mobilePosters/jpgs/disko_posterM_BIG.jpg';

/*--------------------*/

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesDesktop: [
                blackBoxM,
                melt,
                cccp,
                ghetto,
                jungle,
                space,
                fwr,
                disco,
                blackBoxM
            ],

            imagesMobile: [
                blackBoxM,
                meltM,
                cccpM,
                ghettoM,
                jungleM,
                spaceM,
                fwrM,
                discoM,
                blackBoxM
            ],

            imagesMobileBig: [
                blackBoxM,
                meltM_BIG,
                cccpM_BIG,
                ghettoM_BIG,
                jungleM_BIG,
                spaceM_BIG,
                fwrM_BIG,
                discoM_BIG,
                blackBoxM
            ],

            leftImgId: 0,
            centerImgId: 1,
            rightImgId: 2,
            leftImgIdMove: 0,
            centerImgIdMove: 1,
            rightImgIdMove: 2,

            rightCaller: 'false'
        }

    }

    componentDidMount = () => {
        this.setState({leftImgId: 0, centerImgId: 1, rightImgId: 2, leftImgIdMove: 0, centerImgIdMove: 1, rightImgIdMove: 2});
        this.refs['L1'].classList.add('zIndex4');
        this.refs['C1'].classList.add('zIndex5');
        this.refs['R1'].classList.add('zIndex4');
        this.refs['GC'].classList.add('fadeInGC');
    }

    slideLeft = () => {
        if ( this.state.centerImgId > 1 ) {
            this.refs['Lbutton'].classList.add('flickButton');
            this.refs['L1'].classList.remove('zIndex4');
            this.refs['C1'].classList.remove('zIndex5');
            this.refs['R1'].classList.remove('zIndex4');

            const right = this.state.rightImgId - 1;
            const left = this.state.leftImgId - 1;
            this.setState({leftImgId: left, rightImgId: right});
            this.refs['C1'].classList.add('hidden');
            this.refs['C2'].classList.add('makeRight');
            this.refs['C2'].classList.remove('centerImg');
            this.refs['L2'].classList.add('makeCenterLeft');
            this.refs['L2'].classList.remove('leftImg');
            const center = this.state.centerImgId - 1;
            this.setState({centerImgId: center});

            setTimeout(() => {
                this.refs['Lbutton'].classList.remove('flickButton');

                this.refs['L1'].classList.add('zIndex4');
                this.refs['C1'].classList.add('zIndex5');
                this.refs['R1'].classList.add('zIndex4');

                this.refs['C1'].classList.remove('hidden');
                this.refs['C2'].classList.add('hidden');
                this.refs['R2'].classList.add('hidden');
                this.refs['L2'].classList.add('hidden');
                this.setState({leftImgIdMove: left, centerImgIdMove: center, rightImgIdMove: right},
                    () => { 
                     this.refs['C2'].classList.add('centerImg');
                     this.refs['C2'].classList.remove('makeRight');
                     this.refs['L2'].classList.add('leftImg');
                     this.refs['L2'].classList.remove('makeCenterLeft');
                    });
            }, 500);
        } else {
            console.log('Unable to slide left further!');
        }
    }

    slideRight = () => {
        if ( this.state.centerImgId < this.state.imagesMobile.length - 2 ) {
            this.refs['Rbutton'].classList.add('flickButton');

            this.refs['L1'].classList.remove('zIndex4');
            this.refs['C1'].classList.remove('zIndex5');
            this.refs['R1'].classList.remove('zIndex4');

            const left = this.state.leftImgId + 1;
            const right = this.state.rightImgId + 1;
            this.setState({leftImgId: left, rightImgId: right});
            this.refs['C1'].classList.add('hidden');
            this.refs['C2'].classList.add('makeLeft');
            this.refs['C2'].classList.remove('centerImg');
            this.refs['R2'].classList.add('makeCenterRight');
            this.refs['R2'].classList.remove('rightImg');
            const center = this.state.centerImgId + 1;
            this.setState({centerImgId: center});

            setTimeout(() => {
                this.refs['Rbutton'].classList.remove('flickButton');

                this.refs['L1'].classList.add('zIndex4');
                this.refs['C1'].classList.add('zIndex5');
                this.refs['R1'].classList.add('zIndex4');

                this.refs['C1'].classList.remove('hidden');
                this.refs['C2'].classList.add('hidden');
                this.refs['R2'].classList.add('hidden');
                this.refs['L2'].classList.add('hidden');
                this.setState({leftImgIdMove: left, centerImgIdMove: center, rightImgIdMove: right},
                    () => { 
                     this.refs['C2'].classList.add('centerImg');
                     this.refs['C2'].classList.remove('makeLeft');
                     this.refs['R2'].classList.add('rightImg');
                     this.refs['R2'].classList.remove('makeCenterRight');
                    });
            }, 500);
        } else {
            console.log('Unable to slide right further!');
        }
    }

    leftLoaded = () => {
        this.refs['L2'].classList.remove('hidden');
    }

    centerLoaded = () => {
        this.refs['C2'].classList.remove('hidden');
    }

    rightLoaded = () => {
        this.refs['R2'].classList.remove('hidden');
    }

    openZoom = (e) => {
        console.log(e.target.src);
        console.log(e.target.id);
        console.log(this.state.imagesMobile.indexOf(this.state.imagesMobile[e.target.id]));
        const zoomImgMobile = this.state.imagesMobileBig[e.target.id];
        this.setState({rightCaller: 'true', zoomUrl: zoomImgMobile, zoomUrlDT: zoomImgMobile});
        const data = {rightCaller: 'true', zoomUrl: zoomImgMobile, zoomUrlDT: zoomImgMobile};
        this.props.openZoomBox(data);
    }

    render() { 
        return (
            <div ref={'GC'} className="galleryContainer">
                <img className="spinniLogo" src={spinnilogo} alt={'img'} />
                <div ref={'slider'} className="slider">
                    <picture>
                        <source media="(min-width: 431px)" srcSet={this.state.imagesDesktop[this.state.leftImgId]} />
                        <img ref={'L1'} className="leftImg" src={this.state.imagesMobile[this.state.leftImgId]}alt={'img'}></img>
                    </picture>
                    <picture>
                        <source media="(min-width: 431px)" srcSet={this.state.imagesDesktop[this.state.centerImgId]} />
                        <img id={this.state.centerImgId} ref={'C1'} className="centerImg" src={this.state.imagesMobile[this.state.centerImgId]} alt={'img'} onClick={this.openZoom}></img>
                    </picture>
                    <picture>
                        <source media="(min-width: 431px)" srcSet={this.state.imagesDesktop[this.state.rightImgId]} />
                        <img ref={'R1'} className="rightImg" src={this.state.imagesMobile[this.state.rightImgId]} alt={'img'}></img>
                    </picture>

                    <picture>
                        <source media="(min-width: 431px)" srcSet={this.state.imagesDesktop[this.state.leftImgIdMove]} />
                        <img ref={'L2'} className="leftImg mover leftMover" src={this.state.imagesMobile[this.state.leftImgIdMove]} alt={'img'} onLoad={this.leftLoaded}></img>
                    </picture>
                    <picture>
                        <source media="(min-width: 431px)" srcSet={this.state.imagesDesktop[this.state.centerImgIdMove]} />
                        <img ref={'C2'} className="centerImg mover centerMover" src={this.state.imagesMobile[this.state.centerImgIdMove]} alt={'img'} onLoad={this.centerLoaded}></img>
                    </picture>
                    <picture>
                        <source media="(min-width: 431px)" srcSet={this.state.imagesDesktop[this.state.rightImgIdMove]} />
                        <img ref={'R2'} className="rightImg mover rightMover" src={this.state.imagesMobile[this.state.rightImgIdMove]} alt={'img'} onLoad={this.rightLoaded}></img>
                    </picture>

                </div>
                <div className="slideButtonBox">
                    <img ref={'Lbutton'} src={double_arrow_l} alt={'icon'} className="slideButton hoverCurson" onClick={this.slideLeft} />
                    <img ref={'Rbutton'} src={double_arrow_r} alt={'icon'} className="slideButton hoverCurson" onClick={this.slideRight} />
                </div>
            </div>
        );
    }
}
 
export default Gallery;