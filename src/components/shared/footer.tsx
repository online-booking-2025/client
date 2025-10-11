import React from "react";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;

};

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      Footer
    </div>
  );
};
