import propTypes from 'prop-types';
import style from './Feedback.modele.css';

export default function Feedback({ options, onReview }) {
  return (
    <div className={style.controls}>
      {options.map(type => (
        <button
          className={style.button}
          key={type}
          onClick={onReview}
          data-type={type}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
Feedback.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onReview: propTypes.func.isRequired,
};
