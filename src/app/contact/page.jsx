"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { API_BASE_URL } from "@/config/config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  console.log(formData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error
            ? JSON.stringify(errorData.errors)
            : "Something went wrong",
        );
      }

      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
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
            <form onSubmit={handleSubmit}>
              {successMessage && (
                <p className="text-green-800">{successMessage}</p>
              )}
              {errorMessage && <p className="text-red-800">{errorMessage}</p>}
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject of your message"
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Type your message here..."
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending ..." : "Send Message"}
              </button>
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
