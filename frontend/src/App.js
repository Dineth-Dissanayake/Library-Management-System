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
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import IssueBook from "./pages/Issuebook";
import ReturnBook from "./pages/Returnbook";
import CategoryDetais from "./pages/CategoryDetails";
import EditCategory from "./pages/EditCategory";
import IssueBookDetails from "./pages/IssueBookDetails";
import AddStudent from "./pages/AddStudent";
import ViewAllStudents from "./pages/ViewAllStudents";
import UpdateStudent from "./pages/UpdateStudent";
import StudentDetail from "./pages/StudentDetail";

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
            <Route path="/edit_book/:id" element={<EditBook />} />
            <Route path="/book_details/:id" element={<BookDetails />} />
            <Route path="/issuebook" element={<IssueBook />} />
            <Route path="/returnbook" element={<ReturnBook />} />
            <Route path="/category_details" element={<CategoryDetais/>} />
            <Route path="/edit_category/:id" element={<EditCategory />} />
            <Route path="/issued_books_details" element={<IssueBookDetails />} />
            <Route path="/add_student" element={<AddStudent />} />
            <Route path="/all_students" element={<ViewAllStudents />} />
            <Route path="/edit_student/:id" element={<UpdateStudent />} />
            <Route path="/student_details/:id" element={<StudentDetail />} />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};

export default App;