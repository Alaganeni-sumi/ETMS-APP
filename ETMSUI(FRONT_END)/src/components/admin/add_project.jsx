import { useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function AddProject() {
    const [projectTitle, setProjectTitle] = useState(undefined);
    const [projectStartDate, setProjectStartDate] = useState(undefined);
    const [projectDescription, setProjectDescription] = useState(undefined);
    const [projectClient, setProjectClient] = useState(undefined);
    const [projectTechStack, setProjectTechStack] = useState(undefined);
    const [projectEstimatedEnd, setProjectEstimatedEnd] = useState(undefined);
    const [statusMessage, setStatusMessage] = useState(undefined);

    const handleProjectSubmit = async (event) => {
        try {
            event.preventDefault();
            let projectApi = "http://localhost:5001/api/project/add";
            let headers = {
                Authorization: "Bearer " + localStorage.getItem("token"),
            };
            const response = await axios.post(
                projectApi,
                {
                    title: projectTitle,
                    startDate: projectStartDate,
                    shortDescription: projectDescription,
                    clientName: projectClient,
                    techStack: projectTechStack,
                    estimatedEndDate: projectEstimatedEnd,
                },
                { headers: headers }
            );
            setStatusMessage("Project Added");
        } catch (error) {
            setStatusMessage("Error in Project Adding");
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <AdminNavbar />
                </div>
            </div>
            <div className="row">
                <div className="col-mt-4-sm-4">
                    <div className="card">
                        <div className="card-header">
                            <strong>Add Project</strong>
                        </div>
                        <div className="card-body">
                            <form className="row g-3" onSubmit={handleProjectSubmit}>
                                {statusMessage && (
                                    <div className="col-mb-6">
                                        <div className="alert alert-primary">{statusMessage}</div>
                                    </div>
                                )}
                                <div className="col-md-6">
                                    <label className="form-label">Project Title*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => setProjectTitle(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Start Date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="YYYY-MM-DD"
                                        onChange={(e) => setProjectStartDate(e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Short Description*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => setProjectDescription(e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Client Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => setProjectClient(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Tech Stack</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => setProjectTechStack(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Estimated End Date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="YYYY-MM-DD"
                                        onChange={(e) => setProjectEstimatedEnd(e.target.value)}
                                    />
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">
                                        Add Project
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProject;
