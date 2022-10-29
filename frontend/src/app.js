import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Validcreation from "./pages/Validcreation";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Createp from "./pages/Createpost";
import UpdatePost from "./components/Form-update";
import Error from "./components/Error/index";
import PrivateRoutes from "./services/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/main" element={<Main />} />
        <Route path="/createpost" element={<Createp />} />
        <Route path="/updatepost" element={<UpdatePost />} />
        <Route path="/createsuccess" element={<Validcreation />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default App;
