import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            name={option}
            className={css.button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
//В файле фидбэкопшен создаёт разметку кнопок методом map() который делает столько
//же кнопок сколько в МАСИВЕ [good,neutral,bad] который мы сделали с помощью метода
//object.keys(this.state). + Задали ключ, нейм, и клик на эту опцию
// опшена приезжают с 31 строки МЕЙН файла,(это масив ключей) сделаный с памощью
// Object.keys(this.state);!!!!!!!!!
