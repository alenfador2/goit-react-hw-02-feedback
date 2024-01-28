import PropTypes from 'prop-types';
import css from './Container.module.css';
import { Component } from 'react';


class Container extends Component{
    render() {
        const { children } = this.props;
        return (<><div className={css.main_container}>{children}</div></>)
    }
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Container