import Landing from "./pages/Landing";
import Login from "./components/Login";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/user" element={<UserDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
