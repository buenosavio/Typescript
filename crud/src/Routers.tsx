import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthContext";
import AddressAdd from "./pages/address/AddressAdd";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";
import User from "./pages/users/User";
import AddressProvider from "./context/AddressContext";
import Address from "./pages/address/Address";
import UsersProvider from "./context/UsersContext";
import UserAdd from "./pages/users/UserAdd";

const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UsersProvider>
          <AddressProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<User/>}/>
            <Route path="/user-add-atz" element={<UserAdd/>}/>
            <Route path="/address" element={<Address/>}/>
            <Route path="/atz-add" element={<AddressAdd/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
          </AddressProvider>
        </UsersProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers;