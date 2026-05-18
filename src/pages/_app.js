// styles import
import "@/styles/globals.scss";

// react import
import { useLayoutEffect, useRef } from "react";

// gsap import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function App({ Component, pageProps }) {
  const appRef = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="smooth-wrapper" ref={appRef}>
      <div id="smooth-content">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
