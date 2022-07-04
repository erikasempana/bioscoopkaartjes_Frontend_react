/* eslint-disable linebreak-style */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicCounter from "./pages/basic/Counter/classComponent";
import BasicReact from "./pages/basic/React";
import BasicLogin from "./pages/basic/Login";
import BasicHome from "./pages/basic/Home";
import BasicDetail from "./pages/basic/Detail";
import BasicOrder from "./pages/basic/Order";
import SignIn from "./pages/signin/signin";
import SignUp from "./pages/signup/signup";
import Home from "./pages/home/home";
import ViewAll from "./pages/viewall/viewall";
import Detail from "./pages/detail/detail";
import Order from "./pages/order/order";
import Payment from "./pages/payment/payment";
import Profile from "./pages/Profile/profile";
import ManageMovie from "./pages/managemovie/managemovie";
import ManageSchedule from "./pages/manageschedule/manageschedule";
import Dasboard from "./pages/dasboard/dasboard";
import Unauthorized from "./pages/unauthorized/unauthorized";

import PrivateRoute from "./helpers/route/privateRoute";
import PublicRoute from "./helpers/route/publicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute restricted={true} />}>
          <Route path="basic/counter" element={<BasicCounter />} />
          <Route path="basic/react" element={<BasicReact />} />
          <Route path="basic/login" element={<BasicLogin />} />
          <Route path="basic/home" element={<BasicHome />} />
          <Route path="basic/detail/:id" element={<BasicDetail />} />
          <Route path="basic/order" element={<BasicOrder />} />
          <Route path="login" element={<SignIn />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="home" element={<Home />} />
          <Route path="unauthorized" element={<Unauthorized />} />
        </Route>

        <Route element={<PrivateRoute isAdmin={false} />}>
          <Route path="viewall" element={<ViewAll />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="order" element={<Order />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="payment" element={<Payment />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="managemovie" element={<ManageMovie />} />
          <Route path="manageschedule" element={<ManageSchedule />} />
          <Route path="dasboard" element={<Dasboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
