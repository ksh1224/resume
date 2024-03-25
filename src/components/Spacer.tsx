import { cn } from "@/lib/utils";

const Spacer = ({ className }: { className?: string }) => {
  return <div className={cn("block flex-shrink-0", className)} />;
};

export default Spacer;
