import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import Product from './Product'

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: 'iphone',
        name: 'iphone X',
        price: 350000000
      },
      {
        id: 2,
        slug: 'samsung',
        name: 'sam sung',
        price: 300000000
      },
      {
        id: 3,
        slug: 'oppo',
        name: 'oppo F1s',
        price: 450000000
      }
    ];
    var { match } = this.props;
    var url = match.url;

    var result = products.map((product, index) => {
      return (
        <NavLink key={index} to={`${url}/${product.slug}`}>
          <li className="list-group-item">
            {product.id}-{product.name}={product.price}
          </li>
        </NavLink>
      )
    });
    var {location} = this.props;
    console.log(location);
    return (
      <div className='container'>
        <h1>
          Danh sách sản phẩm</h1>
        <div className="row">
          <ul className="list-group">
            {result}
          </ul>
        </div>

        <div className="row">
          {/* //truyền biến match sang cho Product */}
          <Route path='/products/:name' component={Product} />
        </div>

      </div>
    );
  }
}

export default Products;
