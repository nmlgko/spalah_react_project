import React, {Component} from 'react';
import { render } from "react-dom";
import PropTypes from 'prop-types'; 


class Header extends React.Component{

	// static propTypes = {
	// 	items: PropTypes.array.isRequired,
	// 	isLoading: PropTypes.bool,
	// 	submit: PropTypes.func
	// }; 

	render(){

		return(
			<header className='mainMenu'>
				{this.props.items.map((item, index)=>
					<a href = {item.link} key={index}>{item.label}</a>)}
			</header>
			);		
	}
}

export default Header;