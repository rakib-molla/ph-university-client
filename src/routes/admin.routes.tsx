
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateAcademicFaculty from './../pages/admin/academicManagement/CreateAcademicFaculty';



export const adminPaths = [
   {
      name: 'Dashboard',
      path: 'dashboard',
      element: <AdminDashboard/>
   },
   {
      name: 'Academic Management',
      children:[
         {
            name: 'Create A. Semester',
            path: 'create-academic-semester',
            element: <CreateAcademicSemester/>
         },
         {
            name: 'Academic Semester',
            path: 'academic-semester',
            element: <AcademicSemester/>
         },
         {
            name: 'Create A Faculty',
            path: 'create-academic-faculty',
            element: <CreateAcademicFaculty/>
         },
         {
            name: 'Academic Faculty',
            path: 'academic-faculty',
            element: <AcademicFaculty/>
         },
         {
            name: 'Create A. Department',
            path: 'create-academic-department',
            element: <CreateAcademicDepartment/>
         },
         {
            name: 'Academic Department',
            path: 'academic-department',
            element: <AcademicDepartment/>
         },

      ]
   },
   {
      name: 'User Management',
      children:[
         {
            name: 'Create Admin',
            path: 'create-admin',
            element: <CreateAdmin/>
         },
         {
            name: 'Create Faculty',
            path: 'create-faculty',
            element: <CreateFaculty/>
         },
         {
            name: 'Create Student',
            path: 'create-student',
            element: <CreateStudent/>
         },
         {
            name: 'Create Member',
            path: 'create-member',
            element: <CreateStudent/>
         },
      ]
   },
]







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