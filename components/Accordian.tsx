"use client";

import { useState } from "react";

import { items } from "@/lib/data";

import Plus from "@/assets/icons/Plus";

interface Item {
  question: string;
  answer: string;
  index: number;
}

const Accordian = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    e.stopPropagation();

    const newExpanded: Record<number, boolean> = {};

    items.forEach((item: Item) => {
      if (item.index !== index) {
        newExpanded[item.index] = false;
      }
    });

    setExpanded((prevExpanded) => ({
      ...newExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  return (
    <>
      {items.map((item: Item, index) => (
        <div key={item.question} className="py-7 border-b border-white/30">
          <div
            className="flex items-center cursor-pointer"
            onClick={(e) => handleClick(e, index)}
          >
            <span className="flex-1 text-lg font-bold">{item.question}</span>
            <div>
              <Plus isOpened={expanded[index]} />
            </div>
          </div>
          <div>
            <p
              className="mt-2 text-white/70 max-w-md overflow-hidden transition-all duration-500"
              style={{
                height: `${expanded[item.index] ? "100px" : "0px"}`,
              }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordian;
