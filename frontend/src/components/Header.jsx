import React from "react";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";

const Header = () => {
  const menu = React.useRef(null);

  const items = [
    {
      label: "Profile",
      icon: "pi pi-user",
      command: () => {
        window.location.hash = "/profile";
      },
    },
    {
      label: "Settings",
      icon: "pi pi-cog",
      command: () => {
        window.location.hash = "/settings";
      },
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => {
        /* Implement logout functionality */
      },
    },
  ];

  return (
    <div className="w-full bg-white shadow-md flex items-center p-4 fixed z-10 ">
      {/* Logo and Title */}
      <div className="flex items-center pr-40">
        <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
      </div>

      {/* Global Search */}
      <div className="flex-grow max-w-3xl relative mr-24">
        <span className="p-input-icon-left w-full">
          <i className="pi pi-search absolute px-3 text-gray-500" />
          <InputText
            placeholder="Search for students/Teachers/Classes..."
            className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-md shadow-sm"
          />
        </span>
      </div>

      {/* User Profile and Notifications */}
      <div className="flex items-center space-x-2 ">
        {/* Notifications Icon */}
        <Button icon="pi pi-bell" className="p-button-text p-button-rounded" />

        {/* User Profile */}
        <div>
          <Avatar
            image="/admin-avatar.png"
            className="cursor-pointer"
            shape="circle"
            size="small"
            onClick={(event) => menu.current.toggle(event)}
          />
          <Menu model={items} popup ref={menu} id="popup_menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
