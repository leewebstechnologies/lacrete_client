import styles from "./years.module.css";
import recommendation from "../../../images/recommendation.png";
import experts from "../../../images/experts.png";
import expertise from "../../../images/expertise.png";
import Image from "next/image";

const Years = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.item}>
        <Image
          className={styles.itemIcon}
          width={50}
          height={50}
          src={recommendation}
          alt="experience"
        />
        <span className={styles.text}>Many years of experience</span>
      </div>
      <div className={styles.item}>
        <Image
          className={styles.itemIcon}
          width={50}
          height={50}
          src={experts}
          alt="experience"
        />
        <span className={styles.text}>Team of experts</span>
      </div>
      <div className={styles.item}>
        <Image
          className={styles.itemIcon}
          width={50}
          height={50}
          src={expertise}
          alt="experience"
        />
        <span className={styles.text}>Countless number of happy clients</span>
      </div>
    </div>
  );
};
export default Years;
