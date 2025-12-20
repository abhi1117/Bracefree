"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function GlobalFilter({ value, onChange, placeholder }: Props) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(inputValue);
    }, 300);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  return (
    <div className="relative w-full max-w-xs">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-sm outline-none border focus:ring-2 ring-blue-500"
      />
    </div>
  );
}
