import type { ButtonHTMLAttributes, ReactNode } from "react";

import "./styles.scss";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <button
      className="primary-button"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}