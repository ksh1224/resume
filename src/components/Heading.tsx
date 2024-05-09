import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Heading = ({
  children,
  className,
  level,
}: {
  children: ReactNode;
  className?: string;
  level: 1 | 2 | 3;
}) => {
  return (
    <h3
      className={cn(
        "mb-4",
        level === 1
          ? "font-semibold typo-subtitle2 xs:typo-heading3"
          : level === 2
            ? "font-semibold typo-subtitle2"
            : "font-semibold typo-subtitle4",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default Heading;
