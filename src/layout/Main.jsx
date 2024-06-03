import React from "react";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default Main;
