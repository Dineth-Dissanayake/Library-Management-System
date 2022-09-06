import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>This is Home Page
        <br/>
        <Link to="/login">
            <button type="button" className="btn btn-outline-primary">Login as Librarian</button>
        </Link>
        </>     
    );
};

export default Home;