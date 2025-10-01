import React, { useState } from "react";
import IconButton from "./IconButton";
import { FaCircleXmark } from "react-icons/fa6";

interface AutocompleteInputProps {
  suggestions: string[];
  placeholder?: string;
  onChange?: (val: string) => void;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  suggestions,
  placeholder = "Type something...",
  onChange,
}) => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (onChange) {
      onChange(value);
    }

    if (value.trim()) {
      const filteredSuggestions = suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
    setActiveIndex(-1);
  };

  const handleSelect = (value: string) => {
    setQuery(value);
    if (onChange) {
      onChange(value);
    }
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      handleSelect(filtered[activeIndex]);
    }
  };

  return (
    <div className="relative w-64">
      {query ? (
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <IconButton
            onClick={() => {
              setQuery("");
            }}
          >
            <FaCircleXmark />
          </IconButton>
        </div>
      ) : (
        <></>
      )}
      <input
        type="text"
        className="w-full border border-primary rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {showSuggestions && filtered.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded-lg shadow-md mt-1 max-h-48 overflow-y-auto">
          {filtered.map((item, index) => (
            <li
              key={item}
              className={`px-3 py-2 cursor-pointer hover:bg-blue-100 ${
                index === activeIndex ? "bg-blue-100" : ""
              }`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
