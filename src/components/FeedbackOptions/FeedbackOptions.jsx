import PropTypes from 'prop-types';

import style from './FeedbackOptions.module.scss';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const btnNamesArr = Object.keys(options);
  return (
    <>
      <ul className={style.list__button}>
        {btnNamesArr.map(btmName => (
          <li key={btmName}>
            <button
              id={btmName}
              onClick={onLeaveFeedback}
              className={style.btn}
            >
              {btmName.charAt(0).toUpperCase() + btmName.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
