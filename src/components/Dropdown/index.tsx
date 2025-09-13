import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

import './styles.scss';

interface DropdownOption {
  id: string;
  name: string;
}

interface DropdownProps {
  title: string;
  options: DropdownOption[];
}

export function Dropdown({ options, title }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
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
    setSelected([]);
  }

  function handleSelect(option: string) {
    if (selected.includes(option)) {
      const selectedWithoutOption = selected.filter((item) => item !== option);
      setSelected(selectedWithoutOption);
      return;
    }

    const newSelected = [...selected, option];
    setSelected(newSelected);
    setOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-select" onClick={toggleDropdown}>
        {selected.length > 0 ? (
          <>
            <span className="dropdown__text">{selected.join(", ")}</span>
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
              onClick={() => handleSelect(option.name)}
              className={selected.includes(option.name) ? "dropdown__items-selected" : ""}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}