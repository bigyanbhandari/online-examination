import React from 'react'

export const TeacherReg = () => {
  return (
    <div>TeacherReg</div>
  )
}






// import React, { useRef, useState } from "react";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import axios from "../../api/axios";
// import { FaEyeSlash, FaEye } from "react-icons/fa";

// const TeacherReg = (props) => {
//   const errRef = useRef();
//   const [showPassword, setShowPassword] = useState(false);
//   const [conformShowPassword, setConformShowPassword] = useState(false);
//   const [errMsg, setErrMsg] = useState("");

//   const togglePass = () => {
//     setShowPassword(!showPassword);
//   };
//   const togglePassVisbility = () => {
//     setConformShowPassword(!conformShowPassword);
//   };

  // const isValidPassword = (password) => {
  //   const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/;
  //   return passwordRegex.test(password);
  // };
  // const isvalidnumber =(phonenumber)=>{
  //   const nepalPhoneRegex = /^(?:\+977|0)[7-9][0-9]{9}$/;
  //   return nepalPhoneRegex.test(phonenumber);
  // }
  // const formSchema= z.object({
  //   phonenumber: 
  //   z.string().refine((value) => isvalidnumber(value), {
  //     message: 'Invalid phone number format',
  //   }),
  // })
  // const formSchema = z
  //   .object({
  //     username: z
  //       .string()
  //       .min(1, "Username is required")
  //       .max(50)
  //       .nonempty(),
       
  //     email: z.string().email("Invalid email").min(1, "Email is required") ,
  //     phone: z.string().refine((value) => /^\d{10}$/.test(value), {
  //       message: "Invalid phone number",
  //       path: ["phone"],
  //     }),

  //     faculty: z
  //       .string({
  //         invalid_type_error: "This Required",
  //       })
  //       .min(1, {
  //         message: "Please Select a faculty",
  //       }),
  //     category: z
  //       .string({
  //         invalid_type_error: "This Required",
  //       })
  //       .min(1, {
  //         message: "Please Select a category",
  //       }),
  //     course: z
  //       .string({
  //         invalid_type_error: "This Required",
  //       })
  //       .min(1, {
  //         message: "Please Select a course",
  //       }),

  //     password: z
  //       .string()
  //       .min(1, "password is required")
  //       .refine((val) => isValidPassword(val), {
  //         message:
  //           "Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one number.",
  //       }),
  //     confirmPassword: z.string().min(1, "Password confirmation is required"),
  //     terms: z.literal(true, {
  //       errorMap: () => ({
  //         message: "You must accept the terms and conditions",
  //       }),
  //     }),
  //   })
  //   .refine((data) => data.password === data.confirmPassword, {
  //     path: ["confirmPassword"],
  //     message: "Passwords do not match",
  //   });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  // } = useForm({
  //   resolver: zodResolver(formSchema),
  // });

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axios.post("/user/create", data);
  //     const responseData = response.data;

  //     console.log(responseData);
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg("No Server Response");
  //     } else if (err.response?.status === 409) {
  //       setErrMsg("Username Already Taken");
  //     } else {
  //       setErrMsg("Registration Failed");
  //     }
  //     setErrMsg.current.focus();
  //   }
  // };
  // const validateDOB = (value) => {
  //   const selectedDate = new Date(value);
  //   const currentDate = new Date();

  //   if (selectedDate > currentDate) {
  //     return "Invalid Date of Birth";
  //   }

  //   return true;
  // };

  // return (
  //   <div>
  //     <section>
  //       <p
  //         ref={errRef}
  //         className={errMsg ? "errmsg" : "offscreen"}
  //         aria-live="assertive">
  //         {errMsg}
  //       </p>
  //     </section>
  //     <section className=" m-4 ">
  //       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
  //         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-300">
  //           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
  //             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
  //               Teacher SignUp
  //             </h1>

  //             <form
  //               className="space-y-4 md:space-y-6"
  //               onSubmit={handleSubmit(onSubmit)}>
  //               <div>
  //                 <label
  //                   htmlFor="username"
  //                   className="block mb-2 text-sm font-medium text-gray-900">
  //                   Full Name
  //                 </label>
  //                 <input
  //                   type="text"
  //                   id="username"
  //                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
  //                   placeholder="Your name"
  //                   {...register("username")}
  //                   autoComplete="of"
  //                 />
  //                 {errors.username && (
  //                   <span className="text-red-800 block mt-2">
  //                     {errors.username?.message}
  //                   </span>
  //                 )}
  //               </div>
  //               <div>
  //                 <label
  //                   htmlFor="email"
  //                   className="block mb-2 text-sm font-medium text-gray-900">
  //                   Your email
  //                 </label>
  //                 <input
  //                   type="email"
  //                   id="email"
  //                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
  //                   placeholder="name@company.com"
  //                   {...register("email")}
  //                   autoComplete="of"
  //                 />
  //                 {errors.email && (
  //                   <span className="text-red-800 block mt-2">
  //                     {errors.email?.message}
  //                   </span>
  //                 )}
  //               </div>
  //               <div>
  //                   <label
  //                   htmlFor="phonenumber"
  //                   className="block mb-2 text-sm font-medium text-gray-900"
  //                 >
  //                   PhoneNumber
  //                   </label>
  //                   <input
  //                   type="text"
  //                   placeholder="must include +977"
  //                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
  //                   {...register("phonenumber")}
  //                  />
  //                    {errors.phonenumber &&(
  //                   <span className="text-red-800 block mt-2">
  //                     {errors.phonenumber?.message}
  //                   </span>
  //                 )}

  //                   </div>
  //               {/* <div>
  //                 <label
  //                   htmlFor="phonenumber"
  //                   className="block mb-2 text-sm font-medium text-gray-900">
  //                   Phone Number
  //                 </label>

  //                 <PhoneInput
  //                   id="phonenumber"
  //                   placeholder="Enter phone number"
  //                   {...register("phone", { required: true })}
  //                   pattern="[0-9]{10}"
  //                 />
  //               </div> */}

  //               <div>
  //                 <label
  //                   htmlFor="dob"
  //                   className="block mb-2 text-sm font-medium text-gray-900">
  //                   Date of Birth
  //                 </label>
  //                 <input
  //                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
  //                   type="date"
  //                   id="dob"
  //                   {...register("dob", { validate: validateDOB })}
  //                 />
  //                 {errors.dob && (
  //                   <span className="text-red-800 block mt-2">
  //                     {errors.dob?.message}
  //                   </span>
  //                   )}
  //                   </div>
  //                   <div>
  //                     <label
  //                       htmlFor="faculty"
  //                       className="block mb-2 text-sm font-medium text-gray-900">
  //                       Faculty
  //                     </label>
  //                     <select
  //                       type="text"
  //                       id="faculty"
  //                       name="faculty"
  //                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
  //                       {...register("faculty")}>
  //                       <option value="">--Please choose Faculty--</option>
  //                       <option value="bsccsit">BSC CSIT</option>
  //                       <option value="bca">BCA</option>
  //                       <option value="bim">BCIM</option>
  //                     </select>
  //                     {errors.faculty && (
  //                       <span className="text-red-800 block mt-2">
  //                         {errors.faculty?.message}
  //                       </span>
  //                     )}
  //                   </div>
  //                   <div>
  //                     <label
  //                       htmlFor="category"
  //                       className="block mb-2 text-sm font-medium text-gray-900">
  //                       Category
  //                     </label>
  //                     <select
  //                       id="category"
  //                       name="category"
  //                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
  //                       {...register("category")}>
  //                       <option value=" ">--Please choose Category--</option>
  //                       <option value="1st">1st Sem</option>
  //                       <option value="2nd">2nd Sem</option>
  //                       <option value="3rd">3rd Sem</option>
  //                     </select>
  //                     {errors.category && (
  //                       <span className="text-red-800 block mt-2">
  //                         {errors.category?.message}
  //                       </span>
  //                     )}
  //                   </div>
  //                   <div>
  //                     <label
  //                       htmlFor="course"
  //                       className="block mb-2 text-sm font-medium text-gray-900">
  //                       Course
  //                     </label>
  //                     <select
  //                       id="course"
  //                       name="course"
  //                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
  //                       {...register("course")}>
  //                       <option value="">--Please choose Course--</option>
  //                       <option value="c-program">C-Program</option>
  //                       <option value="dsa">DSA</option>
  //                       <option value="java">JAVA</option>
  //                     </select>
  //                     {errors.course && (
  //                       <span className="text-red-800 block mt-2">
  //                         {errors.course?.message}
  //                       </span>
  //                     )}
  //                   </div>
    
  //                   <div>
  //                     <label
  //                       htmlFor="password"
  //                       className="block mb-2 text-sm font-medium text-gray-900">
  //                       Password
  //                     </label>
  //                     <div className="flex items-center">
  //                       <input
  //                         type={showPassword ? "text" : "password"}
  //                         name="password"
  //                         id="password"
  //                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
  //                         {...register("password")}
  //                       />
  //                       {showPassword ? (
  //                         <FaEye
  //                           size={20}
  //                           className="-ml-10  cursor-pointer"
  //                           onClick={togglePass}
  //                         />
  //                       ) : (
  //                         <FaEyeSlash
  //                           size={20}
  //                           className="-ml-10  cursor-pointer"
  //                           onClick={togglePass}
  //                         />
  //                       )}
    
  //                       {errors.password && (
  //                         <span className="text-red-800 block mt-2">
  //                           {errors.password?.message}
  //                         </span>
  //                       )}
  //                     </div>
  //                   </div>
    
  //                   <div>
  //                     <label
  //                       htmlFor="confirmPassword"
  //                       className="block mb-2 text-sm font-medium text-gray-900">
  //                       Confirm password
  //                     </label>
  //                     <div className="flex items-center">
  //                       <input
  //                         type={showPassword ? "text" : "password"}
  //                         name="password"
  //                         id="confirmPassword"
  //                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
  //                         {...register("confirmPassword")}
  //                       />
  //                       {conformShowPassword ? (
  //                         <FaEye
  //                           size={20}
  //                           className="-ml-10 cursor-pointer"
  //                           onClick={togglePassVisbility}
  //                         />
  //                       ) : (
  //                         <FaEyeSlash
  //                           size={20}
  //                           className="-ml-10 cursor-pointer"
  //                           onClick={togglePassVisbility}
  //                         />
  //                       )}
  //                       {errors.confirmPassword && (
  //                         <span className="text-red-800 block mt-2">
  //                           {errors.confirmPassword?.message}
  //                         </span>
  //                       )}
  //                     </div>
  //                   </div>
  //                   <button
  //                     type="submit"
  //                     className="w-full text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  //                     disabled={isSubmitting}>
  //                     Register
  //                   </button>
  //                 </form>
  //                 <button onClick={() => props.onFormSwitch("Login")}>
  //                   Already Register?<strong> Login</strong>
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </section>
  //       </div>
  //     );
  //   };
    
  //   export default TeacherReg;







// import React, { useState } from "react";

// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

// const TeacherReg = (props) => {
//   const [value, setValue] = useState();
  

//   const isValidPassword = (password) => {
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//     return passwordRegex.test(password);
//   };
//   const formSchema = z
//     .object({
//       username: z
//         .string()
//         .min(1, "Username is required")
//         .max(50)
//         .nonempty()
//         .regex(/^(?!.*\.com).*$/i, "Username cannot contain '.com'"),
        
//       email: z.string().email("Invalid email").min(1, "Email is required"),
//       gender: z.string({ invalid_type_error: "Please select a gender." }),
//       dob:z.string().min(8, 'enter your DOB'),
//       phonenumber:z.string().min(10,"phonenumber atleast 10 char"),
     
//       password: z
//         .string()
//         .min(1, "password is required")
//         .refine((val) => isValidPassword(val), {
//           message:
//             "Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one number.",
//         }),
//       confirmPassword: z.string().min(1, "Password confirmation is required"),
//       terms: z.literal(true, {
//         errorMap: () => ({
//           message: "You must accept the terms and conditions",
//         }),
//       }),
//     })
//     .refine((data) => data.password === data.confirmPassword, {
//       path: ["confirmPassword"],
//       message: "Passwords do not match",
//     });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = (data) => {
//     const output = {
//       ...data,
//       type: "Teacher"
//     }
//     console.log(output);
//   };

//   return (
//     <div>
//       <section className=" m-4 ">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
//           <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-300">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
//                 Teacher SignUp
//               </h1>

//               <form
//                 className="space-y-4 md:space-y-6"
//                 onSubmit={handleSubmit(onSubmit)}
//               >
//                 <div>
//                   <label
//                     htmlFor="username"
//                     className="block mb-2 text-sm font-medium text-gray-900"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//                     placeholder="Your name"
//                     {...register("username")}
//                   />
//                   {errors.username && (
//                     <span className="text-red-800 block mt-2">
//                       {errors.username?.message}
//                     </span>
//                   )}
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block mb-2 text-sm font-medium text-gray-900"
//                   >
//                     Your email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//                     placeholder="name@company.com"
//                     {...register("email")}
//                   />
//                   {errors.email && (
//                     <span className="text-red-800 block mt-2">
//                       {errors.email?.message}
//                     </span>
//                   )}
//                 </div>
//                 <div></div>
//                 <div>
//                   <label
//                     htmlFor="phonenumber"
//                     className="block mb-2 text-sm font-medium text-gray-900"
//                   >
//                     Phone Number
//                   </label>

//                   <PhoneInput
//                     id="phonenumber"
//                     placeholder="Enter phone number"
//                     value={value}
//                     onChange={setValue}
//                     {...register("phonenumber")}
                   
//                   />
//                   {errors.phonenumber &&(
//                     <span className="text-red-800 block mt-2">
//                       {errors.phonenumber?.message}
//                     </span>
//                   )}
//                 </div>
               

//                 <div>
//                   <label
//                     htmlFor="dob"
//                     className="block mb-2 text-sm font-medium text-gray-900"
//                   >
//                     Date of Birth
//                   </label>
//                   <input
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
//                     type="date"
//                     id="dob"
//                     {...register("dob")}
//                   />
//                   {errors.dob && (
//                     <span className="text-red-800 block mt-2">
//                       {errors.dob?.message}
//                     </span>
//                   )}
   
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="gender"
//                     className="block mb-2 text-sm font-medium text-gray-900"
//                   >
//                     Gender
//                   </label>
//                   <div className="flex gap-2">
//                     <input type="radio" {...register("gender")} value="male" />{" "}
//                     Male
//                     <input
//                       type="radio"
//                       {...register("gender")}
//                       value="female"
//                     />{" "}
//                     Female
//                     <input
//                       type="radio"
//                       {...register("gender")}
//                       value="other"
//                     />{" "}
//                     Other
//                   </div>
//                   {errors.gender && (
//                     <span className="text-red-800 block mt-2">
//                       {errors.gender?.message}
//                     </span>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block mb-2 text-sm font-medium text-gray-900"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//                     {...register("password")}
//                   />
//                   {errors.password && (
//                     <span className="text-red-800 block mt-2">
//                       {errors.password?.message}
//                     </span>
//                   )}
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="confirmPassword"
//                     className="block mb-2 text-sm font-medium text-gray-900"
//                   >
//                     Confirm password
//                   </label>
//                   <input
//                     type="password"
//                     id="confirmPassword"
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//                     {...register("confirmPassword")}
//                   />
//                   {errors.confirmPassword && (
//                     <span className="text-red-800 block mt-2">
//                       {errors.confirmPassword?.message}
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="terms"
//                       aria-describedby="terms"
//                       type="checkbox"
//                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                       {...register("terms")}
//                     />
//                   </div>
//                   <div>
//                   <input {...register("hidden", { value: "data" })} type="hidden" />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label htmlFor="terms" className="font-medium">
//                       I accept the{" "}
//                       <a
//                         className="font-medium text-blue-500 hover:underline dark:text-primary-500"
//                         href="#"
//                       >
//                         Terms and Conditions
//                       </a>
//                     </label>
//                   </div>
//                 </div>
//                 {errors.terms && (
//                   <span className="text-red-800 block mt-2">
//                     {errors.terms?.message}
//                   </span>
//                 )}
//                 <button
//                   type="submit"
//                   className="w-full text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                   disabled={isSubmitting}
//                 >
//                   Register
//                 </button>
//               </form>
//               <button onClick={() => props.onFormSwitch("Login")}>
//                 Already Register?<strong> Login</strong>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TeacherReg;
