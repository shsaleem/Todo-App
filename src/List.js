import React from "react";
import { FaTrash } from "react-icons/fa";

import { useAppContext } from "./context";

const List = () => {
  const { list, removeItem } = useAppContext();

  return (
    <div className="grocery-list">
      {list?.map((item) => {
        return (
          <article key={item.id} className="grocery-item">
            <p className="title">{item.title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
