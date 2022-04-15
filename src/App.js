import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Authontication/Login/Login";
import Registration from "./Components/Pages/Authontication/Registration/Registration";
import Contact from "./Components/Pages/Contact/Contact";
import Error from "./Components/Pages/Error/Error";
import Home from "./Components/Pages/Home/Home/Home";
import Header from "./Components/Sheard/Header/Header";
import Footer from "./Components/Sheard/Footer/Footer";
import Cart from "./Components/Pages/Cart/Cart";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart></Cart>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
