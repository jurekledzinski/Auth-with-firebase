import React, { useState } from "react";

import "./DisplayData.scss";

const data = [
  { title: "Section 1", id: 0, text: "hello" },
  { title: "Section 2", id: 1, text: "hello" },
  { title: "Section 3", id: 2, text: "hello" },
];

const DisplayData = () => {
  const [indexBtn, setIndexBtn] = useState(false);

  const handleSelectButton = (index) => {
    if (index === indexBtn) return setIndexBtn(false);
    setIndexBtn(index);
  };

  return (
    <main className="main">
      <section className="display">
        {data.map((item, index) => (
          <div className="display__card" key={item.id}>
            <button
              className={
                index === indexBtn
                  ? "display__card-title display__card-title--active"
                  : "display__card-title"
              }
              onClick={() => handleSelectButton(index)}
            >
              {item.title}
            </button>
            <div
              className={
                index === indexBtn
                  ? "display__card-text display__card-text--active"
                  : "display__card-text"
              }
            >
              <p className="display__txt">{item.text}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default DisplayData;
