import Link from "./routes/Links";
import React from "react";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li className="my-btn">
          <Link to="/">Home</Link>
        </li>
        <li>Option 2</li>
        <li className="my-btn">
          <Link to="/Connect">Connect</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
