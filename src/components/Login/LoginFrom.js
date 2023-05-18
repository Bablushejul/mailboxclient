import React from "react";

const LoginFrom = () => {
  return (
    <div>
      <form>
        <div>
          <div>
          <h1>signup</h1>
          </div>
          <label>
            email
            <div>
              <input type="email" />
            </div>
          </label>
          <label>
            password
            <div>
              <input type="password" />
            </div>
          </label>
          <label>
            confirm password
            <div>
              <input type="password" />
            </div>
          </label>
          <label>
            <div>
              <button>signup</button>
            </div>
          </label>
        </div>

        <div>
          <label>
            <div>
              <button>have a account login</button>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default LoginFrom;
