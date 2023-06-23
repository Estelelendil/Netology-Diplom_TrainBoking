import React from "react";

export default function Dropdown({ options, onSelect, open, close }) {
  console.log("DROPDOWN DATA", options);
  return (
    <div className="flex flex-col bg-white absolute top-20 left-0 rounded z-50">
      {open
        ? options.map((option) => (
            <div
              className="hover:bg-gray/40 border-orange/50 px-10 py-2 uppercase"
              onClick={() => {
                console.log("CLICKED", option);
                close(false);
                onSelect(option);
              }}
              key={option._id}
            >
              {option.name}
            </div>
          ))
        : null}
    </div>
  );
}
