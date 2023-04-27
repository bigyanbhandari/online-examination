import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import styled from 'styled-components'


const NumberPage = () => {
  const [phoneNumber, setPhoneNumber]=useState('')

  const handleChange =()=>{
    setPhoneNumber(phoneNumber);
  }

 const SPhoneInput = styled(PhoneInput)`
    &.PhoneInput {
        border: 1px solid #D0D5DD;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        padding: 10px 14px;
        height: 44px;
        &.PhoneInput--focus {
            .PhoneInputInput {
                border: none !important;
                outline: none !important;
            }
        }
        .PhoneInputInput {
            margin-left: 12px;

        }
        .PhoneInputCountry {
            display: flex;
            gap: 4px;
            
            
            
        }
        .PhoneInputCountrySelectArrow {
            width: 10px;
            height: 10px;
             
        }
    }
`;
  return (
    <div >
     
       
        <div className='p-3 md:p-6  flex flex-col items-center lg:flex-row  lg:justify-center gap-5 lg:gap-10 lg:p-10'>
        <SPhoneInput
        className=' w-full lg:w-[20%] md:w-[50%] rounded-lg border-2   '
      international
 
  defaultCountry="RU"
  value={phoneNumber}

  onChange={handleChange}
  />
   
 




  </div>
    </div>
  )
}

export default NumberPage