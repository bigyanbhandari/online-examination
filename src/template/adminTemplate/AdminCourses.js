import React from "react";
import { Button, FieldGroup, Input } from "./../../input";
import { useForm } from "react-hook-form";


const AdminCourses = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("submited");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit(setError))}
      className=" ">
      <div className="text-2xl font-semibold py-4 ">Create Faculty</div>
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
        <div className="flex-1 ml-2"></div>
        <FieldGroup
          name="courseDesc"
          label="Course Description"
          hideLabel={false}
          hasError={errors.courseDesc}
          className="text-md my-4">
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

      <Button className="mt-4font-normal bg-red-600" full type="submit">
        Add
      </Button>
    </form>
  );
};

export default AdminCourses;