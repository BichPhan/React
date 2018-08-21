import React, { Component } from 'react';

class Product extends Component {

  // onAddtoCard(){
  //   alert(this.props.children+' : '+this.props.price);
  // }

  onAddtoCard2 = () => {
      alert(this.props.children+' : '+this.props.price);
    }

  render() {
    return (
      <div className="container">
        <img alt={this.props.children } src={this.props.image}/>
        <p>{this.props.children}</p>
        <p>{this.props.price}</p>
        <button type="button" className="btn btn-success" onClick={ this.onAddtoCard2} >Mua ngay</button>
      </div>  
        );
      }
    }
    
    export default Product;
