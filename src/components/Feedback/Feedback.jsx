import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positivePercentage }) => {
  return (
    <div className={styles.feedbackContainer}>
      <h2>Statistics</h2>
      <p>Good: <span>{good}</span></p>
      <p>Neutral: <span>{neutral}</span></p>
      <p>Bad: <span>{bad}</span></p>
      <p>Total feedback: <span>{totalFeedback}</span></p>
      <p>Positive feedback: <span>{positivePercentage}%</span></p>
    </div>
  );
};

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Feedback;