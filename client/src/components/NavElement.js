import React from "react";
import { NavLink } from "react-router-dom";

function NavElement({ path }) {
  return (
    <>
      <li className="pt-4">
        <NavLink className="text-neutral-700 font-medium text-xl capitalize" to={`/${path}`}>
          {path}
        </NavLink>
      </li>
    </>
  );
}

export default NavElement;
