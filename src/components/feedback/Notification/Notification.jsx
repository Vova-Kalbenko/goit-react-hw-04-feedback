import PropTypes from 'prop-types';
// import style from './Notification.module.css';

export const Notification = ({ message }) => {
  return <div>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

// создание уведомления. дескрутк параметр меседж в функцию приезжает с мейн файла,
// благодаря подвязке на 53 строке