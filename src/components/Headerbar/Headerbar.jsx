import "./Headerbar.css";
import React from "react";

import Headerlink from "./Headerlink/Headerlink";

/*------------------
|      Images       |
-------------------*/

import ring from '../../assets/header_ring.png'
import jrLogo from '../../assets/JRlogo.png'

/*--------------------*/

class Headerbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="headerbar noselect">
        <div>
          <div className="whiteBar">
            <div className="headerLinksTop">
              <Headerlink name="Home" link={'/'} />
              <Headerlink name="Gallery" link={'/gallery'}/>
            </div>
            <div className="headerLinksBottom">
              <Headerlink name="Projects" link="/" style={{marginLeft: '2vw', marginRight: '8vw'}} />
              <Headerlink name="About me" link="/gallery" />
            </div>
          </div>
          <div className="imageContainer">
            <img className="headerRing" src={ring} alt={'img'} />
            <img className="jrLogo" src={jrLogo} alt={'img'} />
          </div>
        </div>
    </div>
    );
  }
}
 
export default Headerbar;
