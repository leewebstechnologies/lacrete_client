import Hero from "./components/hero/Hero";
import Quick from "./components/quick/Quick";
import Testimonial from "./components/testimonial/Testimonial";
import VideoSection from "./components/videoSection/VideoSection";
import Welcome from "./components/welcome/Welcome";
import Why from "./components/why/Why";
import Years from "./components/years/Years";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Quick />
      <Welcome />
      <Years />
      <Why />
      <Testimonial />
    </>
  );
}
