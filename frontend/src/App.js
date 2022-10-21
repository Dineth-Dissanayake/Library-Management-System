import { Routes as Switch, Route } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import LibrarianHome from "./pages/LibrarianHome";
import AddBook from "./pages/AddBook";
import AddCategory from "./pages/AddCategory";
import IssueBook from "./pages/Issuebook";
import ReturnBook from "./pages/Returnbook";
import CategoryDetails from "./pages/CategoryDetails";
import EditCategory from "./pages/EditCategory";
import IssueBookDetails from "./pages/IssueBookDetails";

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
            <Route path="/issuebook" element={<IssueBook />} />
            <Route path="/returnbook" element={<ReturnBook />} />
            <Route path="/category_details" element={<CategoryDetails />} />
            <Route path="/edit_category/:id" element={<EditCategory />} />
            <Route path="/issued_books_details" element={<IssueBookDetails />} />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};

export default App;