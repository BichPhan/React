import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const menus = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Quản lý sản phẩm',
    to: '/product-list',
    exact: true
  },

]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={(match) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to} >{label}</Link>
          </li>
        )

      }}

    />
  );
};

class Menu extends Component {
  render() {

    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand" >Call API</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Trang chủ</a>
          </li>
          <li>
            <a >Quản lý sản phẩm</a>
          </li>
        </ul>
      </div>

    );
  }
}

export default Menu;
