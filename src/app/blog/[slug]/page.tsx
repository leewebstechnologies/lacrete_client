import React from "react";
import type { JSX } from "react";
import { blogData } from "@/app/data";
import styles from "./page.module.css";
import Image from "next/image";

interface BlogDetailProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const BlogDetail = ({ params }: BlogDetailProps): JSX.Element => {
  const item = blogData.find((i) => i.slug === params.slug);

  if (!item) {
    return <div className={styles.detail}>Blog post not found.</div>;
  }

  return (
    <div className={styles.detail}>
      <h1>{item.title}</h1>
      <Image
        src={item.image}
        alt={item.title}
        className={styles.image}
        width={400}
        height={400}
        priority
      />
      {item.content.split("\n\n").map((para, index) => (
        <p className={styles.p} key={index}>
          {para}
        </p>
      ))}
    </div>
  );
};

export default BlogDetail;
