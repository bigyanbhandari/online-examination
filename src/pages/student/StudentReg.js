import React, { useState } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const StudentReg = (props) => {
  
  const [selectedOption, setSelectedOption] = useState("");

 

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const isvalidnumber =(phonenumber)=>{
    const nepalPhoneRegex = /^(?:\+977|0)[7-9][0-9]{9}$/;
    return nepalPhoneRegex .test(phonenumber);
  }
  const formSchema = z
    .object({
      username: z
        .string()
        .min(1, "Username is required")
        .max(50)
        .nonempty()
        .regex(/^(?!.*\.com).*$/i, "Username cannot contain '.com'"),
      email: z.string().email("Invalid email").min(1, "Email is required"),
      gender: z.string({ invalid_type_error: "Please select a gender." }),
      dob: z.string().min(8, "Enter your DOB"),
      faculty: z
        .string({
          invalid_type_error: "This Required",
        })
        .min(1, {
          message: "Please Select a faculty",
        }),
       catagories: z
        .string({
          invalid_type_error: "This Required",
        })
        .min(1, {
          message: "Please Select catagories",
        }),

        courses: z
        .string({
          invalid_type_error: "This Required",
        })
        .min(1, {
          message: "Please Select courses",
        }),
        phonenumber: 
        z.string().refine((value) => isvalidnumber(value), {
          message: 'Invalid phone number format',
        }),
        

      password: z
        .string()
        .min(1, "password is required")
        .refine((val) => isValidPassword(val), {
          message:
            "Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one number.",
        }),
      confirmPassword: z.string().min(1, "Password confirmation is required"),
      terms: z.literal(true, {
        errorMap: () => ({
          message: "You must accept the terms and conditions",
        }),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    });

  const handleChange = (event) => {
    console.log(event);
    setSelectedOption(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  

  return (
    <div>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-300">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Student SignUp
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="Your name"
                    {...register("username")}
                  />
                  {errors.username && (
                    <span className="text-red-800 block mt-2">
                      {errors.username?.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>

                  <input
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
                    htmlFor="phonenumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    PhoneNumber
                    </label>
                    <input
                    type="text"
                    placeholder="must include +977"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    {...register("phonenumber")}
                   />
                     {errors.phonenumber &&(
                    <span className="text-red-800 block mt-2">
                      {errors.phonenumber?.message}
                    </span>
                  )}

                    </div>

                <div className="flex justify-around items-center">
                  <div>
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Gender
                    </label>
                    <div className="flex gap-1">
                    <input
                        type="radio"
                        {...register("gender")}
                        value="Male"
                        
                      />
                      Male
                      <input
                        type="radio"
                        {...register("gender")}
                        value="Female"
                        
                      />{" "}
                      Female
                      <input
                        type="radio"
                        {...register("gender")}
                        value="Others"
                        
                      />{" "}
                      Other
                    </div>
                    {errors.gender && (
                      <span className="text-red-800 block mt-2">
                        {errors.gender?.message}
                      </span>
                     
                     
                    )}
                   
                   
                  </div>
                  
                  <div>
                    <label
                      htmlFor="dob"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Date of Birth
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                      type="date"
                      id="dob"
                      {...register("dob")}
                    />
                    {errors.dob && (
                      <span className="text-red-800 block mt-2">
                        {errors.dob?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="faculty"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Faculty
                  </label>
                  <select
                    id="faculty"
                    name="faculty"
                    value={selectedOption}
                    onChangeCapture={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    {...register("faculty")}
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="bsccsit">BSC CSIT</option>
                    <option value="bca">BCA</option>
                    <option value="bim">Bcim</option>
                  </select>
                  {errors.faculty && (
                    <span className="text-red-800 block mt-2">
                      {errors.faculty?.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="catagories"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Categories
                  </label>
                  <select
                    id="catagories"
                    name="catagories"
                    value={selectedOption}
                    onChangeCapture={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    {...register("catagories")}
                  >
                    <option value="">--Please choose catagories--</option>
                    <option value="1st sem">1st SEM</option>
                    <option value="2nd sem">2nd SEM</option>
                    <option value="3rd sem">3rd SEM</option>
                  </select>
                  {errors.catagories && (
                    <span className="text-red-800 block mt-2">
                      {errors.catagories?.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="courses"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Courses
                  </label>
                  <select
                    id="courses"
                    name="courses"
                    value={selectedOption}
                    onChangeCapture={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    {...register("courses")}
                  >
                    <option value="">--Please choose courses--</option>
                    <option value="java">Java</option>
                    <option value="dsa">DSA</option>
                    <option value="cprog">C-prog</option>
                  </select>
                  {errors.courses && (
                    <span className="text-red-800 block mt-2">
                      {errors.courses?.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
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
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-800 block mt-2">
                      {errors.confirmPassword?.message}
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
                    <label htmlFor="terms" className="font-medium">
                      I accept the{" "}
                      <a
                        className="font-medium text-blue-500 hover:underline dark:text-primary-500"
                        href="#"
                      >
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
                <button
                  type="submit"
                  className="w-full text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </form>
              <button onClick={() => props.onFormSwitch("Login")}>
                Already Register?<strong> Login</strong>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentReg;
