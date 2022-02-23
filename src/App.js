import React from "react";

import List from "./List";
import Alert from "./Alert";
import { useAppContext } from "./context";

function App() {
  const { handleSubmit, name, list, alert, handleChange, clearAll } =
    useAppContext();

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={(e) => handleSubmit(e)}>
        {alert.show && <Alert />}
        <h3>Tasks</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={name}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List />
          <button className="clear-btn" onClick={clearAll}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
