import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Apple Iphone 6',
          price: 5000000,
          image: 'https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-vang-400-400x460.png',
          status: true,
        },
        {
          id: 2,
          name: 'SAM SUNG 7',
          price: 5000000,
          image: 'https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-vang-400-400x460.png',
          status: true,
        },
        {
          id: 3,
          name: 'Apple Iphone 8',
          price: 5000000,
          image: 'https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-vang-400-400x460.png',
          status: false,
        },
      ],
      isAtive: true
    };
  }

  onsetState = () => {
    // if(this.state.isAtive===true){
    //   this.setState({
    //     isAtive:false
    //   });
    // }else{
    //   this.setState({
    //     isAtive:true
    //   });
    // }
    this.setState({
      isAtive: !this.state.isAtive
    })

  }

  render() {

    var elements = this.state.products.map((products, index) => {
      let result = '';
      if (products.status) {
        result = <tr key={index}>
          <td>{index}</td>
          <td>{products.name}</td>
          <td><span className="label label-success">{products.price}</span></td>
        </tr>
      }
      return result;
    });


    return (
      <div className="container">
        <div className="row">
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                {elements}
              </tbody>
            </table>
            <button type="button" className="btn btn-warning" onClick={this.onsetState} >
              Active : {this.state.isAtive === true ? 'true' : 'false'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
