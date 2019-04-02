import React from "react";

class Receipt extends React.Component {
  
  renderItem(item) {
    return (
      <div className="receipt-item" key={item.productName}>
        <div className="receipt-text">
          {item.productName} x {item.count}
        </div>
        <div className="receipt-text">
          ${(item.count * item.price).toFixed(2)}
        </div>
      </div>
      );
  }

  calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      total += item.count * item.price;
    }
    return total.toFixed(2);
  }

  render() {
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.calculateTotal(items)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;