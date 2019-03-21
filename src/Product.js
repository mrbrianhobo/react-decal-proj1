import React from "react";
import "./styles/cart.css";

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: 0};
	}

	addToCart() {
		if (this.props.limit === 0) {
			alert("This item is out of stock!");
		} else if (this.state.count >= this.props.limit) {
			alert("There are too many " + this.props.productName + " in your cart!");
		} else {
			this.setState({count: this.state.count + 1})
			alert("There are " + (this.state.count + 1) + " " + this.props.productName + " in your cart!");
		}
	}

	render() {
		return (
			<div className="card">
				<div className="content">
					<div className="header">{this.props.productName}</div>
					<div className="description">
						Price: ${this.props.price}
					</div>
				</div>
				<div className="ui bottom attached button" onClick={() => this.addToCart()}>
					<i className="add icon"></i>
					Add to Cart
				</div>
			</div>
		);
	}

}

export default Product;