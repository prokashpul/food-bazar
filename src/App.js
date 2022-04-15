import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Pages/Contact/Contact";
import Error from "./Components/Pages/Error/Error";
import Home from "./Components/Pages/Home/Home/Home";
import Header from "./Components/Sheared/Header/Header";
import Footer from "./Components/Sheared/Footer/Footer";
import Cart from "./Components/Pages/Cart/Cart";
import RequireAuth from "./RequireAuth/RequireAuth";
import Registration from "./Components/Pages/Authentication/Registration/Authentication";
import Login from "./Components/Pages/Authentication/Login/Login";
import BreakFast from "./Components/Pages/Home/BreakFast/BreakFast";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}>
          <Route path="/" element={<BreakFast></BreakFast>}></Route>
          <Route path="/breakfast" element={<BreakFast></BreakFast>}></Route>
          <Route path="/lance" element={<p>Lance</p>}></Route>
          <Route path="/dinner" element={<p>Dinner</p>}></Route>
        </Route>
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
