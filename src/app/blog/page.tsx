import Image from "next/image";
import styles from "./page.module.css";
import { blogData } from "../data";
import BlogCard from "../components/blogCard/BlogCard";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <section className={styles.heroSection}>
        <Image
          src="/images/portfolio/banner.jpg"
          alt="Our Blog Banner"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Insights & Innovations</h1>
          <p className={styles.heroSubtitle}>
            Discover our latest thoughts on architecture, sustainable building, and the future of construction.
          </p>
        </div>
      </section>

      <main className={styles.mainContent}>
        <div className={styles.grid}>
          {blogData.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
