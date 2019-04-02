import React from "react";
import "./styles/cart.css";

import Product from "./Product";
import ProductData from "./Data";
import Receipt from "./Receipt";

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {cartItems: []};
	}

	handleAddToCart(productName, price) {
		let items = this.state.cartItems;
		for (let i = 0; i < items.length; i++) {
			let item = items[i];
			if (productName === item.productName) {
				item.count += 1;
				this.setState({cartItems: items});
				return;
			}
		}
		let item = {productName: productName, price: price, count: 1};
		items.push(item);
		this.setState({cartItems: items});
		return;
	}

	handleRemoveFromCart(productName) {
		let items = this.state.cartItems.filter(item => item.productName !== productName);
		this.setState({cartItems: items});
	}

	render() {
		let productList = ProductData.products.map(p => <Product productName={p.name} price={p.cost} onAddToCart={() => this.handleAddToCart(p.name, p.cost)} onRemoveFromCart={() => this.handleRemoveFromCart(p.name)} />);
		
		return (
			<div className="page-content">
				<div className="ui cards">
					{productList}
					<Receipt items={this.state.cartItems} />
				</div>
			</div>
		);
	}

}

export default Cart;
