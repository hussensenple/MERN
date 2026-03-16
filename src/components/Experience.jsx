import { useState } from "react";
import "../styles/experience.css";

function Experience() {
  const [edit, setEdit] = useState(true);

  const [data, setData] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: ""
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
        <h2>Experience</h2>

        <input
          name="company"
          placeholder="Company Name"
          value={data.company}
          onChange={handleChange}
        />

        <input
          name="position"
          placeholder="Position"
          value={data.position}
          onChange={handleChange}
        />

        <input
          name="responsibilities"
          placeholder="Responsibilities"
          value={data.responsibilities}
          onChange={handleChange}
        />

        <input
          name="from"
          placeholder="From"
          value={data.from}
          onChange={handleChange}
        />

        <input
          name="until"
          placeholder="Until"
          value={data.until}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }

  return (
    <div className="section">
      <h2>Experience</h2>

      <p>Company: {data.company}</p>
      <p>Position: {data.position}</p>
      <p>Responsibilities: {data.responsibilities}</p>
      <p>From: {data.from}</p>
      <p>Until: {data.until}</p>

      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Experience;