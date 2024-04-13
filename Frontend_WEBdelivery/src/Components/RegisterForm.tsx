import React, { useState } from "react";
import axios from "axios";

function ClientForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sexe, setSexe] = useState("");
  const [adresse, setAdresse] = useState("");
  const [firstname, setFirstname] = useState("");

  const handleCreateClient = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Validate that the password and confirm password fields match
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      // Handle password mismatch (e.g., show an error message)
      return;
    }

    try {
      const response = await axios.post("http://localhost:8085/Register", {
        name,
        email,
        password,
        username,
        telephone,
        sexe,
        adresse,
        firstname,
      });

      console.log("Client creation successful:", response.data);
      // Handle successful client creation (e.g., show a success message or redirect)
    } catch (error) {
      console.error("Client creation failed:", error);
      // Handle client creation failure (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleCreateClient}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Telephone:
          <input
            type="number"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Sexe:
          <input
            type="text"
            value={sexe}
            onChange={(e) => setSexe(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Adresse:
          <input
            type="text"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Create Client</button>
    </form>
  );
}

export default ClientForm;