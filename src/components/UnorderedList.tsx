import { cn } from "@/lib/utils";
import { ReactNode, useId } from "react";

const UnorderedList = ({
  className,
  contents,
}: {
  className?: string;
  contents: (
    | NonNullable<ReactNode>
    | {
        className: string;
        element: ReactNode;
      }
  )[];
}) => {
  const id = useId();
  return (
    <ul className={cn("list-disc pl-6", className)}>
      {contents.map((content, i) =>
        typeof content === "object" && "element" in content ? (
          <li className={cn("mb-2", content.className)} key={`${id}-list-${i}`}>
            {content.element}
          </li>
        ) : (
          <li className="mb-2" key={`${id}-list-${i}`}>
            {content}
          </li>
        ),
      )}
    </ul>
  );
};

export default UnorderedList;
