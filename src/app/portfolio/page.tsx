import styles from "./portfolio.module.css";
import Filter from "../components/filter/Filter";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <Image src="/images/portfolio/banner.jpg" alt="banner" fill priority className={styles.image} />
      </div>
      <div className={styles.portfolio}>
        <h2 className={styles.text}>Our Work</h2>
        <Filter />
      </div>
    </>
  );
};
export default Portfolio;
