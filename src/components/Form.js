import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Henry",
        age: "",
        admin: false,
    })
    let errMsg = "";

    // Generic function to update input fields base on the input's names
    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
        
        // For checkboxes use "checked" instead of value 
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }

        setFormData({
            ...formData,
            [name]: value,
        })
        console.log(name, formData);
    }


    function handleSubmit(event) {
        event.preventDefault();

        if (formData.age < 0) {
            errMsg = "Age can't be negative";
            console.log({errMsg});
        } else {
            errMsg = "";
            console.log({errMsg});
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
                <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
                <input type="number" name="age" onChange={handleChange} value={formData.age} placeholder="Age" />
                <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} />
                <button type="submit">Submit</button>
            </form>

            <p>Feedback: {errMsg}</p>
        </div>
    );
}

export default Form;
