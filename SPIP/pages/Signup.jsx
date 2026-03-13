import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async e => {
    e.preventDefault();
    if (!role) { setMessage("Please select a role"); return; }

    try {
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password, role }),
      });
      const data = await res.json();
      setMessage(data.message || "Signup successful!");
      if (data.success) setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMessage("Signup failed. Try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>

      {/* Role Selection */}
      <div className="role-selection">
        {["buyer", "seller", "agent"].map(r => (
          <div key={r} className={`role-card ${role===r?"active":""}`} onClick={()=>setRole(r)}>
            {r.charAt(0).toUpperCase()+r.slice(1)}
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={e=>setPhone(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>

      {message && <p style={{ color: message.toLowerCase().includes("failed") || message.toLowerCase().includes("please") ? "#ff4d4f" : "#d4af37", textAlign:"center", marginTop:"1rem" }}>{message}</p>}

      <p style={{ textAlign:"center", marginTop:"1rem" }}>
        Already have an account? <Link to="/login">Login</Link> | <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Signup;