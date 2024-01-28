import css from "./FeedbackOptions.module.css";
import React from "react";
import PropTypes from 'prop-types';



const FeedbackOptions = ({options, onLeaveFeedback}) => (
        options.map(option => {
          return  <button type = 'button' className={css.buttons} onClick = {() => onLeaveFeedback(option)} key = {option}>{option}</button>
       })
    
)

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;