// app/components/VideoSection.tsx

import styles from "./videoSection.module.css";

const VideoSection = () => {
  return (
    <div className={styles.videos}>
      <h2 className={styles.text}>Watch our videos</h2>
      <div className={styles.videoGrid}>
        <video className={styles.video} controls>
          <source src="/videos/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className={styles.video} controls>
          <source src="/videos/2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
