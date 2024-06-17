import React from "react";
import { Link } from "react-router-dom";

const Email = () => {
  return (
    <div>
      <div>
        <p> Check your email!</p>
        <p>We sent you an email with a link to reset your password.</p>
      </div>

      <div class = "flex">
        <p>Return to</p>
        <Link>Login</Link>
      </div>
    </div>
  );
};

export default Email;
