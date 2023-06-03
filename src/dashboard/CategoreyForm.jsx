import React from 'react'
import { Button, FieldGroup, Input } from '../input'
import { useForm } from 'react-hook-form';

const CategoreyForm = () => {
  const { control, register, handleSubmit, setError, formState: { errors } } = useForm();

  const onSubmit = setError => payload => {
console.log('bjs')
  };
  return (
    <form onSubmit={handleSubmit(onSubmit(setError))} >
      <FieldGroup name="amount" label="Amount" hideLabel={false} error={errors.amount} className="text-md my-4">
        <Input
          placeholder="Enter the Amount"
          type="number"
          name="amount"
          autoComplete="off"
          hasError={errors.amount}
          {...register('amount', {
            required: 'Please enter the amount',
          })}
        />
      </FieldGroup>
      <div className="flex">
        <div className="flex-1">
          <FieldGroup name="date" label="Date" hideLabel={false} error={errors.date} className="text-md my-4">
            <Input
              placeholder="Enter from date"
              type="date"
              name="date"
              autoComplete="off"
              hasError={errors.date}
              {...register('date', {
                required: 'Please enter the from date',
              })}
            />
          </FieldGroup>
        </div>
        <div className="flex-1 ml-2">
        </div>
      </div>

      <Button className="mt-4font-normal" full type="submit">
        Submit
      </Button>
    </form>
  )
}

export default CategoreyForm