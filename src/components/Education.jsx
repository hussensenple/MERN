import { useState } from "react";
import "../styles/education.css";

function Education() {
  const [edit, setEdit] = useState(true);

  const [data, setData] = useState({
    school: "",
    study: "",
    date: ""
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
      <div className="section">
        <h2>Education</h2>

        <input
          name="school"
          placeholder="School Name"
          value={data.school}
          onChange={handleChange}
        />

        <input
          name="study"
          placeholder="Title of Study"
          value={data.study}
          onChange={handleChange}
        />

        <input
          name="date"
          placeholder="Date of Study"
          value={data.date}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }

  return (
    <div className="section">
      <h2>Education</h2>

      <p>School: {data.school}</p>
      <p>Study: {data.study}</p>
      <p>Date: {data.date}</p>

      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Education;