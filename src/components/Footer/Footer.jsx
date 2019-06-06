
import React from "react";
import './Footer.css';

/*------------------
|      Images       |
-------------------*/

import logo from '../../assets/logo.svg';

/*--------------------*/

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="footerContainer">
                <img className="reactIcon" src={logo} alt={'icon'} />
                <div>Powered by ReactJS</div>
            </div>
        );
    }
}
 
export default Footer;