import Image from "next/image";
import styles from "./page.module.css";
import { blogData } from "../data";
import BlogCard from "../components/blogCard/BlogCard";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/portfolio/banner.jpg"
          alt="banner"
          fill
          priority
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h2>Our Blog</h2>
        <p className={styles.description}>
          We offer a diverse array of building and construction services, spanning
          residential, commercial, and industrial projects.
        </p>
      </div>
      <div className={styles.grid}>
        {blogData.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
