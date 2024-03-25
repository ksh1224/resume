import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Heading = ({
  children,
  level,
}: {
  children: ReactNode;
  level: 1 | 3;
}) => {
  return (
    <h3
      className={cn(
        "mb-4",
        level === 1
          ? "font-semibold typo-subtitle2 xs:typo-heading3"
          : "font-semibold typo-subtitle4",
      )}
    >
      {children}
    </h3>
  );
};

export default Heading;
