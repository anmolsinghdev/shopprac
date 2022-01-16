import React from 'react';
// import './styles/Login.css';
function Login() {
  return (
    <div className="main-box1">
      <div className="mid-box">
        <div className="mid-box2">
          <div className="mid-left">
            <div className="article">
              <div className="article-1">
                <span>
                  <i className="fas fa-check"></i>
                </span>
                <h3>Quick and free sign-up</h3>
                <p>Enter your email address to create an account.</p>
              </div>
              <div className="article-2">
                <span>
                  <i className="fas fa-check"></i>
                </span>
                <h3>Cross-platform solution</h3>
                <p>
                  Preview your newsletters on any device before sending them
                  out.
                </p>
              </div>
              <div className="article-3">
                <span>
                  <i className="fas fa-check"></i>
                </span>
                <h3>Start sending emails</h3>
                <p>Use our API or pick our pre-built templates.</p>
              </div>
            </div>
          </div>
          <div className="mid-right">
            <h2 className="heading-1">Create your account</h2>
            <span id="email">Email</span>
            <input
              type="text"
              placeholder="Enter your email address"
              id="hello"
            />
            <span id="full-name">Full name</span>
            <input type="text" placeholder="Enter your full name" />
            <span id="Password">Password</span>
            <input type="password" placeholder=" Type to create a password" />
            <div className="checkbox">
              <input type="checkbox" name="" id="checkbox-1" />
              <p className="checkbox-2">
                Get updates and notificatons about our product
              </p>
            </div>
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
