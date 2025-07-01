import Link from "next/link";
import styles from "./services.module.css";
import { services } from "@/app/data";
import Image from "next/image";

const Services = () => {
  console.log(services);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What we can do</h1>
      <h1 className={styles.subtitle}>Services we can help you with</h1>
      <div className={styles.services}>
        {services.map((index) => (
          <Link passHref key={index.id} href="/portfolio">
            <div className={styles.service}>
              <div className={styles.desc}>{index.desc}</div>
              <span className={styles.cat}>{index.title}</span>
              <div className={styles.media}>
                {index.video ? (
                  <video
                    controls
                    src={index.video}
                    autoPlay
                    muted
                    loop
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={index.photo}
                    alt="photo"
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                    className={styles.image}
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Services;
