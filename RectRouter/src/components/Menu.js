import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

const menus = [
  {
    to: '/',
    name: 'Trang chủ',
    exact: true
  },
  {
    to: '/about',
    name: 'Giới thiệu',
    exact: false
  },
  {
    to: '/contact',
    name: 'Liên hệ',
    exact: false
  },
  {
    to: '/products',
    name: 'Sản phẩm',
    exact: false
  },
  {
    to: '/login',
    name: 'Đăng nhập',
    exact: false
  }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'active abc' : '';
        return (
          <li className={`my-li ${active}`}>
            <Link to={to} className='my-link'>
              {label}
            </Link>
          </li>)
      }
      } />
  )
}
class Menu extends Component {
  render() {
    return (
      < nav className="navbar navbar-default" >
        <ul className="nav navbar-nav">
          {this.showmenus(menus)}
        </ul>
      </nav >
    );
  }
  showmenus = (menus) => {
    var result = null;
       if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        )
      });
    }
    return result;
  }
}

export default Menu;
