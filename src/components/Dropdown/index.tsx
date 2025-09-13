import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import type { DropdownItem } from "../../types";

import './styles.scss';

interface DropdownProps {
  title: string;
  options: DropdownItem[];
  selectedOptions: DropdownItem[];
  onChange: (selected: DropdownItem[]) => void;
}

export function Dropdown({ options, title, selectedOptions, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setOpen(!open);

  function clearSelection() {
    onChange([]);
  }

  function handleSelect(option: DropdownItem) {
    const alreadySelected = selectedOptions.some(item => item.id === option.id);
    if (alreadySelected) {
      const selectedWithoutOption = selectedOptions.filter((item) => item.id !== option.id);
      onChange(selectedWithoutOption);
      return;
    }

    const newSelectedOptions = [...selectedOptions, option];
    onChange(newSelectedOptions);
    setOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-select" onClick={toggleDropdown}>
        {selectedOptions.length > 0 ? (
          <>
            <span className="dropdown__text">
              {selectedOptions.map(item => item.name).join(", ")}
            </span>
            <X className="dropdown__clear-icon" onClick={clearSelection} />
          </>
         ) : 
         <>
          <span className="dropdown__text">{title}</span>
          <ChevronDown />
         </>
        }
      </div>

      {open && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelect(option)}
              className={selectedOptions.some((item) => item.id === option.id) ? "dropdown__items-selected" : ""}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}