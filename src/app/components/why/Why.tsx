import styles from "./why.module.css";
const Why = () => {
  return (
    <>
      <div className={styles.why}>
        <div className={styles.whyContent}>
          <div className={styles.content}>
            <h2>Our Special Support</h2>
            <h1>Why choose us?</h1>
          </div>

          <br />
          <p className={styles.text}>
            LA CRETE CONCEPT encourages employees to participate in safety
            courses, and other CASHES training programs. We are committed to
            ensuring a clean and healthy environment especially in the course of
            work. Every effort will be concentrated towards minimization of
            noise, and other pollution agents released during our jobs. It is
            expected of every employee to provide healthy, safe and
            environmentally accepted conditions both at work and at home. All
            jobs executed by this company shall comply with accepted codes of
            standard practices. All specifications stipulated in the drawings
            and contract documents must be strictly complied with. Necessary
            precautions must be taken and safe work practices and methods
            employed throughout the execution of the job.
          </p>
          <div className={styles.whyItems}>
            <div className={styles.whyItemsFirst}>
              <div className={styles.icons}>
                <div className={styles.icon}>
                  <i
                    className="circle-arrow fa-solid fa-circle-arrow-right"
                    style={{ color: "#25b60f" }}
                  ></i>
                  <span className={styles.whyContents}>
                    Expert & Professional
                  </span>
                </div>
                <div className={styles.icon}>
                  <i
                    className="circle-arrow fa-solid fa-circle-arrow-right"
                    style={{ color: "#25b60f" }}
                  ></i>
                  <span className={styles.whyContents}>High Quality Work</span>
                </div>
                <div className={styles.icon}>
                  <i
                    className="circle-arrow fa-solid fa-circle-arrow-right"
                    style={{ color: "#25b60f" }}
                  ></i>
                  <span className={styles.whyContents}>Quick In Response</span>
                </div>
              </div>
            </div>
            <div className={styles.whyItemsSecond}>
              <div className={styles.icons}>
                <div className={styles.icon}>
                  <i
                    className="circle-arrow fa-solid fa-circle-arrow-right"
                    style={{ color: "#25b60f" }}
                  ></i>
                  <span className={styles.whyContents}>
                    Professional Approach
                  </span>
                </div>
                <div className={styles.icon}>
                  <i
                    className="circle-arrow fa-solid fa-circle-arrow-right"
                    style={{ color: "#25b60f" }}
                  ></i>
                  <span className={styles.whyContents}>
                    Satisfaction Guarantee
                  </span>
                </div>
                <div className={styles.icon}>
                  <i
                    className="circle-arrow fa-solid fa-circle-arrow-right"
                    style={{ color: "#25b60f" }}
                  ></i>
                  <span className={styles.whyContents}>
                    Superior Quality Materials
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Why;
