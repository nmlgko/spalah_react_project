import React, {Component} from 'react';
import { render } from "react-dom";
import Item from "./item.js";

const goods = [
	{
		name:"first",
		category:'products',
		subscribe:	"Good stuff",
		price:	"10$"	
	},
	{
		name:"Second",
		category:'products',
		subscribe:	"Exelent stuff",
		price:	"20$"	
	},
	{
		name: "Third",
		categor:"products",
		subscrib:"Middle stuff",
		price:'5$'	
	},
	{
		name: "Fourth",
		category:"engine",
		subscribe:"Excelent stuff, for your car",
		price:'25$'

	},
	{
		name: "Fifth",
		category:"engine",
		subscribe:"Good stuff, for your car",
		price:'15$'
	},
	{
		name: "Six",
		category:"engine",
		subscribe:"Middle stuff, for your car",
		price:'10$'
	},
	{
		name: "Seven",
		category:"body",
		subscribe:"Excelent paint, for your car",
		price:'50$'
	},
	{
	 	name: "Eight",
		category:"body",
		subscribe:"Good paint, for your car",
		price:'40$'	
	},
	{
	 	name: "Nine",
		category:"body",
		subscribe:"Middle paint, for your car",
		price:'30$'
	},
	{
		name: "TEN",
		category:"Nitro",
		subscribe:"Fill the Nitro power in your car",
		price:'1000$'		
	}
]
class Main extends React.Component{

	constructor ( props){
		super(props);
		this.state = {
		 curFilter: ""
		}

		this.changeStuff = e => {
     		this.setState({
       		curFilter: e.target.value
       })

    }
}


	render(){

		return(
			<main >		
				<input className = 'magicInput' onInput= {this.changeStuff}/>	
				<Item className="main" items={goods} >		
					
  				</Item>
			</main>

			);		
	}
}
export default Main;