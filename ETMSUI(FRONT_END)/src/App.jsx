import { Route, Routes } from "react-router"
import Login from "./auth/login"
import AdminDashboard from "./components/admin/dashboard"
import EmployeeDashboard from "./components/employee/dashboard"
import EmployeeOnboarding from "./components/admin/onboarding_emp"
import EmployeeList from "./components/admin/employee-list"
import AssignTask from "./components/admin/assign_task"
import EmployeeTask from "./components/employee/employee_task"
import AddTask from "./components/admin/add_task"
import AddProject from "./components/admin/add_project"
import EmpProfile from "./components/employee/profile"
import DetailedTask from "./components/employee/detailedtask"
import { ToastContainer, Zoom } from "react-toastify"
import './App.css'



function App() {
  

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
     
     <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard /> }/>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/employee-onboarding" element={<EmployeeOnboarding />}/> 
        <Route path="/admin/employees" element={<EmployeeList />} /> 
        <Route path="/admin/assign-task" element={<AssignTask />} />  
        <Route path="/employee/tasks" element={<EmployeeTask />} /> 
        <Route path="/admin/add-task" element={<AddTask />} /> 
        <Route path="/admin/add-project" element={<AddProject />} /> 
        <Route path="/employee/profile" element={<EmpProfile />} /> 
        <Route path="/employee/tasks/details" element={<DetailedTask/>}/>
        </Routes>
    </>
  )
}

export default App
