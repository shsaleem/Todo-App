import React, { useEffect, useContext, useReducer } from "react";

import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  name: "",
  list: JSON.parse(localStorage.getItem("list")),
  alert: { show: false, msg: "", type: "" },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (value) => {
    dispatch({ type: "HANDLE_CHANGE", payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name) {
      dispatch({ type: "ENTER_VALUE" });
    } else {
      dispatch({ type: "ITEM_ADDED" });
    }
  };

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: "ALERT_DISAPEAR" });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [state.list]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(state.list));
  }, [state.list]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        clearAll,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
