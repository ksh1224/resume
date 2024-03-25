import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Section = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <section className={cn("mb-14", className)}>{children}</section>;
};

export default Section;
