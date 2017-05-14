import React, {Component} from 'react';
import { render } from "react-dom";
import PropTypes from 'prop-types'; 


const menu = [
{
	link: "/mainpage",
	label: 'Main Page'
},
{
	link: "/goods",
	label: 'Goods'
},
{
	link: "/contacts",
	label: 'Contacts'
},
{
	link: "/reviews",
	label: 'Reviews'
},
{
	link: "/basket",
	label: 'Basket'
}	
]

class Header extends React.Component{

	// static propTypes = {
	// 	items: PropTypes.array.isRequired,
	// 	isLoading: PropTypes.bool,
	// 	submit: PropTypes.func
	// }; 

	render(){

		return(
			<header className='header'>
		
				<h1>Welcome to our shop</h1>
				<Clock />

			</header>
			);		
	}
}

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {date: new Date()};
	}
	componentDidMount(){
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount(){
		clearIterval(this.timerID);
	}
	tick(){
		this.setState({
			date: new Date()
		});
	}

	render(){
		return(
			<div className="clock">
			<h2>{this.state.date.toLocaleTimeString()}</h2>
			</div>);
	}
}


export default Header;