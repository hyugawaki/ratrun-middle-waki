import React, { useState } from "react";

function BasicAccordion({accordionBody}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion">
      <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
        <h2>アコーディオン</h2>
        <div className="accordion-icon">{isOpen ? "" : "+"}</div>
      </div>
      {isOpen && (
        <div className="accordion-body">
        {accordionBody}
        </div>
      )}
    </div>
  );
}

export default BasicAccordion;
