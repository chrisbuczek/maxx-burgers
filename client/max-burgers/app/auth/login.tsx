import { Form, Link } from "react-router";
import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Max Burgers" },
    { name: "description", content: "Sign in to your Max Burgers account" },
  ];
}

export default function Login() {
  return (
    <div className="auth-form">
      <h2>Welcome Back!</h2>
      <p>
        Sign in to your account to access exclusive offers and faster ordering.
      </p>

      <Form method="post" className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="form-options">
          <label className="checkbox-label">
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <Link to="/forgot-password" className="forgot-link">
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="submit-btn">
          Sign In
        </button>
      </Form>

      <div className="auth-footer">
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="auth-link">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
