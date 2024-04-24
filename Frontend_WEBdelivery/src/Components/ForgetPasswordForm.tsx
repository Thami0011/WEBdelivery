import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordForm = () => {
  // State for the email input field
  const [email, setEmail] = useState("");

  // State for the token and password input fields
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  // State for the response message
  const [responseMessage, setResponseMessage] = useState("");

  // Handler for the forgot password form submission
  const handleForgotPassword = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8085/forgot-password",
        null,
        {
          params: {
            email,
          },
        }
      );

      // Update the response message
      setResponseMessage(response.data);
    } catch (error) {
      console.error("Error sending forgot password request:", error);
      setResponseMessage("Failed to send forgot password request.");
    }
  };

  // Handler for the reset password form submission
  const handleResetPassword = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.put("/reset-password", null, {
        params: {
          token,
          password,
        },
      });

      // Update the response message
      setResponseMessage(response.data);
    } catch (error) {
      console.error("Error sending reset password request:", error);
      setResponseMessage("Failed to send reset password request.");
    }
  };

  return (
    <div className="mt-10">
      {/* Forgot password form */}
      <form onSubmit={handleForgotPassword}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Forgot Password Request</button>
      </form>

      {/* Display the response message */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ForgotPasswordForm;
