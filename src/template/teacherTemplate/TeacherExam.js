import React, { useState, useEffect, useRef } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Button, FieldGroup, Input, SelectBox, TextArea } from '../../input';
import { examStart } from '../../infra';

// import { useHandleError } from '../../../../hooks';

const TeacherExam = () => {
  const { control, register, handleSubmit, setError, formState: { errors } } = useForm();
  const questionPattern = [
    {
      id: 'random',
      name: 'Random',
    },
    {
      id: 'sort',
      name: 'Sort',
    },
  ]

  // const validateDate = value => {
  //   const selectedDate = parseISO(value);
  //   const today = new Date();

  //   if (isAfter(selectedDate, today)) {
  //     return 'Selected date cannot be greater than today';
  //   }

  //   return true;
  // };

  const onSubmit = setError => payload => {
    examStart(payload).then(console.log('success'))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit(setError))} >
      <FieldGroup name="examTitle" label="Exam Title" hideLabel={false} error={errors.examTitle} className="text-md my-4">
        <Input
          placeholder="Enter the exam title"
          type="text"
          name="examTitle"
          autoComplete="off"
          hasError={errors.examTitle}
          {...register('examTitle', {
            required: 'Please enter the amount',
          })}
        />
      </FieldGroup>
      <FieldGroup name="examDesc" label="Exam Description" hideLabel={false} error={errors.examDesc} className="text-md my-4">
        <TextArea
          placeholder="Enter the exam description"
          type="textArea"
          name="examDesc"
          autoComplete="off"
          hasError={errors.examDesc}
          {...register('examDesc', {
            required: 'Please enter the note',
          })}
        />
      </FieldGroup>
      <div className="flex">
        <div className="flex-1">
          <FieldGroup name="examStartedTime" label="Exam Start Time" hideLabel={false} error={errors.examStartedTime} className="text-md my-4">
            <Input
              placeholder="Enter from examStartedTime"
              type="datetime-local"
              name="examStartedTime"
              autoComplete="off"
              hasError={errors.examStartedTime}
              {...register('examStartedTime', {
                // validate: validateDate,
                required: 'Please enter the from date',
              })}
            />
          </FieldGroup>
        </div>
        <div className="flex-1 ml-2">
        <FieldGroup name="examEndedTime" label="Exam End Time" hideLabel={false} error={errors.examEndedTime} className="text-md my-4">
            <Input
              placeholder="Enter from examEndedTime"
              type="datetime-local"
              name="examEndedTime"
              autoComplete="off"
              hasError={errors.examEndedTime}
              {...register('examEndedTime', {
                // validate: validateDate,
                required: 'Please enter the from date',
              })}
            />
          </FieldGroup>
        </div>
      </div>

      <FieldGroup name="questionPattern" label="Question Pattern" error={errors.questionPattern} hideLabel={false} className="text-md my-4">
        <Controller
          control={control}
          name="questionPattern"
          rules={{ 'required': 'Please select a question pattern' }}
          render={({
            field: { onChange, ref, value },
            fieldState: { error },
          }) => (
            <SelectBox
              onChange={onChange}
              items={questionPattern}
              value={value}
              ref={ref}
              hasError={error}
              placeholder="Select a question pattern"
            />
          )}
        />
      </FieldGroup>

      <FieldGroup name="examQuestionDisplayLimit" label="Exam Question Display Limit" hideLabel={false} error={errors.examQuestionDisplayLimit} className="text-md my-4">
        <Input
          placeholder="Enter the Exam Question Display Limit"
          type="number"
          name="examQuestionDisplayLimit"
          autoComplete="off"
          hasError={errors.examQuestionDisplayLimit}
          {...register('examQuestionDisplayLimit', {
            required: 'Please enter the Exam Question Display Limit',
          })}
        />
      </FieldGroup>

      <Button className="mt-4  font-normal" full type="submit">
        Submit
      </Button>
    </form>
  )
}

export default TeacherExam;
