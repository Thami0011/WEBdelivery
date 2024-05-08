import React from "react";
import RegisterForm from "../Components/Forms/RegisterForm";
import backgroundImage from "../assets/registerbg.jpg";
function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.5)",
          padding: "10px",
          borderRadius: "30px",
        }}
      >
        <RegisterForm />
      </div>
    </div>
  );
}

export default Login;
