
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="page">
      <div className="form-container">

        <h1>Controlled React Form</h1>
        <p className="subtitle">
          Enter your details below
        </p>

        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
        </form>

        <div className="output">
          <h2>Entered Data</h2>

          <p>
            <strong>Name:</strong>{" "}
            {formData.name || "No name entered"}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {formData.email || "No email entered"}
          </p>

          <p>
            <strong>Message:</strong>{" "}
            {formData.message || "No message entered"}
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;

