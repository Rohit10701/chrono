import useOutsideClick from "@/hooks/use-outside-click";
import React, {
  useState,
  useRef,
  useEffect,
  SelectHTMLAttributes,
} from "react";

interface SelectProps {
  children: React.ReactNode;
  options: string[];
  onSelect: (value: string) => void;
  selectedValue: string;
}

export const Select: React.FC<SelectProps> = ({
  children,
  options,
  onSelect,
  selectedValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };
  const isOutside = useOutsideClick(dropdownRef);

  useEffect(() => {
    if (isOpen && isOutside) {
      setIsOpen(false);
    }
  }, [isOpen, isOutside]);

  return (
    <div className="relative" ref={dropdownRef}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === SelectTrigger) {
          return React.cloneElement(child, {
            onClick: toggleDropdown,
            isOpen,
          });
        }
        return child;
      })}
      {isOpen && (
        <ul className="absolure mt-1 w-64 h-10">
          {options.map((option) => (
            <li
              className="hover: cursor-pointer flex justify-center items-center bg-black text-sm text-white"
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

interface SelectTriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  children,
  onClick,
}) => (
  <div
    className="w-64 h-10 flex justify-center items-center bg-black font-md text-white rounded-md  hover:cursor-pointer"
    onClick={onClick}
  >
    {children}
  </div>
);

interface SelectValueProps extends SelectHTMLAttributes<HTMLSelectElement> {
  selectedValue?: string;
}

export const SelectValue: React.FC<SelectValueProps> = ({ selectedValue }) => (
  <div className="w-full h-full justify-center items-center flex">
    {selectedValue || "placeholder..."}
  </div>
);

// SelectOption SelectItem  maybe label