import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

import "./styles.scss";

interface SecondaryButtonProps {
  children: ReactNode;
}

export function SecondaryButton({ children }: SecondaryButtonProps) {
  return (
    <button className="secondary-button">
      <ArrowLeft className="secondary-btn-arrow-left" />
      {children}
    </button>
  );
}