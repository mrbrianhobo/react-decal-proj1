import React from "react";
import "./styles/cart.css";

import Product from "./Product";
import ProductData from "./Data"

class Cart extends React.Component {

	render() {
		let productList = ProductData.products.map(p => <Product productName={p.name} price={p.cost} limit={p.stock} />);
		
		return (
			<div className="page-content ui cards">
				{productList}
			</div>
		);
	}

}

export default Cart;
