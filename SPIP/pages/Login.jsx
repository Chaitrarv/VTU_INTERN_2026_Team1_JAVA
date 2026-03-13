import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setMessage(data.message || "Login successful!");

      if (data.role) {
        if (data.role === "buyer") navigate("/buyer-dashboard");
        else if (data.role === "seller") navigate("/seller-dashboard");
        else if (data.role === "agent") navigate("/agent-dashboard");
      }
    } catch (err) {
      setMessage("Login failed. Try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>

      {message && <p style={{ color: message.toLowerCase().includes("failed") ? "#ff4d4f" : "#d4af37", textAlign:"center", marginTop:"1rem" }}>{message}</p>}

      <p style={{ textAlign:"center", marginTop:"1rem" }}>
        Don't have an account? <Link to="/signup">Signup</Link> | <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Login;