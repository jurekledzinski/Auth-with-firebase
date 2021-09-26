import React, { useContext, useState } from "react";

import "./DisplayData.scss";

import { StoreContext } from "../../store/Store";

const DisplayData = () => {
  const { dataBooks } = useContext(StoreContext);
  const [indexBtn, setIndexBtn] = useState(false);

  const handleSelectButton = (index) => {
    if (index === indexBtn) return setIndexBtn(false);
    setIndexBtn(index);
  };

  return (
    <main className="main">
      <section className="display">
        {dataBooks !== null && dataBooks.length > 0 ? (
          dataBooks.map((item, index) => (
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
                <p className="display__txt">{item.author}</p>
              </div>
            </div>
          ))
        ) : (
          <h2
            className={
              dataBooks === null
                ? "display__title"
                : "display__title display__title--visible"
            }
          >
            Log in to see content
          </h2>
        )}
      </section>
    </main>
  );
};

export default DisplayData;
