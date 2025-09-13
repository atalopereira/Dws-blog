import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

import "./styles.scss";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function SecondaryButton({ children, ...props }: SecondaryButtonProps) {
  return (
    <button
      type="button"
      className="secondary-button"
      {...props}
    >
      <ArrowLeft className="secondary-btn-arrow-left" />
      {children}
    </button>
  );
}