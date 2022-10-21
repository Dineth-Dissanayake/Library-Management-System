import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ToastContext from "./ToastContext";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const { toast } = useContext(ToastContext);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  
  //CHECK USER IS LOGGED IN.
  const checkUserLoggedIn = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await res.json();
      if (!result.error) {
        setUser(result);
        //navigate("/", {replace: false});
      }
    } catch (err) {
      console.log(err);
    }
  };


  // LOGIN REQUEST
  const loginUser = async (userData) => {
    try {
      const res = await fetch(`http://localhost:8080/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });

      const result = await res.json();
      if (!result.error) {
        localStorage.setItem("token", result.token);
        setUser(result.user);
        toast.success(`Logged in ${result.user.username}`);
        navigate("/dashboard", { replace: true });
        
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };


  // ADD BOOK REQUEST.
  const addBook = async (userData) => {
    try {
      const res = await fetch(`http://localhost:8080/book/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const result = await res.json();
      if (!result.error) {
        toast.success(`Book Added Successfully`);
        navigate("/add_book", { replace: true });
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <AuthContext.Provider value={{ loginUser, user, setUser, addBook }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext;