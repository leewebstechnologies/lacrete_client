import Image from "next/image";
import styles from "./page.module.css";

const Blog = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <Image
          src="/images/portfolio/banner.jpg"
          alt="banner"
          fill
          priority
          className={styles.image}
        />
      </div>
      <section className={`${styles.section} ${styles.bgLight} ${styles.py5}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.textCenter}`}>
            <span>Blog & News</span>
            <h2>Articles & Blog Posts</h2>
            <p>
              We offer a diverse array of construction services, spanning
              residential, commercial, and industrial projects.
            </p>
          </div>
          <div className={`${styles.row} ${styles.pt3}`}>
            <div className={styles.colMd4}>
              <div
                className={`${styles.card} ${styles.shadow} ${styles.border0}`}
              >
                <div className={styles.cardImgTop}>
                  <Image
                    src="/images/blog/collapse.jpg"
                    alt="blog-1"
                    width={1000}
                    height={50}
                    className={styles.imgFluid}
                    layout="responsive"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>Blog Post Title 1</h5>
                  <p className={styles.cardText}>
                    A brief description of the blog post content goes here.
                  </p>
                  <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
