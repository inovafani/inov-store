import styles from './Register.module.scss';
import Link from 'next/link';

const RegisterView = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      <div className={styles.register__form}>
        <form action="">
          <div className={styles.register__form__item}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="fullname">Fullname</label>
            <input
              name="fullname"
              id="fullname"
              type="text"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              id="phone"
              type="text"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              className={styles.register__form__item__input}
            />
          </div>
          <button className={styles.register__form__button}>Register</button>
        </form>
      </div>
      <p className={styles.register__link}>
        Have an account? Sign In <Link href="/auth/login">here</Link>
      </p>
    </div>
  );
};

export default RegisterView;
