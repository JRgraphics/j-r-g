
import React from "react";

import './Home.css'

/*------------------
|      Images       |
-------------------*/

/* Mobile */

import selfportrait from '../../assets/mobilePosters/jpgs/selfportrait.jpg';
import arrow_stylish_l from '../../assets/arrow_stylish_l.png';
import arrow_stylish_r from '../../assets/arrow_stylish_r.png';

/*--------------------*/

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.refs['I1L'].classList.add('fadeArrowLeft');
            this.refs['I1R'].classList.add('fadeArrowRight');
            this.refs['span1'].classList.add('fadeInSpan');
            setTimeout(() => {
                this.refs['I2L'].classList.add('fadeArrowLeft');
                this.refs['I2R'].classList.add('fadeArrowRight');
                this.refs['span2'].classList.add('fadeInSpan');
                setTimeout(() => {
                    this.refs['I3L'].classList.add('fadeArrowLeft');
                    this.refs['I3R'].classList.add('fadeArrowRight');
                    this.refs['span3'].classList.add('fadeInSpan');
                    setTimeout(() => {
                        this.refs['I4L'].classList.add('fadeArrowLeft');
                        this.refs['I4R'].classList.add('fadeArrowRight');
                        this.refs['span4'].classList.add('fadeInSpan');
                    }, 200);
                }, 200);
            }, 200);
        }, 1000);
    }

    render() { 
        return (
            <div style={{position: 'relative', overflow: 'hidden'}}>
                <div className="portraitContainer">
                    <img src={selfportrait} alt={'img'} />
                </div>
                <div className="gradientBar"></div>
                <div className="bulletList">
                    <div className="bulletListRow">
                        <img ref={'I1L'} src={arrow_stylish_l} alt={'img'} />
                        <span ref={'span1'}>Jere Rantalainen</span>
                        <img ref={'I1R'} src={arrow_stylish_r} alt={'img'} />
                    </div>
                    <div className="bulletListRow">
                        <img ref={'I2L'} src={arrow_stylish_l} alt={'img'} />
                        <span ref={'span2'}>Bachelor of Science</span>
                        <img ref={'I2R'} src={arrow_stylish_r} alt={'img'} />
                    </div>
                    <div className="bulletListRow">
                        <img ref={'I3L'} src={arrow_stylish_l} alt={'img'} />
                        <span ref={'span3'}>Developer trainee @IBM</span>
                        <img ref={'I3R'} src={arrow_stylish_r} alt={'img'} />
                    </div>
                    <div className="bulletListRow">
                        <img ref={'I4L'} src={arrow_stylish_l} alt={'img'} />
                        <span ref={'span4'}>Web developing enthusiast</span>
                        <img ref={'I4R'} src={arrow_stylish_r} alt={'img'} />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;