import React from "react";
import { Button, FieldGroup, Input } from "./../../input";
import { useForm } from "react-hook-form";
import { createCourse, createFaculty } from "../../infra";
import CourseTable from "./admintempcontent/CourseTable";


const AdminCourses = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit=(setError)=>(payload)=>{
    const data={
      ...payload,
      userId:402
    }
    createCourse(data)
    .then(console.log(data,'Course added'))
     
  
    
  }
  
  return (
    <div className="w-full">
    <form
      onSubmit={handleSubmit(onSubmit(setError))}
      className=" ">
      <div className="text-2xl font-semibold py-4 ">Create Course</div>
      <FieldGroup
        name="courseTitle"
        label="Course Title"
        hideLabel={false}
        hasError={errors.courseTitle}
        className="text-md my-4 ">
        <Input
          placeholder="Course Title"
          type="text"
          autoComplete="off"
          hasError={errors.courseTitle}
          {...register("courseTitle", {
            required: "Please enter the courseTitle",
          })}
        />
      </FieldGroup>
      <div className="flex">
        <div className="flex-1"></div>
        <div className=""></div>
        <FieldGroup
          name="courseDesc"
          label="Course Description"
          hideLabel={false}
          hasError={errors.courseDesc}
          className="text-md my-4 w-full">
          <Input
            placeholder="Course Description"
            type="text"
            autoComplete="off"
            hasError={errors.courseDesc}
            {...register("courseDesc", {
              required: "Please enter the courseDesc",
            })}
          />
        </FieldGroup>
      </div>

      <Button className="mt-4font-normal bg-red-600 w-[500px]  "  type="submit">
        Add
      </Button>
    </form>
    <CourseTable />
    </div>
  );
};


export default AdminCourses;