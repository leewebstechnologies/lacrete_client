import Image from "next/image";
import Link from "next/link";
import styles from "./blogCard.module.css"; // Adjust the path as necessary

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
    <div className={styles.card}>
      <Image
        src={item.image}
        alt={item.title}
        width={1000}
        height={300}
        className={styles.image}
      />
      <div className={styles.content}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <Link href={`/blog/${item.slug}`} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </div>
  );
}
export default BlogCard