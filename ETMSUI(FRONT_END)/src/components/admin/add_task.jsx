import { useEffect, useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function Addtask() {
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [estimatedEnd, setEstimatedEnd] = useState("");
    const [msg, setMsg] = useState("");
    const [pid, setPid] = useState("");
    const [project, setProject]=useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                let projectApi = "http://localhost:5001/api/project/getall";
                let response = await axios.get(projectApi);
                setProject(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                setMsg("Error in fetching projects");
                console.log(error);
            }
        };
        fetchProjects();
    }, []);

    const handleTaskSubmit = async (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        if (!pid) {
            setMsg("Please select a project before adding a task.");
            return;
        }

        try {
            let taskApi = `http://localhost:5001/api/task/add/${pid}`;
            let response = await axios.post(taskApi, {
                title: title,
                startDate: startDate,
                shortDescription: shortDescription,
                estimatedEndDate: estimatedEnd,
            });

            setMsg("Task Added Successfully!");
            console.log(response.data);
        } catch (error) {
            setMsg("Task adding failed");
            console.error(error);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          
            <div>
                <AdminNavbar />
            </div>

         
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1 }}>
                <div className="card" style={{ width: "50%", textAlign: "center", fontFamily: "Times New Roman" }}>
                    <div className="card-header">
                        <strong>Add Tasks</strong>
                    </div>
                    <div className="card-body">
                        <form className="row g-3" onSubmit={handleTaskSubmit}>
                            {msg && (
                                <div className="col-mb-6">
                                    <div className="alert alert-primary">{msg}</div>
                                </div>
                            )}
                            <div className="col-md-12">
                                <label className="form-label">Title*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">Short Description*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={shortDescription}
                                    onChange={(e) => setShortDescription(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Start Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Estimated End Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={estimatedEnd}
                                    onChange={(e) => setEstimatedEnd(e.target.value)}
                                />
                            </div>
                            <div className="mt-4">
                                <label>Select Project: </label>
                                <select
                                    className="form-control"
                                    value={pid}
                                    onChange={(e) => setPid(e.target.value)}
                                >
                                    <option value="">--------Select Project------</option>
                                    {project.map((p, index) => (
                                        <option key={index} value={p._id}>
                                            {p.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">
                                    Add Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addtask;
