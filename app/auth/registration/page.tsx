"use client";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import * as motion from "motion/react-client";
import toast from 'react-hot-toast';
import Radio from '@mui/material/Radio';


export default function Registration(){
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  // handel registration
  const handelRegistration = (event:any):any => {
    event.preventDefault();
    const email:any = event.target.email.value;
    const password:any = event.target.password.value;
    toast(email);
  }
  return(
    <div className="flex flex-col items-center justify-center bg-[#cec0c0] h-screen" >
      <div className="border w-[375px] h-[812px] border-[#c1dcf7] bg-[#F7F8F9] rounded-2xl shadow-2xl flex flex-col ">
        <div className="ml-5 mt-10 ">
         <div >
          <h3 className="text-[28px]/8.5 text-[#1D2226] mb-[22px] font-bold w-[188px]  ">
            Create your PopX account
          </h3>
         </div>
         <form 
         onSubmit={handelRegistration}
         className="mt-6 flex flex-col  gap-8 ">
          <div className='flex flex-col  gap-9'>
            <TextField label="Full Name*" placeholder='Enter name' name='name' color="info" focused 
            className='w-[335px] h-[40px] '
            />
            <TextField label="Phone number*" placeholder='Enter phon number' name='number' color="info" focused 
            className='w-[335px] h-[40px] '
            />
            <TextField label="Email address*" placeholder='Enter email address' name='email' color="info" focused 
            className='w-[335px] h-[40px] '
            />
            <TextField label="Password*" placeholder='Enter Password' name='password' color="info" focused 
            className='w-[335px] h-[40px] '
            />
            <TextField label="Company name#" placeholder='Enter your company name' name='company' color="info" focused 
            className='w-[335px] h-[40px] '
            />
            <div>
              <p className='text-[16px] '>Are you an Agency?<samp className='text-green-600'>*</samp></p>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                Yes
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'No' }}
                />
                No
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.8 }}
            transition={{ease:"easeOut",duration:0.3}}
            type='submit'
            className="w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] cursor-pointer text-white font-bold mt-[110px] ">
            Create Account
          </motion.button>
         </form>
        </div>
      </div>
    </div>
  )
}