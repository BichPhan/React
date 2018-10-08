import React, { Component } from 'react';

class Product extends Component {

  render() {
    var { match } = this.props; // Lấy từ Products
    var { name } = match.params;
    return (
      <h1>
        Đây là chi tiết sản phẩm: {name}
      </h1>
    );
  }
}

export default Product;
