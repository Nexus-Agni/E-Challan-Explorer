import axios from 'axios';
import React, { useState } from 'react'
import { Link } from "react-router-dom";


function AddNewUser({data}) {
    // const { fullname} = data;

    // form submission
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [vehicleNumbers, setVehicleNumbers] = useState([{ vehicleNumber: '', fineImposed: '' }]);
    const [adminAccess, setAdminAccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "" || fullname === "") {
            alert("Please fill all the fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const formData = {
            username: username,
            password: password,
            fullname: fullname,
            vehicleNumbers: vehicleNumbers,
            adminAccess: adminAccess
        };
        console.log(formData);

        axios
          .post(`http://localhost:8000/api/v1/users/register`, formData)
          .then((response) => {
            console.log(response.data);
            alert("User added successfully");
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setFullname("");
            setVehicleNumbers([{ vehicleNumber: '', fineImposed: '' }]);
            setAdminAccess(false);
          })
          .catch((error) => {
            console.log(error);
            alert(error.response.data.message);
          });
    }

    const handleInputChange = (index, event) => {
        const values = [...vehicleNumbers];
        if (event.target.name === "vehicleNumber") {
            values[index].vehicleNumber = event.target.value;
        } else {
            values[index].fineImposed = event.target.value;
        }
        setVehicleNumbers(values);
    };

    const handleAddFields = (e) => {
        e.preventDefault();
        setVehicleNumbers([...vehicleNumbers, { vehicleNumber: '', fineImposed: '' }]);
    };

    const handleRemoveFields = (index) => {
        const values = [...vehicleNumbers];
        values.splice(index, 1);
        setVehicleNumbers(values);
    };
  return (
    data?
    <div className="bg-gray-100 min-h-screen flex">
        <aside className=" h-screen w-64 flex-col overflow-y-auto border-r bg-gradient-to-r from-[#DE4982] to-[#EC8F4F] px-5 py-8">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-gray-300 rounded-full w-[60px] h-[60px]"></div>
          <span className="mt-2 text-gray-200">Admin</span>
        </div>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700 bg-red-800"
                to="/adduser"
              >
                <span className="mx-2 text-sm font-medium ">
                    Add User
                  </span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                to={`/showAllUsers`}
              >
                <span className="mx-2 text-sm font-medium">
                  View User History
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>
      <div className="flex flex-col w-full">
        <header className="bg-white shadow">
          <div className="flex items-center justify-between py-4 px-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
             {/* Welcome {fullname} */}
             Welcome 
          </h2>
          <div className="flex flex-row justify-evenly flex-wrap p-4 ">
            <form >
                <div className="flex flex-col w-96">
                    <label className="text-gray-700 font-semibold">Username</label>
                    <input
                    type="text"
                    className="border border-gray-200 p-2 rounded-lg focus:outline-none focus:border-gray-500"
                    placeholder='Enter Username'
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    />
                </div>
                <div className="flex flex-col w-96">
                    <label className="text-gray-700 font-semibold">Full Name</label>
                    <input
                    type="text"
                    className="border border-gray-200 p-2 rounded-lg focus:outline-none focus:border-gray-500"
                    placeholder='Enter Full Name'
                    value={fullname}
                    onChange={(e) => {
                        setFullname(e.target.value);
                    }}
                    />
                </div>
                <div className="flex flex-col w-96">
                    <label className="text-gray-700 font-semibold">Vehicle Number</label>
                    <div className='flex flex-col space-y-1'>
                    {vehicleNumbers.map((vehicleNumber, index) => (
                        <div key={index} className='flex flex-col space-y-1' >
                            <input
                                type="text"
                                name="vehicleNumber"
                                className="border border-gray-200 p-2 rounded-lg focus:outline-none focus:border-gray-500"
                                value={vehicleNumber.vehicleNumber}
                                onChange={event => handleInputChange(index, event)}
                                placeholder="Enter Vehicle Number"
                            />
                            <input
                                type="text"
                                name="fineImposed"
                                value={vehicleNumber.fineImposed}
                                className="border border-gray-200 p-2 rounded-lg focus:outline-none focus:border-gray-500"
                                onChange={event => handleInputChange(index, event)}
                                placeholder="Enter Fine Imposed"
                            />
                            <button className="bg-blue-500 text-white font-semibold p-2 rounded-lg w-36 mt-4 hover:bg-blue-600" onClick={(e) => {e.preventDefault(); handleRemoveFields(index);}}>Remove</button>
                        </div>
                    ))}
            <button className="bg-blue-500 text-white font-semibold p-2 rounded-lg w-36 mt-4 hover:bg-blue-600" onClick={(e) => handleAddFields(e)}>Add</button>
        </div>
                </div>
                <div className='flex flex-col w-96'>
                <label className="text-gray-700 font-semibold">Password</label>
                    <input
                    type="password"
                    className="border border-gray-200 p-2 rounded-lg focus:outline-none focus:border-gray-500"
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    />
                </div>
                <div className='flex flex-col w-96'>
                <label className="text-gray-700 font-semibold">Confirm Password</label>
                    <input
                    type="password"
                    className="border border-gray-200 p-2 rounded-lg focus:outline-none focus:border-gray-500"
                    placeholder='Enter password again'
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                    }}
                    />
                </div>
                <div className='flex flex-col w-96 my-2'>
                <label className="relative inline-flex items-center cursor-pointer ">
                  <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={adminAccess}
                      onChange={(e) => setAdminAccess(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-neutral-900">Is the User an Admin ?</span>
                  </label>
                </div>
                <button
                    className="bg-blue-500 text-white font-semibold p-2 rounded-lg w-36 mt-4 hover:bg-blue-600"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Add User
                </button>
            </form>
          </div>
        </main>
      </div>
    </div>
    : <h1> No data found</h1>
  )
}

export default AddNewUser