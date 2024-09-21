import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import { BASE_URL } from '../../utils/const';
import classNames from 'classnames';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const classActiveNavLink = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.link, {
      [styles.activeLink]: isActive,
    });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logoBlock}>
          <img
            src={`${BASE_URL}/img/Logo.png`}
            alt="Logo"
            className={styles.logo}
          />
        </NavLink>

        <ul className={styles.list}>
          <NavLink
            to="https://github.com/andreyysak"
            target="blank"
            className={classActiveNavLink}
          >
            github
          </NavLink>
          <NavLink to="/contacts" className={classActiveNavLink}>
            contacts
          </NavLink>
          <NavLink to="/rights" className={classActiveNavLink}>
            rights
          </NavLink>
        </ul>

        <div className={styles.action}>
          <span className={styles.span}>Back to top</span>
          <button className={styles.buttonTop} onClick={handleScrollToTop}>
            <img
              src={`${BASE_URL}/icons/ArrowUp.svg`}
              alt="Back to top"
              className={styles.arrow}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
