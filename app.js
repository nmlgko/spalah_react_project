import css from"./app.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import Header from "./header.js";
import Main from './main.js';
import Footer from './footer.js';
import Item from './item.js';



class OurShop extends React.Component{



	render(){
		return(
			<div>
			 <Header name=' VadJs1' /> 
			 <Main>
				
			 </Main>
		
			 <Footer names="spalah students team!" />
			</div>
			);		
	}
}

	const root = document.querySelector('#root');
	render(React.createElement(OurShop), root);
