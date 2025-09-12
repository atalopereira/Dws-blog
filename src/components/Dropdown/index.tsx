import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "react-feather";

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
  const [selected, setSelected] = useState(title);
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

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-select" onClick={toggleDropdown}>
        {selected}
        <ChevronDown size={16} />
      </div>

      {open && (
        <ul className="dropdown-menu">
          <li key={title} onClick={() => handleSelect(title)}>
            {title}
          </li>
          {options.map((option) => (
            <li key={option.id} onClick={() => handleSelect(option.name)}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}