import css from"./app.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import Header from "./header.js";
import Main from './main.js';
import Footer from './footer.js';
import Item from './item.js';

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

class OurShop extends React.Component{
	// constructor ( props){
	// 	super(props);
	// 	this.state = {

	// 	}

	// }
	render(){
		return(
			<div>
			 <Header items = {menu} />
			 <Main>
				
			 </Main>
		
			 <Footer/>
			</div>
			);		
	}
}

const root = document.querySelector('#root');

render(React.createElement(OurShop), root);