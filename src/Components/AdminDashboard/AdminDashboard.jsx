import React from "react";
import SideNavigation from "./SideNavigation";
import "./Dashboard.css";


const AdminDashboard = () => {
    return (
        <>
            <div className="d-flex" id="wrapper">
                {/* Sidebar */}
                <SideNavigation />
                {/* /#sidebar-wrapper */}
                {/* Page Content */}
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        <div className="d-flex align-items-center">
                            <i
                                className="fas fa-align-left text-light primary-text fs-4 me-3"
                                id="menu-toggle"
                            />
                            <h2 className="fs-2 m-0 text-light">Dashboard{/** active window name here */}</h2>
                        </div>
                    </nav>
                    <div className="container-fluid px-4">
                        {/* Switch Screen's here */}
                    </div>
                </div>
            </div>
            {/* /#page-content-wrapper */}
        </>

    );
};

export default AdminDashboard;