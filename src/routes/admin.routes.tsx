import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateAcademicFaculty from "./../pages/admin/academicManagement/CreateAcademicFaculty";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import RegisteredSemester from "../pages/admin/courseManagement/RegisteredSemester";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import Course from "../pages/admin/courseManagement/Course";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import OfferedCourses from "../pages/admin/courseManagement/OfferedCourses";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentData />,
      },
      {
        
        path: "student-data/:studentID",
        element: <StudentDetails />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Registered Semester",
        path: "registered-semester",
        element: <RegisteredSemester />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Course />,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
      {
        name: "Offered Courses",
        path: "offered-courses",
        element: <OfferedCourses />,
      },
      
      
    ],
  },
];

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
