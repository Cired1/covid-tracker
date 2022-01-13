import Card from "../Card/Card";
import styles from "./CardList.module.css";

const CardList = ({ confirmed, deaths, recovered, lastUpdate }) => {
  return (
    <section className={styles.wrapper}>
      <Card
        title="Infectados"
        total={confirmed}
        date={lastUpdate.substring(0,10).replaceAll("-", "/")}
        desc="Número de casos activos de covid"
        borderColor="#f77427"
      />

      <Card
        title="Defunciones"
        total={deaths}
        date={lastUpdate.substring(0,10).replaceAll("-", "/")}
        desc="Número de muertes por covid"
        borderColor="#ec314b"
      />

      <Card
        title="Recuperados"
        total={recovered}
        date={lastUpdate.substring(0,10).replaceAll("-", "/")}
        desc="Número de casos recuperados de covid"
        borderColor="#05b584"
      />
    </section>
  );
};

export default CardList;
