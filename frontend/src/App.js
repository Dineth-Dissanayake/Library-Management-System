import { Routes as Switch, Route } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";

import Layout from "./components/Layout";
import Home from "./pages/Home_Web/Home";
import Login from "./pages/Login/Login";
import LibrarianHome from "./pages/LibrarianHome";
import AddBook from "./pages/AddBook";
import AddCategory from "./pages/AddCategory";
import ViewAllBooks from "./pages/ViewAllBooks";
import IssueBook from "./pages/Issuebook";
import ReturnBook from "./pages/Returnbook"

const App = () => {
  return (
    <ToastContextProvider>
      <AuthContextProvider>
        <Layout>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<LibrarianHome />} />
            <Route path="/add_book" element={<AddBook />} />
            <Route path="/add_category" element={<AddCategory />} />
            <Route path="/manage_books" element={<ViewAllBooks />} />
            <Route path="/issuebook" element={<IssueBook />} />
            <Route path="/returnbook" element={<ReturnBook />} />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};

export default App;