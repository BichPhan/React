import React, { Component } from 'react';

class SizeSetting extends Component {
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    <button type="button" classNameName="btn btn-success">Giảm</button>
                    <button type="button" classNameName="btn btn-success">Tăng</button>
                </div>
            </div >
        );
    }
}

export default SizeSetting;
