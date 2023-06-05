import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, FieldGroup, Input, TextArea } from '../../input';
import { useHandleError } from '../../hooks';
import { createFaculty } from '../../infra';


const AdminFaculty = () => {
  const { control, register, handleSubmit, setError, formState: { errors } } = useForm();

  const onSubmit=(setError)=>(payload)=>{
    const data={
      ...payload,
      userId:402
    }
    createFaculty(data)
    .then(console.log('faculty added'))
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit(setError))}>
        <FieldGroup
        name='facultyName'
        label='Faculty Name'
        hideLabel={false}
        className="text-md"
        error={errors.facultyName}

        >
          <Input
          placeholder="Enter the faculty name"
          type="text"
          name="facultyName"
          autoComplete="off"
          hasError={errors.facultyName}
          {...register('facultyName', {
            required: 'Please enter the faculty name',
          })}
        />

        </FieldGroup>
        <FieldGroup
        name='facultyDesc'
        label='Faculty Description'
        hideLabel={false}
        className="text-md"
        error={errors.facultyDesc}

        >
          <TextArea
          placeholder="Enter the faculty Description"
          type="text"
          name="facultyDesc"
          autoComplete="off"
          hasError={errors.facultyDesc}
          {...register('facultyDesc', {
            required: 'Please enter the faculty  Description',
          })}
        />

        </FieldGroup>
        <Button className="mt-4  font-normal" full type="submit">
        Submit
      </Button>

      </form>
    </div>
  )
}

export default AdminFaculty