"use client";
import { useEffect, useState } from "react";
import { slides } from "@/app/data";
import styles from "./hero.module.css";
import Link from "next/link";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
      let interval: NodeJS.Timeout;

      if (isAutoPlaying) {
        interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
      }

      return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
      setCurrentSlide(index);
      setIsAutoPlaying(false);
      // Resume auto-play after manual navigation
      setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToPrevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    };
  return (
    <div className={styles.carousel}>
      {/* Slides */}
      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
            aria-hidden={index !== currentSlide}
          >
            <div className={styles.slideContent}>
              <h2 className={styles.title}>{slide.title}</h2>
              <p className={styles.subtitle}>{slide.subtitle}</p>
              <Link href={slide.ctaLink} className={styles.ctaButton}>
                {slide.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className={`${styles.arrow} ${styles.prev}`}
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button
        className={`${styles.arrow} ${styles.next}`}
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
export default Hero