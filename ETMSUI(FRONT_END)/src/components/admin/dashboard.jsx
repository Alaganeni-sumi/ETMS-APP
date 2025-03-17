import AdminNavbar from "./navbar"
import { Route,Routes } from "react-router"
import EmployeeOnboarding from "./onboarding_emp"

function AdminDashboard(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <AdminNavbar />
                </div>
                <div className="container mt-5">
            <h2 className="text-center">Welcome to ETMS App</h2>
            <p className="text-center">Manage employees, projects, and tasks efficiently.</p>
        </div>

            </div>
            <div className="row">
 
            </div>
           
        </div>
    )

}
export default AdminDashboard