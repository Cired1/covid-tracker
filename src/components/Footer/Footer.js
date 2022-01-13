import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.center}>
        <p>
          Información proporcionada por{" "}
          <a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noreferrer">Covid 19 API</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
