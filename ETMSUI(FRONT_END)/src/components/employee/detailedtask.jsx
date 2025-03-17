import { useLocation, useNavigate } from "react-router-dom";
import EmployeeNavbar from "./navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailedTask = () => {

    const location = useLocation();

    const { task } = location.state;
    const navigate = useNavigate();

    const [message, setMessage] = useState(undefined);
    const [comments, setComments] = useState([]);

    const gettingComment = async () => {
        const getApi = 'http://localhost:5001/api/comment/get/' + task._id;
        const header = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        try {
            const response = await axios.get(getApi, { headers: header })
            setComments(response.data)
            console.log(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        gettingComment();
    }, [])

    const processComment = async () => {
        const postApi = 'http://localhost:5001/api/comment/add';
        const header = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        try {
            const response = await axios.post(postApi, {
                'message': message,
                'task': task._id
            }, { headers: header })
            console.log(response)
            setMessage("")
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <EmployeeNavbar />
                </div>
            </div>


            <div class="container mt-4 col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="mb-0">Task Details</h3>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title mb-4">Task: {task.title}</h4>

                        <p class="card-text">
                            <strong>Project: </strong> {task.project.title}
                        </p>

                        <p class="card-text">
                            <strong>Description: </strong> {task.shortDescription}
                        </p>

                        <p class="card-text">
                            <strong>Start Date: </strong> {(task.startDate).split("T")[0]}
                        </p>

                        <p class="card-text">
                            <strong>Estimated End Date: </strong>{(task.estimatedEndDate).split("T")[0]}
                        </p>

                        <p class="card-text">
                            <strong>Client Name: </strong> {task.project.clientName}
                        </p>

                        <p class="card-text">
                            <strong>Tech Stack: </strong> {task.project.techStack}
                        </p>

                        <button class="btn btn-info mt-3" onClick={() => navigate("/employee/tasks")}>
                            Back to Tasks
                        </button>
                    </div>
                </div>
            </div>



            <div className="container mt-4 col-md-8">
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-0">Add Comment</h3>
                    </div>
                    <div className="card-body">
                        <textarea
                            className="form-control mb-3"
                            cols="80"
                            rows="10"
                            placeholder="Write your comment here..."
                            onChange={($event) => setMessage($event.target.value)}
                        >
                        </textarea>

                        <button className="btn btn-info col-4 ms-0"
                            onClick={processComment}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>


            <div className="container mt-4 col-md-8">
                {comments.length === 0 ? (
                    <div className="card mb-3">
                        <div className="card-body text-center">
                            <p className="text-muted">No comments yet.</p>
                        </div>
                    </div>
                ) : (
                    comments.map((c, index) => (
                        <div key={index} className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 className="mb-1">
                                        Username: <span className="fw-normal">{c.username}</span>
                                    </h5>
                                    <small className="text-muted">
                                        Date: {(c.commentDate).split("T")[0]}
                                    </small>
                                </div>
                                <p className="mt-2 mb-0">
                                    Comment: <span className="fw-normal">{c.message}</span>
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </>

    )
}

export default DetailedTask;