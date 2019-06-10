import React, { Component } from "react";
import "./Aboutmecontent.css";
import Textbox from "../Textbox/Textbox";

// import linkedInImg from "../../assets/images/linkedin_logo.png";

/*------------------
|      Images       |
-------------------*/

/* Mobile */

import arrow_stylish_l from '../../assets/arrow_stylish_l.png';

/*--------------------*/

class Aboutmecontent extends Component {
  state = {};

  scrollElementTop = () => {
    document.getElementsByClassName("aboutMeText")[0].scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  componentDidMount = () => {
    this.setArrow();
    this.refs['AC'].addEventListener('scroll', this.setArrow);
    window.addEventListener('resize', this.setArrow);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setArrow);
  }

  setArrow = () => {
    console.log(this.refs['AC'].offsetHeight + this.refs['AC'].scrollTop);
    console.log(this.refs['AC'].scrollHeight);
    if ( this.refs['AT'].getBoundingClientRect().height > this.refs['AC'].getBoundingClientRect().height ) {
      if ( this.refs['AC'].offsetHeight + this.refs['AC'].scrollTop >= this.refs['AC'].scrollHeight - 1 ) {
        this.refs['DA'].classList.add('hidden');
      } else {
        if ( this.refs['DA'].classList.length > 0 ) {
          this.refs['DA'].classList.remove('hidden');
        } else {
          /* NO STATEMENT */
        }
      }
    } else {
      this.refs['DA'].classList.add('hidden');
    }
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <div className="gradientBarTop"></div>
        <div ref={'AC'} className="aboutMeContainer">
          <div ref={'AT'} className="aboutMeText">
            <Textbox
                text={
                "/n" +
                "Hello there, and welcome to my portfolio." +
                "/n" +
                "/n" +
                "What started simply as a hobby, has almost by accident turned into my job and very likely my career as a whole. " +
                "Even though my major is keenly focused on Information management & other related studies, " +
                "I found software development very compelling and wanted to pursue it as a career by getting my hands dirty," +
                "creating my own projects and enhancing my skills." +
                "/n" +
                "/n" +
                "As a developer, I have mainly used C++ as my main programming language within my studies, but now I'm heavily focus on " +
                "mastering Javascript, at the moment ReactJS and Angular 7 are my main tools that I work with." +
                "/n"
                }
            />
            </div>
        </div>
        <div className="gradientBarBottom"></div>
        <img ref={'DA'} id="downArrow" src={arrow_stylish_l} alt={'icon'} />
      </div>
    );
  }
}

export default Aboutmecontent;
