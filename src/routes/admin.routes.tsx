import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

type TRoute = {
   path: string,
   element: ReactNode,
}

 const adminPaths = [
   {
      name: 'Dashboard',
      path: '/admin/dashboard',
      element: <AdminDashboard/>
   },
   {
      name: 'User Management',
      children:[
         {
            name: 'Create Admin',
            path: '/admin/create-admin',
            element: <CreateAdmin/>
         },
         {
            name: 'Create Faculty',
            path: '/admin/create-faculty',
            element: <CreateFaculty/>
         },
         {
            name: 'Create Student',
            path: '/admin/create-student',
            element: <CreateStudent/>
         }
      ]
   },

   {
      name: 'Course Management',
      children:[
         {
            name: 'Offered Course',
            path: '/admin/offered-course',
            element: <CreateAdmin/>
         },
      ]
   }
]

// pragmatical way
export const adminRoutes = adminPaths.reduce((acc: TRoute[], item)=>{
   if(item.path && item.element){
      acc.push({
         path: item.path,
         element: item.element,
      })
   }

   if(item.children){
      item.children.forEach((child)=>{
         acc.push({
            path: child.path,
            element: child.element,
         })
      })
   }

   return acc;
},[])


// hard coded

// export const adminPaths = [
//    {
//       index: true,
//       element: <AdminDashboard/>
//    },
//    {
//       path: 'dashboard',
//       element: <AdminDashboard/>
//    },
//    {
//       path: 'create-admin',
//       element: <CreateAdmin/>
//    },
//    {
//       path: 'create-faculty',
//       element: <CreateFaculty/>
//    },
//    {
//       path: 'create-student',
//       element: <CreateStudent/>
//    },
// ]