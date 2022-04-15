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
import BreakFast from "./Components/Pages/BreakFast/BreakFast";
import Lunch from "./Components/Pages/Lunch/Lunch";
import Dinner from "./Components/Pages/Dinner/Dinner";
import FoodDetails from "./Components/Pages/FoodDetails/FoodDetails";
import useFoodData from "./Hooks/FoodDataLoad/useFoodData";
import { createContext } from "react";

export const FoodContext = createContext("");
function App() {
  const [foods] = useFoodData([]);
  console.log(foods);

  return (
    <>
      <FoodContext.Provider value={foods}>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}>
            {/* <Route path="/" element={<BreakFast></BreakFast>}></Route> */}
            <Route path="/breakfast" element={<BreakFast></BreakFast>}></Route>
            <Route path="/" element={<Lunch></Lunch>}></Route>
            <Route path="/lance" element={<Lunch></Lunch>}></Route>
            <Route path="/dinner" element={<Dinner>Dinner</Dinner>}></Route>
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
          <Route
            path="/food/:foodId"
            element={
              <RequireAuth>
                <FoodDetails />
              </RequireAuth>
            }
          ></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
        <Footer></Footer>
      </FoodContext.Provider>
    </>
  );
}

export default App;
