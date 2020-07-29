import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import EditForm from "./EditForm";

function EditUser() {
  return (
    <div className="EditUser">
      <Sidebar />
      <EditForm />
    </div>
  );
}

export default EditUser;
