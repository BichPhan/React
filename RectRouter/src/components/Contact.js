import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }
  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked
    })
  }
  render() {
    var { isChecked } = this.state;
    return (
      <div>
        Đây là trang liên hệ
        <br />
        <button type="button" className="btn btn-danger" onClick={() => this.onClick(false)}>Cho Phép</button>
        <br />
        <button type="button" className="btn btn-info" onClick={() => this.onClick(true)}> Không Cho Phép</button>
        <Prompt
          when={isChecked}
          message={location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
        />

      </div>
    );
  }
}

export default Contact;
