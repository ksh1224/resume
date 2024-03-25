import { cn } from "@/lib/utils";
import { createElement, ReactNode, useEffect, useRef, useState } from "react";

type FadeInUpElementProps<T extends keyof JSX.IntrinsicElements> = {
  elementType?: T;
  children?: ReactNode;
} & JSX.IntrinsicElements[T];

function FadeInUpElement<T extends keyof JSX.IntrinsicElements>({
  elementType,
  children,
  ...attributes
}: FadeInUpElementProps<T>) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return createElement(
    elementType ?? "div",
    {
      ...attributes,
      ref: domRef,
      className: cn(
        `transition-opacity duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`,
        attributes?.className,
      ),
    },
    children,
  );
}

export default FadeInUpElement;
