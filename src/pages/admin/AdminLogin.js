import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const formSchema = z.object({
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z
      .string()
      .min(1, "password is required")
      .refine((val) => isValidPassword(val), {
        message:
          "Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one number.",
      }),

    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
  });
  // useform
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
   
    Login(data).then(
    navigate("/admindashboard")
    )
  };

  const[userEmail,setUserEmail]=useState("");
  const [userPassword,setUserPassword]=useState("");

  const navigate=useNavigate();

  useEffect(() => {
    if (localStorage.getItem("admin-info")) {
      navigate("/admindashboard");
    }
  }, []);
  const Login= async(data)=>{
    let item= {userEmail: data.email,userPassword: data.password};
    let result= await fetch('http://localhost:9595/user/login',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":'application/json',
        mode: 'no-cors'
      },
      body:JSON.stringify(item)
    })
    result=await result.json();
    localStorage.setItem("admin-info",JSON.stringify(result))
  }

  return (
    <div>
      <div>
        <section className=" ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Admin Login
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
                      onChange={(e)=>setUserEmail(e.target.value)}
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      placeholder="name@company.com"
                      {...register("email")}
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
                    onChange={(e)=>setUserPassword(e.target.value)}
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      {...register("password")}
                    />
                    {errors.password && (
                      <span className="text-red-800 block mt-2">
                        {errors.password?.message}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        {...register("terms")}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-medium ">
                        I accept the{" "}
                        <a className="font-medium text-blue-600 hover:underline dark:text-primary-500">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  {errors.terms && (
                    <span className="text-red-800 block mt-2">
                      {errors.terms?.message}
                    </span>
                  )}
                  <div>
                    
                      
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        disabled={isSubmitting}
                      >
                        Login
                      </button>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminLogin;
