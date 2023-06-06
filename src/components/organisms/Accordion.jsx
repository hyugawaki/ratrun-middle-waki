import React, { useState } from "react";

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion">
      <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
        <h2>アコーディオン</h2>
        <div className="accordion-icon">{isOpen ? "" : "+"}</div>
      </div>
      {isOpen && (
        <div className="accordion-body">
          アコーディオン展開イメージ昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
        </div>
      )}
    </div>
  );
}

export default Accordion;
