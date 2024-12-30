import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";


function LoginForm () {
    React.useEffect(() => {
        document.body.classList.add('login-page');
        return () => {
          document.body.classList.remove('login-page');
        };
      }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", remember);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-field">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Mail adresinizi girin</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Şifreinizi girin</label>
        </div>
        <div className="forget">
          <label htmlFor="remember">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <p>Beni Hatırla</p>
          </label>
          <Link to="ForgotPassword">Şifrenizi mi unuttunuz ?</Link>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <p>
            Kayıt olmadınız mı ? </p>
          <Link to="Register">Kayıt ol?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
