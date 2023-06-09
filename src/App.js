import Home from "./pages/Home";
import Admin from "./pages/admin/Admin";
import Teacher from "./pages/teacher/Teacher";
import Student from "./pages/student/Student";
import Contact from "./pages/Contact";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import TeacherDashboard from "./dashboard/TeacherDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";
import Dashboard from "./template/adminTemplate/Dashboard";
import Navbar from "./components/Navbar";
import AdminTeacher from "./template/adminTemplate/AdminTeacher";
import AdminStudent from "./template/adminTemplate/AdminStudent";
import AdminFaculty from "./template/adminTemplate/AdminFaculty";
import AdminCatagories from "./template/adminTemplate/AdminCatagories";
import AdminCourses from "./template/adminTemplate/AdminCourses";
import Sidebar from "./sidebargroup/AdminSidebar";
import AddTeacher from "./template/adminTemplate/admintempcontent/AddTeacher";

import StudentSidebar from "./sidebargroup/StudentSidebar";
import StudentDashboard from "./dashboard/StudentDashboard";
import Exam from "./template/studentTemplate/Exam";
import Marks from "./template/studentTemplate/Marks";
import ExamList from "./template/studentTemplate/ExamList"

import StuDashboard from "./template/studentTemplate/StuDashboard";
import TeacherSidebar from "./sidebargroup/TeacherSidebar";
import TeacherQuestions from "./template/teacherTemplate/TeacherQuestions";
import TeacherExam from "./template/teacherTemplate/TeacherExam";
import TeaDashboard from "./template/teacherTemplate/TeaDashboard";
import QuestionList from "./template/teacherTemplate/QuestionList";
import ApprovedTeacher from "./template/adminTemplate/ApprovedTeacher";
import ApprovedStudent from "./template/adminTemplate/ApprovedStudent";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const LayoutAdmin = () => {
    return (
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    );
  };

  const LayoutStudent = () => {
    return (
      <div className="flex">
        <StudentSidebar />
        <Outlet />
      </div>
    );
  };

  const LayoutTeacher = () => {
    return (
      <div className="flex">
        <TeacherSidebar />
        <Outlet />
      </div>
    );
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" exact Component={Home} />

            <Route path="/admin" exact Component={Admin} />
            <Route path="/teacher" exact Component={Teacher} />
            <Route path="/student" exact Component={Student} />
            <Route path="/contact" exact Component={Contact} />
          </Route>

          <Route path="/admindashboard" element={<LayoutAdmin />}>
            <Route path="/admindashboard" exact Component={AdminDashboard} />

            <Route path="dashboard" Component={Dashboard} />

            <Route path="adminteacher" Component={AdminTeacher} />
            <Route path="adminstudent" Component={AdminStudent} />
            <Route path="approvedteacher" Component={ApprovedTeacher} />
            <Route path="approvedstudent" Component={ApprovedStudent} />
            <Route path="admincourses" Component={AdminCourses} />
            <Route path="adminteacher/addteacher" Component={AddTeacher} />
          </Route>

          <Route path="/studentdashboard" element={<LayoutStudent />}>
            <Route
              path="/studentdashboard"
              exact
              Component={StudentDashboard}
            />
            <Route path="examlist" Component={ExamList} />
            <Route path="exam" Component={Exam} />
            <Route path="marks" Component={Marks} />
            <Route path="studashboard" Component={StuDashboard} />
          </Route>

          <Route path="/teacherdashboard" element={<LayoutTeacher />}>
            <Route
              path="/teacherdashboard"
              exact
              Component={TeacherDashboard}
            />
            <Route path="teacherquestions" Component={TeacherQuestions} />
            <Route path="teacherexam" Component={TeacherExam} />
            <Route path="teadashboard" Component={TeaDashboard} />
            <Route path="questionlist" Component={QuestionList} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
