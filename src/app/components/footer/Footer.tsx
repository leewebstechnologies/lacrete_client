import Link from "next/link";
import Image from "next/image";
import logo from "../../../images/logo.png";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.footerCenterOne}>
        <h4 className={styles.quickLinks}>Quick Links</h4>
        <ul className={styles.ul}>
          <li>
            <Link className={styles.footerItems} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.footerItems} href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className={styles.footerItems} href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className={styles.footerItems} href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={styles.footerItems} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerCentertwo}>
        <h4 className={styles.contact}>Contact Us</h4>
        <p className={styles.footerItems}>
          28, Abiodun Shobanjo Street, Agidingbi, Ikeja, Lagos.
        </p>
        <p className={styles.footerItems}>Email: lacreteconcept@gmail.com</p>
        <p className={styles.footerItems}>Phone: +234 802 875 2742</p>
      </div>
      <div className={styles.footerRight}>
        <h4>Follow Us</h4>
        <div className={styles.socialIcons}>
          <ul className={styles.socialList}>
            <li>
              <Link
                className={styles.footerItems}
                href="https://wa.me/+2348028752742"
              >
                <i className="icon fa-brands fa-square-whatsapp"></i>
              </Link>
            </li>
            <li>
              <Link
                className={styles.footerItems}
                href="https://www.tiktok.com/@lacrete_concept?_t=ZM-8tR5goUupDp&_r=1"
              >
                <i className="icon fa-brands fa-tiktok"></i>
              </Link>
            </li>
            <li>
              <Link
                className={styles.footerItems}
                href="https://www.instagram.com/lacrete2025"
              >
                <i className="icon fa-brands fa-square-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                className={styles.footerItems}
                href="https://web.facebook.com/Lacreteconcept"
              >
                <i className="icon fa-brands fa-square-facebook"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
