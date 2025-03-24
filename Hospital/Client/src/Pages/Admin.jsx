import React, { useState } from "react";
import NewDoc from "../admin/NewDoc";
import DocData from "../admin/DocData";

import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [admincont, setAdminCont] = useState(<p>Welcome Admin</p>);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirect to login page on logout
  };

  return (
    <>
      <div className="admin-cont">
        <div className="admin_wrapper">
          <div className="admin_button">
            <button
              className="admin_buttons"
              onClick={() => setAdminCont(<NewDoc />)}
            >
              Add Doctors
            </button>
            <button
              className="admin_buttons"
              onClick={() => setAdminCont(<DocData />)}
            >
              View Doctors
            </button>

            <button className="admin_buttons" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="admin_cont_display">{admincont}</div>
        </div>
      </div>
    </>
  );
};

export default Admin;
