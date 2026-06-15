import Image from "next/image";
import Link from "next/link";
import styles from "./blogCard.module.css";

interface BlogCardItem {
  image: string;
  title: string;
  desc: string;
  slug: string;
}

interface BlogCardProps {
  item: BlogCardItem;
}

const BlogCard: React.FC<BlogCardProps> = ({ item }) => {
  return (
    <Link href={`/blog/${item.slug}`} className={styles.cardLink}>
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.desc}>{item.desc}</p>
          <div className={styles.footer}>
            <span className={styles.readMore}>
              Read Article
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;