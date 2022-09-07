import { useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { Avatar } from '@mui/material';

import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const Navbar = ({title="LIBRARY MANAGEMENT SYSTEM"}) => {

    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);
    const { toast } = useContext(ToastContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ms-auto">
                        {user ? (
                            <>
                                {/* <li className="nav-item">
                                <Link to="/mycontacts" className="nav-link">All Contacts</Link>
                                </li>

                                <li className="nav-item">
                                <Link to="/create" className="nav-link">Create</Link>
                                </li> */}

                                <li
                                    className="nav-item"
                                    onClick={() => {
                                        setUser(null);
                                        localStorage.clear();
                                        toast.success("Logged out.");
                                        navigate("/login", { replace: true });
                                    }}
                                >
                                    <a className="nav-link">{user.username}</a>
                                    <Avatar src="/broken-image.jpg" />
                                </li>
                            </>
                        ) : (
                        <>
                            {/* <div className="collapse navbar-collapse" id="navbarColor02">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link active">Login</Link>
                                    </li>
                                </ul>
                            </div> */}
                        </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;