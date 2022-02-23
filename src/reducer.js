import React from "react";

const reducer = (state, action) => {
  if (action.type === "HANDLE_CHANGE") {
    return {
      ...state,
      name: action.payload,
    };
  }

  if (action.type === "ENTER_VALUE") {
    return {
      ...state,
      alert: { show: true, msg: "Please enter value", type: "danger" },
    };
  }

  if (action.type === "ITEM_ADDED") {
    const item = { id: new Date().getTime().toString(), title: state.name };

    return {
      ...state,
      list: [...state.list, item],
      alert: { show: true, msg: "Item Added to the list", type: "success" },
      name: "",
    };
  }

  if (action.type === "CLEAR_ALL") {
    return {
      ...state,
      list: [],
      alert: { show: true, msg: "Empty List", type: "danger" },
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const newList = state.list.filter((item) => item.id !== action.payload);
    return {
      ...state,
      list: newList,
      alert: { show: true, msg: "Item Removed", type: "danger" },
    };
  }

  if (action.type === "ALERT_DISAPEAR") {
    return {
      ...state,
      alert: { show: false, msg: "", type: "" },
    };
  }

  return state;
};

export default reducer;
