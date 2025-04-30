"use client";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import * as motion from "motion/react-client";
import toast from 'react-hot-toast';
import Radio from '@mui/material/Radio';
import { useRouter } from "next/navigation";


export default function Registration(){
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('No');

  // Starting the server for quick response
  React.useEffect(() => {
    fetch("http://localhost:5022/all-review")
    .then((res) => res.json())
    .then((data) => {
        setLoading(true);
        console.log(loading);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
    });
  }, []);

  // declare the is Agency
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  // handel registration
  const handelRegistration = (event:any):any => {
    event.preventDefault();

    const name:string = event.target.name.value;
    const number:number = event.target.number.value;
    const email:any = event.target.email.value;
    const password:any = event.target.password.value;
    const company:any = event.target.company.value;
    let Agency:string = selectedValue;
    
    const UserData = {name,number,email,password,company,Agency};
    console.log(UserData);
    console.log(` this is ------------${selectedValue}`);
    
    // send data to the server
    fetch('http://localhost:5022/registration-p', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(UserData),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        toast.success("Review added successfully!");
        router.push("/auth/login");
    })
    .catch((error) => {
        console.error('Error:', error);
        toast.error("Error adding review");
    });

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
            required
            />
            <TextField label="Phone number*" placeholder='Enter phon number' name='number' color="info" focused 
            className='w-[335px] h-[40px] '
            required
            />
            <TextField label="Email address*" placeholder='Enter email address' name='email' color="info" focused 
            className='w-[335px] h-[40px] '
            required
            />
            <TextField label="Password*" placeholder='Enter Password' name='password' color="info" focused 
            className='w-[335px] h-[40px] '
            required
            />
            <TextField label="Company name#" placeholder='Enter your company name' name='company' color="info" focused 
            className='w-[335px] h-[40px] '
            required
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
        {/* <p className='ml-5 '>the Server is {loading ? "connect" : "not connect"}</p> */}
      </div>
    </div>
  )
}