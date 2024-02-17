import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";



const router = createBrowserRouter([ 
   {
      path: '/',
      element: <App/>,
   },

   {
      path: '/admin',
      element: <App/>,
      children: adminRoutes
   },
   {
      path: '/faculty',
      element: <App/>,
      children: facultyPaths
   },
   {
      path: '/student',
      element: <App/>,
      children: studentPaths
   },

   {
      path: '/login',
      element: <Login/>
   },
   {
      path: '/register',
      element: <Register/>
   }
])

export default router