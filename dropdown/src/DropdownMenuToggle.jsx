import React from "react";
import "./App.css";
import { useState } from "react";
import DropdownMenu from "./DroppDownMenu";

const DropdownMenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="app">
        <button onClick={handleMenuToggle}>Toggle Menu</button>
        {isOpen && <DropdownMenu />}
      </div>
    </>
  );
};

export default DropdownMenuToggle;



// import { Menu } from "@headlessui/react";
// import { Link } from "react-router-dom";


// const navlinks = [
//   { to: "/", title: "Home" },
//   { to: "/about", title: "About" },
//   { to: "/contact", title: "Contact" },
//   { to: "/connect", title: "Connect" },
// ];

// function CustomDropdown() {
//   return (
//     <Menu>
//       <Menu.Button>Navigation</Menu.Button>
//       <Menu.Items>
//         {navlinks.map((link) => {
//           return (
//             <Menu.Item>
//               {({ active }) => <Link to={link.to}>{link.title}</Link>}
//             </Menu.Item>
//           );
//         })}
//       </Menu.Items>
//     </Menu>
//   );
// }

// export default CustomDropdown;

