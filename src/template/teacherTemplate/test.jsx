import React from "react";
import { Controller, useForm } from "react-hook-form";
import SelectBox from "../../input/SelectBox";
import { FieldGroup,  TextArea } from "../../input";

const TeacherQuestions = () => {
  const {
    control,
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const ans1 = watch("ans1");
  const ans2 = watch("ans2");
  const ans3 = watch("ans3");
  const ans4 = watch("ans4");
  console.log(ans1, ans2, ans3);
  const answers = [
    {
      id: ans1,
      name: ans1,
    },
    {
      id: ans2,
      name: ans2,
    },
    {
      id: ans3,
      name: ans3,
    },
    {
      id: ans4,
      name: ans4,
    },
  ];
  const onSubmit = (payload) => {
    console.log(payload)
  };

  return (
    <div>
      <h1 className="font-semibold text">Add Questions</h1>
      <form onSubmit={handleSubmit(onSubmit(setError))}>
        <div className="grid grid-cols-2 pb-6">
          <FieldGroup
            name="amount"
            label="Question?"
            hideLabel={false}
            error={errors.amount}
            className="text-md my-4"
          >
            <TextArea
              placeholder="Enter the question"
              type="textarea"
              name="question"
              autoComplete="off"
              hasError={errors.amount}
              {...register("question", {
                required: "Please enter the question",
              })}
            />
          </FieldGroup>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-1">
            <label className="col-span-2 pr-3">Option 1</label>
            <input
              className="border rounded-md border-gray-500"
              type="textarea"
              name="ans1"
              {...register("ans1", {
                required: "Please enter the from date",
              })}
            />
          </div>
          <div className="col-span-1">
            <label className="col-span-2 pr-3">Option 2</label>
            <input
              className="border rounded-md border-gray-500"
              type="textarea"
              name="ans2"
              {...register("ans2", {
                required: "Please enter the from date",
              })}
            />
          </div>
          <div className="col-span-1">
            <label className="col-span-2 pr-3">Option 3</label>
            <input
              className="border rounded-md border-gray-500"
              type="textarea"
              name="ans3"
              {...register("ans3", {
                required: "Please enter the from date",
              })}
            />
          </div>
          <div className="col-span-1">
            <label className="col-span-2 pr-3">Option 4</label>
            <input
              className="border rounded-md border-gray-500"
              type="textarea"
              name="ans4"
              {...register("ans4", {
                required: "Please enter the from date",
              })}
            />
          </div>

          <div className="col-span-1">
            <label className="col-span-2 pr-3">Choose the right answer</label>
            <Controller
              control={control}
              name="answers"
              rules={{ required: "Please select a categorey type" }}
              render={({
                field: { onChange, ref, value },
                fieldState: { error },
              }) => (
                <SelectBox
                  onChange={onChange}
                  items={answers}
                  value={value}
                  ref={ref}
                  hasError={error}
                  placeholder="Select a right answer"
                />
              )}
            />
          </div>
        </div>

        <button
          className="mt-4 font-normal px-4 py-2 text-white rounded-md bg-gray-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TeacherQuestions;
