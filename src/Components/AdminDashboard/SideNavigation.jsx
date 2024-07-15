import React from 'react';

const SideNavigation = () => {
    return (
        <div className="bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
                <i className="fas fa-dove me-2" />
                Nkhunda
            </div>
            <div className="list-group list-group-flush my-3">
                <a
                    href="#"
                    className="list-group-item list-group-item-action bg-transparent second-text active"
                >
                    <i className="fas fa-tachometer-alt me-2" />
                    Dashboard
                </a>
                <a
                    href="#"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                    <i className="fas fa-project-diagram me-2" />
                    Applications
                </a>
                <a
                    href="#"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                    <i className="fas fa-comment-dots me-2" />
                    Chat
                </a>
                <a
                    href="#"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                    <i className="fas fa-cog me-2" />
                    Settings
                </a>
                {/*profile */}
                <a
                    href="#"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                    <i className="fas fa-user me-2" />
                    Profile
                </a>
                <a
                    href="#"
                    className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
                >
                    <i className="fas fa-power-off me-2" />
                    Logout
                </a>
            </div>
        </div>
    );
};

export default SideNavigation;