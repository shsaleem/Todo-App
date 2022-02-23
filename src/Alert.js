import React from "react";

import { useAppContext } from "./context";

const Alert = () => {
  const {
    alert: { msg, type },
  } = useAppContext();

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
