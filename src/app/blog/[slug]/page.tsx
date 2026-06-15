"use client";

import { blogData } from "@/app/data";
import styles from "./page.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BlogDetail = () => {
  const route = usePathname();
  const item = blogData.find((i) => i.slug === route.split("/").pop());

  if (!item) {
    return (
      <div className={styles.notFound}>
        <h2>Blog post not found.</h2>
        <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
          <h1 className={styles.title}>{item.title}</h1>
        </header>

        {item.image && (
          <figure className={styles.imageContainer}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              className={styles.image}
            />
          </figure>
        )}

        <div className={styles.contentWrapper}>
          {item.content &&
            item.content
              .split("\n\n")
              .map((para, index) => (
                <p key={index} className={styles.paragraph}>
                  {para.trim()}
                </p>
              ))}
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
