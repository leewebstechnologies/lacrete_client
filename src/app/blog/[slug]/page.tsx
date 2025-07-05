import { blogData } from "@/app/data";
import styles from "./page.module.css";
import Image from "next/image";

interface BlogDetailProps {
  params: { slug: string };
}

const BlogDetail = ({ params }: BlogDetailProps) => {
  const item = blogData.find((i) => i.slug === params.slug);

  if (!item) {
    return <div className={styles.notFound}>Blog post not found.</div>;
  }
  

  return (
    <div className={styles.detail}>
      <h1>{item.title}</h1>
      {item.image && (
        <Image
          src={item.image}
          alt={item.title}
          className={styles.image}
          width={500}
          height={400}
        />
      )}
      {item.content
        ? item.content
            .split("\n\n")
            .map((para, item) => <p key={item}>{para}</p>)
        : null}
    </div>
  );
};

export default BlogDetail;




