import React, { Component } from 'react';
import callApi from './../../utils/apiCaller'
import {Link} from 'react-router-dom'


class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        var { txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        callApi('products', 'POST', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }).then(res => {
            history.goBack();
        })

    }
    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave} >
                    <div className="form-group">
                        <label >Tên sản phẩm:</label>
                        <input type="text" className="form-control" name='txtName' value={txtName} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Giá sản phẩm:</label>
                        <input type="number" className="form-control" name='txtPrice' value={txtPrice} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Trạng thái:</label>

                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="" name='chkbStatus' value={chkbStatus} onChange={this.onChange} />
                                Còn hàng
                           </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mr-10">Lưu lại</button>
                    <Link to='/product-list' className='btn btn-danger'>Trở lại</Link>
                </form>

            </div>
        );
    }


}

export default ProductActionPage;
