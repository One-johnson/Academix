import { useState, useRef } from "react";
import { PanelMenu } from "primereact/panelmenu";
import { Button } from "primereact/button";
import Logo from "../images/School.png";
import { Dialog } from "primereact/dialog";
import { ProgressSpinner } from "primereact/progressspinner";

const Sidebar = () => {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const logoutDialog = useRef(null);
  const menuItems = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      command: () => {
        window.location.hash = "/dashboard";
      },
    },
    {
      label: "Students",
      icon: "pi pi-users",
      items: [
        {
          label: "Add Student",
          icon: "pi pi-user-plus",
          command: () => {
            window.location.hash = "/students/add";
          },
        },
        {
          label: "View Students",
          icon: "pi pi-eye",
          command: () => {
            window.location.hash = "/students/view";
          },
        },
        {
          label: "Assign Students",
          icon: "pi pi-user-edit",
          command: () => {
            window.location.hash = "/students/assign";
          },
        },
        {
          label: "Promote Students",
          icon: "pi pi-angle-double-up",
          command: () => {
            window.location.hash = "/students/promote";
          },
        },
      ],
    },
    {
      label: "Teachers",
      icon: "pi pi-briefcase",
      items: [
        {
          label: "Add Teacher",
          icon: "pi pi-user-plus",
          command: () => {
            window.location.hash = "/teachers/add";
          },
        },
        {
          label: "View Teachers",
          icon: "pi pi-eye",
          command: () => {
            window.location.hash = "/teachers/view";
          },
        },
      ],
    },
    {
      label: "Classes",
      icon: "pi pi-book",
      items: [
        {
          label: "All Classes",
          icon: "pi pi-list",
          command: () => {
            window.location.hash = "/classes/all";
          },
        },
        {
          label: "Add Class",
          icon: "pi pi-plus-circle",
          command: () => {
            window.location.hash = "/classes/add";
          },
        },
        {
          label: "Assign Teachers",
          icon: "pi pi-user-edit",
          command: () => {
            window.location.hash = "/classes/assign-teachers";
          },
        },
        {
          label: "Class Timetable",
          icon: "pi pi-calendar",
          command: () => {
            window.location.hash = "/classes/timetable";
          },
        },
      ],
    },
    {
      label: "Attendance",
      icon: "pi pi-calendar",
      command: () => {
        window.location.hash = "/attendance";
      },
    },
    {
      label: "Exams & Results",
      icon: "pi pi-file",
      command: () => {
        window.location.hash = "/exams";
      },
    },
    {
      label: "Fees",
      icon: "pi pi-dollar",
      command: () => {
        window.location.hash = "/fees";
      },
    },
    {
      label: "Timetable",
      icon: "pi pi-clock",
      command: () => {
        window.location.hash = "/timetable";
      },
    },
    {
      label: "Messages",
      icon: "pi pi-envelope",
      command: () => {
        window.location.hash = "/messages";
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
        setShowLogoutDialog(true);
      },
    },
  ];
  const confirmLogout = () => {
    setIsLoggingOut(true);
    // Simulate logout process
    setTimeout(() => {
      setIsLoggingOut(false);
      // Redirect or perform logout action
      window.location.href = "/"; // Or wherever you want to redirect after logout
    }, 4000);
  };

  const cancelLogout = () => {
    setShowLogoutDialog(false);
  };

  return (
    <div className="w-64 h-full shadow-md bg-white fixed">
      {/* Logo */}
      <div className="p-3 flex items-center justify-center border-b">
        <img src={Logo} alt="Logo" className="w-12 h-12 mr-2" />
        <span className="text-sm font-bold">E. P. Schools,  Abeka</span>
      </div>

      {/* Navigation Menu */}
      <div className="p-4">
        <PanelMenu model={menuItems} />
      </div>

      {/* Collapse Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
        <Button
          label="Collapse"
          icon="pi pi-chevron-left"
          className="p-button-text"
        />
      </div>
      {/* Logout Confirmation Dialog */}
      <Dialog
        className="text-center"
        header="Confirm Logout"
        visible={showLogoutDialog}
        style={{ width: "400px" }}
        footer={
          <div className="flex space-x-2 justify-center">
            <Button
              label="No"
              icon="pi pi-times"
              onClick={cancelLogout}
              className="p-button-text bg-blue-600 text-white p-2 rounded"
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              onClick={confirmLogout}
              className="p-button-text bg-red-600 text-white p-2 rounded"
            />
          </div>
        }
        onHide={cancelLogout}
        blockScroll
        ref={logoutDialog}
      >
        <p>Are you sure you want to log out?</p>
        {isLoggingOut && (
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
          />
        )}
      </Dialog>
    </div>
  );
};

export default Sidebar;
