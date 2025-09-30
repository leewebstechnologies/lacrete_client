import Link from "next/link";
import styles from "./sidebar.module.css";
import { useContext } from "react";
import { AuthContext } from "@/app/context/Auth";

const Sidebar = () => {
  // const {logout} = useContext(AuthContext);
  const authContext = useContext(AuthContext);
  const logout = authContext?.logout;
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <h4 className={styles.title}>Sidebar</h4>
        <ul className={styles.list}>
          <li>
            <Link className={styles.listItem} href="/">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} href="/">
              Slides
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} href="/">
              Testimonial
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} href="/">
              Video
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} href="/">
              Portfolio
            </Link>
          </li>
           <li>
            <Link className={styles.listItem} href="/">
              Blog
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className={styles.button}
              disabled={!logout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
