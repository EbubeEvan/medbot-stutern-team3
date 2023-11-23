import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './state/store.ts';

import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';
import WelcomePage from './pages/Welcome.tsx';
import Login from './pages/auth/Login.tsx';
import Signup from './pages/auth/Signup.tsx';
import ForgottenPassword from './pages/auth/ForgottenPassword.tsx';
import SuccessfullRegistration from './pages/auth/SuccessfullRegistration.tsx';
import Recommendations from './pages/Recommendations.tsx';
import ProfileSetup from './pages/ProfileSetup.tsx';
import ProfilePage from './pages/Profile.tsx';
import EditProfilePage from './pages/EditProfile.tsx';
import HistoryPage from './pages/History.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "auth",
    children: [
      {
        path: "",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "forgot-password",
        element: <ForgottenPassword />
      },
      {
        path: "success",
        element: <SuccessfullRegistration />
      }
    ]
  },
  {
    path: "/recommendations",
    element: <Recommendations />,
  },
  {
    path: "/profilesetup",
    element: <ProfileSetup />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/edit-profile",
    element: <EditProfilePage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
  
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
