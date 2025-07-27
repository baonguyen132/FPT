import styles from './NotFoundPageContent.module.scss';

function NotFoundPageContent() {
  return (
    <div className={styles.not_found_page}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Please check the URL or return to the home page.</p>
      <a href="/">Go to Home</a>
    </div>
  );
}

export default NotFoundPageContent;
