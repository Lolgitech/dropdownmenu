
import './App.css'
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu.jsx";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <button onClick={handleMenuToggle}>Toggle Menu</button>
      {isOpen && <DropdownMenu />}
    </div>
  );
};

export default App;