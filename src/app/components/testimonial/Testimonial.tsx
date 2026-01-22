import { testimonialData } from "@/app/data";
import styles from "./testimonial.module.css";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectiontTitle}>What Our Clients Say</h2>
        <p className={styles.sectionSubtitle}>
          Do not just take our word for it - here is what our clients have to say
          about their experience with us.
        </p>
        <div className={styles.testimonialGrid}>
          {testimonialData.map((item) => (
            <div key={item.id} className={styles.testimonialCard}>
              <p className={styles.testimonialText}>{item.comment}</p>
              <div className={styles.testimonialAuthor}>
                <Image
                  src={item.image}
                  alt="client's avatar"
                  className={styles.authorImg}
                />
                <div className={styles.authorInfo}>
                  <h4 className={styles.name}>{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
