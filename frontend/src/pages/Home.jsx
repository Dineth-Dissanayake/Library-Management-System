import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <>
        <div className="style">

        </div> 
            <h1 id="t1">WELCOME TO OUR LIBRARY</h1>

            <br/>

            <h4 id="t2">WELCOME TO OUR LIBRARY</h4>

            <br/>

            <Link to="/login">
                <button type="button" className="btn btn-primary" id="btn1">Login as Librarian</button>
            </Link>
            
            <Link to="/#">
                <button type="button" className="btn btn-primary" id="btn2">Student Section</button>
            </Link>
        </>     
    );
};

export default Home;