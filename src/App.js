

import Home from './pages/Home';
import Admin from './pages/admin/Admin';
import Teacher from './pages/teacher/Teacher';
import Student from './pages/student/Student';
import Contact from './pages/Contact';

import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import TeacherDashboard from './dashboard/TeacherDashboard';
import AdminDashboard from './dashboard/AdminDashboard';
import Dashboard from './template/adminTemplate/Dashboard'
import Navbar from './components/Navbar';
import AdminTeacher from './template/adminTemplate/AdminTeacher';
import AdminStudent from './template/adminTemplate/AdminStudent';
import AdminFaculty from './template/adminTemplate/AdminFaculty';
import AdminCatagories from './template/adminTemplate/AdminCatagories';
import AdminCourses from './template/adminTemplate/AdminCourses';
import Sidebar from './sidebargroup/AdminSidebar';
import AddTeacher from './template/adminTemplate/admintempcontent/AddTeacher'


function App() {

const Layout=()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

const LayoutAdmin=()=>{
  return(
    <div className='flex'>
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

  return (
    <div >
      
      
      <Router>
     
     
     
      
      <Routes>
        <Route path='/' element={<Layout/>}>
      <Route path='/' exact Component={Home}/>
    
      <Route path='/admin' exact Component={Admin}/>
      <Route path='/teacher' exact Component={Teacher}/>
      <Route path='/student' exact Component={Student}/>
      <Route path='/contact' exact Component={Contact}/>
      </Route>

      <Route path='/teacherdashboard' exact Component={TeacherDashboard}/>
      

      <Route path='/admindashboard' element={<LayoutAdmin/>}>
      <Route path='/admindashboard' exact Component={AdminDashboard}/>

      <Route path='dashboard'  Component={Dashboard}/>
      
      <Route path='adminteacher'  Component={AdminTeacher}/>
      <Route path='adminstudent'  Component={AdminStudent}/>
      <Route path='adminfaculty'  Component={AdminFaculty}/>
      <Route path='admincategories'  Component={AdminCatagories}/>
      <Route path='admincourses'  Component={AdminCourses}/>
      
      </Route>
    <Route path='/addteacher'  Component={AddTeacher}  />
      
      
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
