import React, {Component} from 'react';
import { render } from "react-dom";
import Item from "./item.js";

class Main extends React.Component{
	// constructor ( props){
	// 	super(props);
	// 	this.state = {
			
	// 	}

	// }
	render(){
		return(
			<main>
			for (var i = 0; i < 10; i++) {
				<Item/>
			}
			  
			</main>
			);		
	}
}
export default Main;