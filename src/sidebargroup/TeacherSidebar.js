import { NavLink } from "react-router-dom";
import { FaBars,  FaChalkboardTeacher } from "react-icons/fa";
import {HiUserGroup} from "react-icons/hi"
import { AiTwotoneFileExclamation } from "react-icons/ai";
import {SlNotebook} from "react-icons/sl"
import {TbLayoutDashboard} from "react-icons/tb"
import {BsFillBuildingsFill } from "react-icons/bs"
import {MdOutlineCategory} from "react-icons/md"
import {BiLogOut} from "react-icons/bi"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "../sidebargroup/sidebar.css"
import teacherlogo from "../assests/teacher-logo.png"

const routes = [

 
 
  {
    // path: "/adminstudent",
    name: "Student",
    icon: <HiUserGroup />,
  },
  {
   
    // path: "/adminfaculty",
    name: "Faculty",
    icon: <BsFillBuildingsFill />,
  },
  {
   
    // path: "/admincategories",
    name: "Catagories",
    icon: <MdOutlineCategory />,
  },
  {
   
    // path: "/admincourses",
    name: "Courses",
    icon: <SlNotebook />,
  },
  {
    path: "/teacher ",
    name: "Logout",
    icon: <BiLogOut size={20} />,
  }
];

const TeacherSidebar = ({ children }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                 < div className="flex flex-col gap-4">
                  <img src={teacherlogo}  className="rounded-full -ml-2 h-[150px] w-[150px] "/>
                  <span className="font-bold text-2xl flex justify-center ">Teacher</span>
                  </div>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          
            
          
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default TeacherSidebar;
