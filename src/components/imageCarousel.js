// nextjs import
import Image from "next/image";

// styles import
import styles from "../styles/carousel.module.scss";

// react import
import { useEffect, useRef } from "react";

// gsap import
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

// drag functionality
gsap.registerPlugin(Draggable, InertiaPlugin);

export default function ImageCarousel() {
  let containerRef = useRef();
  let imageRef = useRef();

  console.log(imageRef);

  useEffect(() => {
    // Draggable.create(gsap.utils.toArray(".carouselImg"), {
    //   type: "x",
    //   bounds: ".carouselContainer",
    // });

    Draggable.create(imageRef.current, {
      type: "x",
      bounds: containerRef.current,
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.carouselContainer}>
      {/* {Array.from({ length: 3 }).map((_, index) => (
        <Image
          className={styles.carouselImg}
          key={index}
          src="/assets/motion.avif"
          height={175}
          width={265}
          alt="image"
        />
      ))} */}
      <Image
        ref={imageRef}
        className={styles.carouselImg}
        src="/assets/motion.avif"
        height={175}
        width={265}
        alt="image"
      />
    </div>
  );
}
