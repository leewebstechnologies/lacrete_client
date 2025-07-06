import { blogData } from "@/app/data";
import styles from "./page.module.css";
import Image from "next/image";

interface BlogDetailProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const BlogDetail = async ({ params }: BlogDetailProps) => {
  const item = blogData.find((i) => i.slug === params.slug);
  console.log(item);
  console.log(params);
  if (!item) {
    return <div className={styles.notFound}>Blog post not found.</div>;
  }

  return (
    <article className={styles.detail}>
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

      {item.content &&
        item.content
          .split("\n\n")
          .map((para, index) => <p key={index}>{para}</p>)}
    </article>
  );
};

export default BlogDetail;
