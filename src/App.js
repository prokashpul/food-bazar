import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Authontication/Login/Login";
import Registration from "./Components/Pages/Authontication/Registration/Registration";
import Contact from "./Components/Pages/Contact/Contact";
import Error from "./Components/Pages/Error/Error";
import Home from "./Components/Pages/Home/Home/Home";
import Header from "./Components/Sheard/Header/Header";
import Footer from "./Components/Sheard/Footer/Footer";
import Cart from "./Components/Pages/Cart/Cart";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
