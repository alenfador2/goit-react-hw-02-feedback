import css from './Notification.module.css';
import PropTypes from 'prop-types';
import {Component} from 'react';


class Notification extends Component{
render(){
    const {message} = this.props;
    return(<>
    <h2 className={css['notification-header']}>{message}</h2>
    </>)
}
}

Notification.propTypes ={
    message: PropTypes.string.isRequired,
}

export default Notification;