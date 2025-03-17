import { NavLink } from "react-router";

function AdminNavbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                   
                    <a className="navbar-brand" href="#">ETMS</a>
                    

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/admin/dashboard' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link" href="#">Home</a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/admin/employee-onboarding' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link" href="#">Employee Onboarding</a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/admin/employees' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link" href="#">All Employees</a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/admin/add-project' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link" href="#">Add Project</a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/admin/add-task' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link" href="#">Add Task</a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/admin/assign-task' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link" href="#">Assign Task to Employee</a>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default AdminNavbar;
