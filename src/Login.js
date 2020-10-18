import React from "react";
const Login = ({ props }) => {
  const [
    email,
    password,
    setEmail,
    setPassword,
    handleSignin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    PasswordError,
  ] = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label>UserName</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <p className="errorMsg">{emailError}</p>

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <p className="errorMsg">{PasswordError}</p>

        <div className="container">
          {hasAccount ? (
            <>
              <button onClick={handleSignin}>Sign-in</button>
              <p>
                Dont have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>SignUp</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
