import { useEffect, useState } from "react";

export function useIsVisible(ref: React.MutableRefObject<HTMLElement | null>) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          // setIntersecting(entry.isIntersecting)
          if (entry.isIntersecting && !isIntersecting) {
              setIntersecting(true);
              // Disconnect the observer after the first intersection
              observer.disconnect();
          }
      });
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }