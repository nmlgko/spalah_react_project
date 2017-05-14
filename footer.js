import React, {Component} from 'react';
import { render } from "react-dom";

class Footer extends React.Component{
	// constructor ( props){
	// 	super(props);
	// 	this.state = {
			
	// 	}

	// }
	render(){
		return(
			<footer className="footer">
			  <p> Project create by: {this.props.names}</p>
			</footer>
			);		
	}
}
export default Footer;