"use client";
import { useRef, useState } from "react";
import styles from "./page.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [done, setDone] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm("service_c9dhxoq", "template_nx6tqat", formRef.current, {
          publicKey: "D7s2QtY9npU46KDNG",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setDone(true);
          },
          (error: { text: string }) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  }
  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h1>Get in touch</h1>
          <p>
            We are here to answer your questions and discuss your next project.
          </p>
        </div>
        <div className={styles.contactContent}>
          <div className={styles.contactForm}>
            <h2>Send Us a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  required
                  name="user_name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  required
                  name="user_email"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject of your message"
                  required
                  name="user_subject"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Type your message here..."
                  required
                  defaultValue={""}
                  name="message"
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
              {done && (
                <p className={styles.successMessage}>
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>
          <div className={styles.contactInfo}>
            <h2>Contact Details</h2>
            <p>
              <strong>Address:</strong> 28, Abiodun Shobanjo Street, Agidingbi,
              Ikeja, Lagos.
            </p>
            <p>
              <strong>Phone:</strong> +234 802 875 2742
            </p>
            <p>
              <strong>Email:</strong> lacreteconcept@gmail.com
            </p>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63411.34650611288!2d3.2885464919797114!3d6.62092010694631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s28%20abiodun%20shobajo%20street!5e0!3m2!1sen!2sng!4v1735844278596!5m2!1sen!2sng"
                width="100%"
                height={250}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
