"use client";

import { blogData } from "@/app/data";
import styles from "./page.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";


const BlogDetail = () => {

  const route = usePathname();
  const item = blogData.find((i) => i.slug === route.split("/").pop());

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
