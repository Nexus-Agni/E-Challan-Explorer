import Landing from "./pages/Landing";
import Login from "./components/Login";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import AddNewUser from "./components/AddNewUser";
import ShowAllUsers from "./components/ShowAllUsers";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setData={setData} />} />
        <Route path="/admin" element={<AdminDashboard data = {data} />} />
        <Route path="/user" element={<UserDashboard data = {data} />} />
        <Route path="/adduser" element={<AddNewUser data = {data}/> }   />
        <Route path="/showAllUsers" element={<ShowAllUsers data = {data} />} />
      </Routes>
      {console.log(data)};
    </>
  );
}

export default App;
