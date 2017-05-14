import React, {Component} from 'react';
import { render } from "react-dom";



class Item extends React.Component{

	render(){


		return(
			<div className = 'item' style = {style}
				{this.probs.items.map((it, index)=>
					<div className='item index'>
					<h4>{it.name}</h4>
					<h5>{it.category}</h5>
					<p>{it.suscribe}</p>
					<span>{it.price}</span>
					</div>
					)}
				<Button/>
			</div>
			);		
	}
}

class Button extends React.Component{

	render(){
		return(
			<div >
				<button>Buy</button>
			</div>
		)
	}
}
export default Item;