
import { useState } from "react";
import { GraduationCap, ArrowLeft, LockKeyhole } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
  const [role, setRole] = useState("learner");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Demonstration only: this is not real authentication.
    if (email.trim() && password.trim()) {
      navigate("/student");
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-decoration auth-decoration-one" />
      <div className="auth-decoration auth-decoration-two" />

      <Link to="/" className="auth-back">
        <ArrowLeft size={17} /> Back to Aspire
      </Link>

      <section className="auth-card">
        <Link to="/" className="brand auth-brand">
          <span className="brand-icon"><GraduationCap size={25} /></span>
          <span><strong>Aspire</strong><small>ONLINE SCHOOL</small></span>
        </Link>

        <div className="auth-heading">
          <span className="eyebrow">WELCOME TO ASPIRE</span>
          <h1>Welcome back.</h1>
          <p>Sign in to access your learning portal.</p>
        </div>

        <div className="role-selector">
          {["learner", "parent", "teacher"].map((item) => (
            <button
              key={item}
              type="button"
              className={role === item ? "role-active" : ""}
              onClick={() => setRole(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <Button type="submit" className="auth-submit">
            <LockKeyhole size={17} /> Continue to portal
          </Button>
        </form>

        <p className="auth-notice">
          <LockKeyhole size={15} />
          Demonstration only. Authentication is not connected yet.
        </p>
      </section>

      <p className="auth-footer">© {new Date().getFullYear()} Aspire Online School</p>
    </main>
  );
}
