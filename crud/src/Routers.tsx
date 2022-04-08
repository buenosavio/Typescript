import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthContext";
import Endereco from "./pages/endereco/Endereco";
import AddressAdd from "./pages/address/AddressAdd";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";
import User from "./pages/users/User";
import AddressProvider from "./context/AddressContext";
import Address from "./pages/address/Address";

const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AddressProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<User/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path="/atz-add" element={<AddressAdd/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </AddressProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers;