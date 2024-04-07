import axios from "axios";
import React, { useState } from "react";

function Validation() {
  const [result, setResult] = useState({});
  const [message, setMessage] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResult({ ...result, [name]: value });
  };

  const handleClick = () => {
    axios
      .post("http://localhost:8080/post", result)
      .then((res) => console.log(res.data))
      .catch((res) => setMessage(res.response.data));
  };

  console.log(message, "message");
  console.log(result, "result");

  return (
    <div>
      empId: <input type="text" name="empId" onChange={handleChange} required />
      {result.empId === "" && <span>Roll No is required</span>}
      {message ? message.empId : ""}
      name: <input type="text" name="name" onChange={handleChange} />
      {message ? message.name : ""}
      email: <input type="email" name="email" onChange={handleChange} />
      {message ? message.email : ""}
      password:
      <input type="password" name="password" onChange={handleChange} />
      {message ? message.password : ""}
      age: <input type="text" name="age" onChange={handleChange} />
      {message ? message.age : ""}
      <button onClick={handleClick}>submit</button>
    </div>
  );
}

export default Validation;
