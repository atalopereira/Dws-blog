import type { ReactNode } from "react";

import "./styles.scss";

interface PrimaryButtonProps {
  children: ReactNode;
}

export function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <button className="primary-button">
      {children}
    </button>
  );
}