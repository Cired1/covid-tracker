import styles from "./Card.module.css";

const Card = ({ title, total, date, desc, borderColor }) => {
  return (
    <article
      className={styles.wrapper}
      style={{ borderBottom: `2px solid ${borderColor}` }}
    >
      <h3>{title}</h3>
      <span className={styles.total} style={{ color: `${borderColor}` }}>
        {total.toLocaleString("en-US")}
      </span>
      <p>Ultima actualización: {date}</p>
      <p>{desc}</p>
    </article>
  );
};

export default Card;
