import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import routes from '../../routes/routes';
import styles from './LoginView.module.css';

const LoginView = () => {
  const [state, setState] = useState({ phone: '+380', password: '' });
  let history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState({ phone: '+380', password: '' });
    history.push(routes.request);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log in to your account</h1>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Phone number
          <input
            className={styles.input}
            type="tel"
            name="phone"
            onChange={handleChange}
            value={state.phone}
            pattern="^\+?3?8?(0[\s\.-]\d{2}[\s\.-]\d{3}[\s\.-]\d{2}[\s\.-]\d{2})$"
            title="Неправильный номер телефона или пароль. "
            required
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginView;
