import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUserName: '',
      txtPassword: ''
    }
  }

  onChange = (even) => {
    var target = even.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit = (even) => {
    even.preventDefault();
    var { txtUserName, txtPassword } = this.state;
    if (txtUserName === 'admin' && txtPassword === 'admin') {
      localStorage.setItem('user', JSON.stringify({
        username: txtUserName,
        password: txtPassword
      }));
    }
  }
  render() {
    var { txtUserName, txtPassword } = this.state;
    var loggedInUser = localStorage.getItem('user');
    if (loggedInUser !== null) {
      var { location } = this.props;
      return <Redirect to={
        {
          pathname: '/products',
          state:{
            from: location
          }
        }
      } />
    }
    
    console.log(location);
    return (

      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

          <form onSubmit={this.onSubmit} >
            <legend>Đăng nhập</legend>

            <div className="form-group">
              <label>UserName:</label>
              <input type="text" className="form-control" name='txtUserName' value={txtUserName} onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="text" className="form-control" name='txtPassword' value={txtPassword} onChange={this.onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Đăng nhập</button>
          </form>

        </div>
      </div>

    );
  }
}

export default Login;
