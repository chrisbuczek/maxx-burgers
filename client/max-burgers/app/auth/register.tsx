import { Form, Link } from "react-router";
import type { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign Up - Max Burgers" },
    { name: "description", content: "Create your Max Burgers account" },
  ];
}

export default function Register() {
  return (
    <div className="auth-form">
      <h2>Join the Max Family!</h2>
      <p>
        Create your account to unlock exclusive offers and personalized
        experiences.
      </p>

      <Form method="post" className="register-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="John"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Doe"
            />
          </div>
        </div>

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
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Create a strong password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            placeholder="Confirm your password"
          />
        </div>

        <div className="form-options">
          <label className="checkbox-label">
            <input type="checkbox" name="newsletter" />
            Subscribe to our newsletter for exclusive offers
          </label>

          <label className="checkbox-label">
            <input type="checkbox" name="terms" required />I agree to the{" "}
            <Link to="/terms">Terms of Service</Link> and{" "}
            <Link to="/privacy">Privacy Policy</Link>
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Create Account
        </button>
      </Form>

      <div className="auth-footer">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
