import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import OTP from "../pages/otp";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import App from "../App";
import Error from "../components/Error";
import SavedPost from "../pages/SavedPost";
import UsersProfile from "../pages/UserProfile";
import FollowRequests from "../pages/FollowRequests";
// import { Search } from "lucide-react";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";
import { adminLoginRouter, adminRouter } from "./adminRoutes"
import ForgotOtp from "../pages/ForgotOtp";
import RenewPassword from "../pages/RenewPassword";
import Search from "../pages/Search"
import ProtectedRoutes from "./protectRoutes/protectRoutes";
import Chat from '../pages/Chat';
// import Error  from '../components/Error '
import ProtectedVideoCall from "../components/chatComponenets/ProtectVedioCall";
import ProtectGroupVedioCall from '../components/chatComponenets/ProtectGroupVedioCall'
import Premium from '../components/Premium';
import PremiumPage from "../pages/premiumPage";
import PaymentSuccess from '../components/PaymentSuccess';
import PaymentFailed from '../components/PaymentFailed';




const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error message="Something Went Wrong" />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/profile',
        element: <Profile />
    },
    {
      path: '/search',
      element: <Search />
  },
      {
        path: '/users-profile/:userId',
        element: <UsersProfile />
    },
    {
      path: '/follow-requests',
      element: <FollowRequests />
  },
    ]
  },
  {
    path: '/chat',
    element: (
        <ProtectedRoutes>
            <Chat />
        </ProtectedRoutes>
    ),
    errorElement: <Error message="Something Went Wrong" />
},  
{
  path: "/video-call/:roomId/:userId",
  element: <ProtectedVideoCall />,
},
{
  path: "/group-video-call/:roomId/:userId",
  element: <ProtectGroupVedioCall />,
},
{
  path: '/premium',
  element: <PremiumPage />,
  children: [
      {
          path: '/premium/plans',
          element: <Premium />
      },
      {
          path: '/premium/payment-success',
          element: <PaymentSuccess />
      },
      {
          path: '/premium/payment-failed',
          element: <PaymentFailed />
      },
  ]
},
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/otp',
    element: <OTP />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/saved-post',
    element: <SavedPost />
},
{
  path: "/forgot-password",
  element: <ForgotPassword />
},
{
  path: "/forgot-otp",
  element: <ForgotOtp />
},
{
  path: "/renew-password",
  element: <RenewPassword />
},


]);

export default AppRouter;
