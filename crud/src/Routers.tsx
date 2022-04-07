import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthContext";
import Address from "./pages/address/Address";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";
import User from "./pages/users/User";

const Routers = () => {
    return (
        <BrowserRouter>
          <AuthProvider>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/users" element={<User/>}/>
              <Route path="/address" element={<Address/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
    )
}

export default Routers;