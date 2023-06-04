import React from "react";
import { Button, FieldGroup, Input, SelectBox, TextArea } from "../../input";
import { Controller, useForm } from "react-hook-form";
import { createQuestion } from "../../infra";

const TeacherQuestions = () => {
  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (setError) => (payload) => {
    const data={
      ...payload,
      "courseId":52
    }
    createQuestion(data)
    .then(console.log('bhdjsb'))
  };

  const answerChoice = [
    {
      id: "choice1",
      name: "choice1",
    },
    {
      id: "choice2",
      name: "choice2",
    },
    {
      id: "choice3",
      name: "choice3",
    },
    {
      id: "choice4",
      name: "choice4",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit(setError))} className="pl-8">
      <FieldGroup
        name="questionTitle"
        label="Question?"
        hideLabel={false}
        error={errors.questionTitle}
        className="text-md my-4"
      >
        <TextArea
          placeholder="Enter the question"
          type="textarea"
          name="questionTitle"
          autoComplete="off"
          hasError={errors.questionTitle}
          {...register("questionTitle", {
            required: "Please enter the questionTitle",
          })}
        />
      </FieldGroup>
      <div className="grid grid-cols-2 gap-x-14 gap-y-6 pt-8">
        <div className="col-span-1 flex gap-x-4">
          <FieldGroup
            name="choice1"
            label="Choice 1"
            hideLabel={false}
            error={errors.choice1}
            className="text-md my-4"
          />
          <Input
            placeholder="Enter the answer"
            type="text"
            name="choice1"
            autoComplete="off"
            hasError={errors.choice1}
            {...register("choice1", {
              required: "Please enter the amount",
            })}
          />
        </div>
        <div className="col-span-1 flex gap-x-4">
          <FieldGroup
            name="choice2"
            label="Choice 2"
            hideLabel={false}
            error={errors.choice2}
            className="text-md my-4"
          />
          <Input
            placeholder="Enter the answer"
            type="text"
            name="choice2"
            autoComplete="off"
            hasError={errors.choice2}
            {...register("choice2", {
              required: "Please enter the amount",
            })}
          />
        </div>
        <div className="col-span-1 flex gap-x-4">
          <FieldGroup
            name="choice3"
            label="Choice 3"
            hideLabel={false}
            error={errors.choice3}
            className="text-md my-4"
          />
          <Input
            placeholder="Enter the answer"
            type="text"
            name="choice3"
            autoComplete="off"
            hasError={errors.choice3}
            {...register("choice3", {
              required: "Please enter the amount",
            })}
          />
        </div>
        <div className="col-span-1 flex gap-x-4">
          <FieldGroup
            name="choice4"
            label="Choice 4"
            hideLabel={false}
            error={errors.choice4}
            className="text-md my-4"
          />
          <Input
            placeholder="Enter the answer"
            type="text"
            name="choice4"
            autoComplete="off"
            hasError={errors.choice4}
            {...register("choice4", {
              required: "Please enter the amount",
            })}
          />
        </div>

        <div className="col-span-1 flex gap-x-4">
          <FieldGroup
            name="answerChoice"
            label="Choose the right answer"
            hideLabel={false}
            error={errors.choice4}
            className="text-md my-4"
          />
          <Controller
            control={control}
            name="answerChoice"
            rules={{ required: "Please select a categorey type" }}
            render={({
              field: { onChange, ref, value },
              fieldState: { error },
            }) => (
              <SelectBox
                onChange={onChange}
                items={answerChoice}
                value={value}
                ref={ref}
                hasError={error}
                placeholder="Select a right answer"
              />
            )}
          />
        </div>
      </div>
        <div className="flex gap-x-4 pt-2">
          <FieldGroup
            name="questionMarks"
            label="Marks"
            hideLabel={false}
            error={errors.questionMarks}
            className="text-md my-4"
          />
          <Input
            placeholder="Enter the marks"
            type="text"
            name="questionMarks"
            autoComplete="off"
            hasError={errors.questionMarks}
            {...register("questionMarks", {
              required: "Please enter the amount",
            })}
          />
        </div>

      <Button className="mt-4  font-normal" full type="submit">
        Submit
      </Button>
    </form>
  );
};

export default TeacherQuestions;
