import { Routes as Switch, Route } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import LibrarianHome from "./pages/LibrarianHome";
import AddBook from "./pages/AddBook";

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
          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};

export default App;