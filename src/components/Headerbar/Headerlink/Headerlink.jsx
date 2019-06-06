
import "./Headerlink.css";
import React from "react";

// eslint-disable-next-line 
import { BrowserRouter as Routes, Route, Link, withRouter } from "react-router-dom";

class Headerlink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleclick = () => {
        console.log(this.props.link);
    }

    render() { 
        return (
            <div className="headerLink" style={this.props.style}>
                <Link to={this.props.link} style={{ textDecoration: 'none', color: '#fff' }}>
                    <span className="hoverPointer" onClick={this.handleclick}>{this.props.name}</span>
                </Link>
            </div>
        );
    }
}
 
export default Headerlink;