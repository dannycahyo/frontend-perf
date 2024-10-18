import { useEffect, useRef } from "react";

const useLazyLoadImage = (src) => {
  const imgRef = useRef();

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = src;
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(img);

    return () => {
      if (img) observer.unobserve(img);
    };
  }, [src]);

  return imgRef;
};

export default useLazyLoadImage;
