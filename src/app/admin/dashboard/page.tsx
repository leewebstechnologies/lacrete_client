"use client";
import RequireAuth from "@/app/components/RequireAuth";
import styles from "./page.module.css";
import Sidebar from "../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <RequireAuth>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.sidebar}>
            <Sidebar />
            {/* <div className={styles.card}>
              <div className={styles.cardBody}>
                <h4>Admin Dashboard</h4>
              </div>
            </div> */}
          </div>
          <div className={styles.dashboard}>
            <div className={styles.card}>
              <div className={`${styles.cardBody} ${styles.center}`}>
                <h4 className={styles.title}>Welcome To Admin Dashboard</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
};
export default Dashboard;
