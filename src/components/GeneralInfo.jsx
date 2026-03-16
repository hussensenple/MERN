import { useState } from "react";
import "../styles/general.css";

function GeneralInfo() {

  const [edit, setEdit] = useState(true);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit() {
    setEdit(false);
  }

  function handleEdit() {
    setEdit(true);
  }

  if (edit) {
    return (
      <div>
        <h2>General Information</h2>

        <input
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={data.phone}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }

  return (
    <div>
      <h2>General Information</h2>

      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>

      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default GeneralInfo;