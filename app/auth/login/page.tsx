"use client";
import TextField from '@mui/material/TextField';
import * as motion from "motion/react-client";
import toast from 'react-hot-toast';

export default function Login(){
  const handelLogin = (event:any):any => {
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
          <h3 className="text-[28px]/8.5 text-[#1D2226] font-bold w-[188px]  ">
            Signin to your PopX account
          </h3>
          <p className="text-[18px] text-[#1D2226] font-medium opacity-[.6] mb-[33px] w-[232px] ">
            signing your user account
          </p>
         </div>
         <form 
         onSubmit={handelLogin}
         className="mt-6 flex flex-col items-start gap-8 ">
          <div className='flex flex-col items-start gap-9'>
            <TextField label="Email Address" placeholder='Enter email address' name='email' color="info" focused 
            className='w-[335px] h-[40px] '
            />
            <TextField label="Password" placeholder='Enter Password' name='password' color="info" focused 
            className='w-[335px] h-[40px] '
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.8 }}
            transition={{ease:"easeOut",duration:0.3}}
            type='submit'
            className="w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] cursor-pointer text-white font-bold ">
            Login
          </motion.button>
         </form>
        </div>
      </div>
    </div>
 )
}