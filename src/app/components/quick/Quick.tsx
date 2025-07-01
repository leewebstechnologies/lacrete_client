import Link from "next/link";
import styles from "./quick.module.css";

const Quick = () => {
  return (
    <>
      <div className={styles.quick}>
        <h2 className={styles.text}>
          Looking for a quality constructor for your next project?
        </h2>
        <Link className={styles.button} href="/contact">
          Get in touch
        </Link>
      </div>
    </>
  );
};
export default Quick;
