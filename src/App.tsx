import React from "react";
import { ToastContainer } from "react-toastify";
import Router from "./navigation/Router";

const App: React.FC = () => {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  )
}

export default App