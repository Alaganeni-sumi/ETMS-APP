import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const processLogin = async (event) => {
    event.preventDefault();
    let loginApi = "http://localhost:5001/api/auth/login";
    console.log(`Inside processLogin.... with ${username} & ${password}`);

    try {
      const response = await axios.post(loginApi, {
        username: username,
        password: password,
      });
      console.log(response);
      let role = response.data.role;
      localStorage.setItem("token", response.data.token);
      switch (role) {
        case "ROLE_ADMIN":
          navigate("/admin/dashboard");
          break;
        case "ROLE_EMPLOYEE":
          navigate("/employee/dashboard");
          break;
        default:
          break;
      }
    } catch (error) {
      setMsg("Invalid Credentials");
    }
  };

  return (
    <>
     
     

      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg p-4" style={{ width: "400px", borderColor: "#c9a7eb", backgroundColor: "#f3e8ff" }}>
          <div
            className="card-header text-center text-white"
            style={{ backgroundColor: "#c9a7eb", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            ETMS Login
          </div>
          <div className="card-body">
            {msg && <div className="alert alert-danger text-center">{msg}</div>}
            <form onSubmit={processLogin}>
              <div className="mb-3">
                <label className="form-label fw-bold">Username</label>
                <input
                  type="text"
                  className="form-control border-2"
                  style={{ borderColor: "#c9a7eb" }}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Password</label>
                <input
                  type="password"
                  className="form-control border-2"
                  style={{ borderColor: "#c9a7eb" }}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn text-white"
                  style={{ backgroundColor: "#c9a7eb" }}
                  disabled={!username || !password}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
