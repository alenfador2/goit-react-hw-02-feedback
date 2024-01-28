import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

   
function Statistics ({good, neutral, bad, total, positivePercentage}) {
        return(<><ul className={css.statistic}>
        <li className={css['good-counter']}>Good: {good}</li>
        <li className={css['neutral-counter']}>Neutral: {neutral}</li>
        <li className={css['bad-counter']}>Bad: {bad}</li>
        <li className={css['total-counter']}>Total: {total}</li>
        <li className={css['percentage']}>Percentage: {positivePercentage}%</li>
       </ul></>)
    }


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    countTotalFeedback: PropTypes.func,
    countPositiveFeedbackPercentage: PropTypes.func,
  };

export default Statistics;