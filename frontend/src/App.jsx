import Landing from "./pages/Landing";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
