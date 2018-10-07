import React, { Component } from 'react';
import { connect } from 'react-redux'
import Message from './../components/Message';
import PropTypes from 'prop-types';


class MessageContainer extends Component {

    render() {
        var { message } = this.props;
        return (
            <Message message={message} />
        );
    }

}

//check biến có đúng kiểu dữ liệu ko sử dụng propType
MessageContainer.propTypes = {
    message: PropTypes.array.isRequired,

}

const mapStateToProp = state => {
    return {
        message: state.message
    }
}


export default connect(mapStateToProp, null)(MessageContainer);
