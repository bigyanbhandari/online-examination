import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../../infra';

const AdminLogin = (props) => {
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({});

  const onSubmit= payload=>{
    adminLogin(payload)
    .then(data => {
      if (data.status === "200") {
        localStorage.setItem('token', data.JwtToken);
        navigate("/admindashboard");
      }
    })
  }
  return (
    <div>
    <section className="  ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Admin Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
            <button onClick={() => props.onFormSwitch("Register")}>
              Don't have an account?<strong>Register Here</strong>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default AdminLogin












