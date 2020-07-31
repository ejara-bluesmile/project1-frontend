import React from "react";
import Siderbar from "../login/Sidebar/Sidebar";
import IssuesForm from "./issuesForm";

function CreateIssues() {
  return (
    <div className="EditUser">
     <Siderbar></Siderbar>
      <IssuesForm />
    </div>
  );
}

export default CreateIssues;
