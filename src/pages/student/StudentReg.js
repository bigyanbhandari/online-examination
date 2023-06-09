import React, { useEffect, useState } from "react";

import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addStudent, getAllCourse } from "../../infra";
import { useNavigate } from "react-router-dom";
import { useHandleError } from "../../hooks";

const StudentReg = (props) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);
  const handleError = useHandleError();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const isvalidnumber = (phonenumber) => {
  //   const nepalPhoneRegex = /^(?:\+977|0)[7-9][0-9]{9}$/;
  //   return nepalPhoneRegex.test(phonenumber);
  // };
  // const formSchema = z
  //   .object({
  //     userName: z
  //       .string()
  //       .min(1, "Username is required")
  //       .max(50)
  //       .nonempty()
  //       .regex(/^(?!.*\.com).*$/i, "Username cannot contain '.com'"),
  //     userEmail: z.string().email("Invalid email").min(1, "Email is required"),
  //     userGender: z.string({ invalid_type_error: "Please select a gender." }),
  //     userDateOfBirth: z.string().min(8, "Enter your DOB"),

  //     userContactNumber: z.string().refine((value) => isvalidnumber(value), {
  //       message: "Invalid phone number format",
  //     }),

  //     userPassword: z.string().min(1, "password is required"),

  //     confirmPassword: z.string().min(1, "Password confirmation is required"),
  //   })
  //   .refine((data) => data.userPassword === data.confirmPassword, {
  //     path: ["confirmPassword"],
  //     message: "Passwords do not match",
  //   });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  //   setValue,
  // } = useForm({
  //   resolver: zodResolver(formSchema),
  // });

  const [course, setCourse] = useState();
  useEffect(() => {
    getAllCourse().then(setCourse);
  }, []);

  console.log(course);
  const {
    handleSubmit,
    reset,
    register,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (setError) => (payload) => {
    return addStudent(payload)
      .then((data) => {
        if (data.status === "200") {
          setTimeout(() => {
            navigate("/");
          }, 1000);
          reset();
        } else {
          handleError(null, null, data.error_msg);
        }
      })
      .catch((err) => {
        handleError(null, null, err.message);
      });
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
                onSubmit={handleSubmit(onSubmit(setError))}
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
                    name="userName"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="Your name"
                    {...register("userName")}
                  />
                  {errors.userName && (
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
                    name="userEmail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="name@company.com"
                    {...register("userEmail")}
                  />
                  {errors.userEmail && (
                    <span className="text-red-800 block mt-2">
                      {errors.userEmail?.message}
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
                    name="userContactNumber"
                    type="text"
                    placeholder="must include +977"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    {...register("userContactNumber")}
                  />
                  {errors.userContactNumber && (
                    <span className="text-red-800 block mt-2">
                      {errors.userContactNumber?.message}
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
                        {...register("userGender")}
                        value="Male"
                      />
                      Male
                      <input
                        type="radio"
                        {...register("userGender")}
                        value="Female"
                      />{" "}
                      Female
                      <input
                        type="radio"
                        {...register("userGender")}
                        value="Others"
                      />{" "}
                      Other
                    </div>
                    {errors.userGender && (
                      <span className="text-red-800 block mt-2">
                        {errors.userGender?.message}
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
                      name="userDateOfBirth"
                      {...register("userDateOfBirth")}
                    />
                    {errors.userDateOfBirth && (
                      <span className="text-red-800 block mt-2">
                        {errors.userDateOfBirth?.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="courses"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Courses
                  </label>

                  
                  <Controller
                    name="courseId"
                    control={control}
                    defaultValue="" // Set the default value if needed
                    render={({ field }) => (
                      <select {...field}>
                        <option value="">Select an option</option>
                        {course?.data.map((options) => (
                          <option
                            key={options.courseId}
                            value={options.courseId}
                          >
                            {options.courseTitle}
                          </option>
                        ))}
                      </select>
                    )}
                  />

                  {errors.courseId && (
                    <span className="text-red-800 block mt-2">
                      {errors.courseId?.message}
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
                    name="userPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    {...register("userPassword")}
                  />
                  {errors.userPassword && (
                    <span className="text-red-800 block mt-2">
                      {errors.userPassword?.message}
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
