import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicCounter from "./pages/basic/Counter/classComponent";
import BasicReact from "./pages/basic/React";
import BasicLogin from "./pages/basic/Login";
import BasicHome from "./pages/basic/Home";
import BasicDetail from "./pages/basic/Detail";
import BasicOrder from "./pages/basic/Order";
import SignIn from "./pages/signin/signin";
import Home from "./pages/home/home";
import ViewAll from "./pages/viewall/viewall";
import MovieDetail from "./pages/moviedetail/moviedetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="basic/counter" element={<BasicCounter />} />
        <Route path="basic/react" element={<BasicReact />} />
        <Route path="basic/login" element={<BasicLogin />} />
        <Route path="basic/home" element={<BasicHome />} />
        {/* [1 & 2] */}
        {/* <Route path="basic/detail" element={<BasicDetail />} /> */}
        {/* [3] */}
        <Route path="basic/detail/:id" element={<BasicDetail />} />
        <Route path="basic/order" element={<BasicOrder />} />
        <Route path="login" element={<SignIn />} />
        <Route path="home" element={<Home />} />
        <Route path="viewall" element={<ViewAll />} />
        <Route path="moviedetail" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
