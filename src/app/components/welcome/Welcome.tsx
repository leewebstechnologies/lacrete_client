import Image from "next/image";
import styles from "./welcome.module.css";
import img7 from "../../../images/7.png";

const Welcome = () => {
  return (
    <>
      <div className={styles.welcome}>
        <Image className={styles.banner3} src={img7} alt="img7" />
        <div className={styles.years}>
          <h3>Many years of experience</h3>
          <h2>Welcome to Lacrete Concept Construction Company</h2>
          <hr className={styles.line} />
          <h3>Our Mission</h3>
          <p>
            LA CRETE CONCEPT Mission and Policy statement is to render the best
            quality services available anywhere with a view of providing optimum
            customer / client satisfaction through better and consistently
            improving operational procedures.
          </p>
          <h4>What we do:</h4>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <i
                className="circle-arrow fa-solid fa-circle-arrow-right"
                style={{ color: "#25b60f" }}
              />
              <span className={styles.text}>
                Building / Civil Designs (Building Plan & Structural Drawings)
              </span>
            </div>
            <div className={styles.icon}>
              <i
                className="circle-arrow fa-solid fa-circle-arrow-right"
                style={{ color: "#25b60f" }}
              ></i>
              <span className={styles.text}>
                Building & Civil Construction Services
              </span>
            </div>
            <div className={styles.icon}>
              <i
                className="circle-arrow fa-solid fa-circle-arrow-right"
                style={{ color: "#25b60f" }}
              ></i>
              <span className={styles.text}>
                Building Renovation & Maintenance
              </span>
            </div>
            <div className={styles.icon}>
              <i
                className="circle-arrow fa-solid fa-circle-arrow-right"
                style={{ color: "#25b60f" }}
              ></i>
              <span className={styles.text}>Steel Works</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Welcome;
