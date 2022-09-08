import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <>
        <div className="style">
            <h1>WELCOME TO OUR LIBRARY</h1>
            <br/>
            <h4>WELCOME TO OUR LIBRARY</h4>
            <br/>
            <Link to="/login">
                <button type="button" className="btn btn-outline-primary" id="btn1">Login as Librarian</button>
            </Link>
            {" "}
            <Link to="/student">
                <button type="button" className="btn btn-outline-primary" id="btn2">Student Section</button>
            </Link>
        </div> 
        </>     
    );
};

export default Home;