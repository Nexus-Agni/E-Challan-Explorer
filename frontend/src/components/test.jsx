import React, { useState } from 'react';
import { Link } from "react-router-dom";

function AddNewUser({data}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [vehicleNumbers, setVehicleNumbers] = useState([{ vehicleNumber: '', fineImposed: '' }]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const formData = {
            username: username,
            password: password,
            fullname: fullname,
            vehicleNumbers: vehicleNumbers,
        };
        console.log(formData);
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

    const handleAddFields = () => {
        setVehicleNumbers([...vehicleNumbers, { vehicleNumber: '', fineImposed: '' }]);
    };

    const handleRemoveFields = (index) => {
        const values = [...vehicleNumbers];
        values.splice(index, 1);
        setVehicleNumbers(values);
    };

    return (
        // ...
        <div>
            {vehicleNumbers.map((vehicleNumber, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="vehicleNumber"
                        value={vehicleNumber.vehicleNumber}
                        onChange={event => handleInputChange(index, event)}
                        placeholder="Enter Vehicle Number"
                    />
                    <input
                        type="text"
                        name="fineImposed"
                        value={vehicleNumber.fineImposed}
                        onChange={event => handleInputChange(index, event)}
                        placeholder="Enter Fine Imposed"
                    />
                    <button onClick={() => handleRemoveFields(index)}>Remove</button>
                </div>
            ))}
            <button onClick={() => handleAddFields()}>Add</button>
        </div>
        // ...
    );
}

export default AddNewUser;