import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Plus = ({
  className,
  isOpened,
}: {
  className?: string;
  isOpened: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={twMerge(className)}
      style={{
        transform: `rotate(${isOpened ? "135" : "0"}deg)`,
        transition: "all 0.5s",
      }}
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};

export default Plus;
