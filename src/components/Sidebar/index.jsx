import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Sidebar = (props) => {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100">
      <span class="fs-4">Sidebar</span>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <p role="button" class="nav-link text-white">
            Home
          </p>
        </li>
        <li>
          <p role="button" class="nav-link text-white">
            Dashboard
          </p>
        </li>
        <li>
          <p role="button" class="nav-link text-white">
            Orders
          </p>
        </li>
        <li>
          <p role="button" class="nav-link text-white">
            Products
          </p>
        </li>
        <li>
          <p role="button" class="nav-link text-white">
            Customers
          </p>
        </li>
      </ul>

      <hr />
      <Dropdown>
        <Dropdown.Toggle variant="success" className="w-100">
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-md me-2"
          />
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Sidebar;
