import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// В чилдрен приезжает разметка кнопок которая береться по логике вложености с
// обычного ХТМЛ (36-39 строка вложена в секцию) МЕЙНА

// тайтл подтягиваеться с 43 строки МЕЙНА