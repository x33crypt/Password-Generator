import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasswordGenerator from "./password.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <PasswordGenerator />
      <ToastContainer />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
