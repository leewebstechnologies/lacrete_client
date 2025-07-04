// app/components/VideoSection.tsx

import { videoSectionData } from "@/app/data";
import styles from "./videoSection.module.css";

const VideoSection = () => {
  return (
    <div className={styles.videos}>
      <h2 className={styles.text}>Watch our videos</h2>
      <div className={styles.videoGrid}>
        {videoSectionData.map((item) => (
          <video key={item.id} className={styles.video} controls>
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}

        {/* <video className={styles.video} controls>
          <source src="/videos/4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className={styles.video} controls>
          <source src="/videos/5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className={styles.video} controls>
          <source src="/videos/6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  );
};

export default VideoSection;
