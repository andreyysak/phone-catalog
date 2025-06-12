import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.empty}>
      <img
        className={styles.emptyImg}
        src={'./img/page-not-found.png'}
        alt="Not Found"
      />
    </div>
  );
};

export default NotFoundPage;
