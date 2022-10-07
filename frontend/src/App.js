import { Routes as Switch, Route } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import LibrarianHome from "./pages/LibrarianHome";
import AddBook from "./pages/AddBook";
import AddCategory from "./pages/AddCategory";
import AddSchoolBranch from "./pages/AddSchoolBranch";
import AddStudentCategory from "./pages/AddStudentCategory";
import ViewSchoolBranches from "./pages/ViewSchoolBranches";
import EditSchoolBranch from "./pages/EditSchoolBranch";

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
            <Route path="/add_school_branch" element={<AddSchoolBranch />} />
            <Route path="/add_student_category" element={<AddStudentCategory />} />
            <Route path="/view_school_branches" element={<ViewSchoolBranches />} />
            <Route path="/edit_school_branch/:id" element={<EditSchoolBranch />} />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};

export default App;