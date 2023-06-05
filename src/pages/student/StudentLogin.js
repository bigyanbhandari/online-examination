import React,{useState} from 'react'
import {  z } from "zod";
import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentLogin } from '../../infra';
import { useNavigate } from 'react-router-dom';


const StudentLogin = (props) => {
  // const isValidPassword = (password) => {
  //   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  //   return passwordRegex.test(password);
  // };

  // const formSchema = z
  // .object({
   
  //   email: z.string().email("Invalid email").min(1, "Email is required"),
  //   password: z
  //   .string().min(1,"password is required")
  //   .refine((val) => isValidPassword(val), {
  //     message: "Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one number.",
  //   }),
     
  //   terms: z.literal(true, {
  //     errorMap: () => ({ message: "You must accept the terms and conditions" }),
  //   }),
  // })
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
  
  });
  
  const onSubmit=(payload)=>{
    studentLogin(payload)
    .then(data=>{
      if(data.status === "200"){
        localStorage.setItem('token',data.JwtToken);
        navigate('/studentdashboard')
        
      }
    })
    
  }


    

  return (
    <div >
      <section className=" ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-300">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Student Login
            </h1>
            <form
  className="space-y-4 md:space-y-6"
  onSubmit={handleSubmit(onSubmit)}
>
  
  <div>
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium"
    >
      Your email
    </label>
    <input
      type="email"
      id="userEmail"
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
      placeholder="name@company.com"
      {...register("userEmail")}
    />
    {errors.email && (
      <span className="text-red-800 block mt-2">
        {errors.email?.message}
      </span>
    )}
  </div>
  <div>
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium "
    >
      Password
    </label>
    <input
      type="password"
      id="userPassword"
      placeholder="••••••••"
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
      {...register("userPassword")}
    />
    {errors.password && (
      <span className="text-red-800 block mt-2">
        {errors.password?.message}
      </span>
    )}
  </div>
  
 
 
  
    <button
    type="submit"
    className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    disabled={isSubmitting}
  >
   Login
  </button>
   
  
</form>
<button  onClick={() => props.onFormSwitch('Register')}>Don't have an account?<strong>Register Here</strong></button>
</div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default StudentLogin; 