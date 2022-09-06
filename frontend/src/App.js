import { Routes as Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Switch>
    </Layout>
  );
};

export default App;