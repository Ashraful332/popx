"use client";
import * as motion from "motion/react-client";
import { useRouter } from "next/navigation";


export default function Home(){
  const router = useRouter();

  // for going the Login page
  const handelLogin = () => {
    router.push("/auth/login");
  };
  // for going the registration page
  const handelRegistration = () => {
    router.push("/auth/registration");
  };
  return(
    <div className="flex flex-col items-center justify-center bg-[#cec0c0] h-screen" >
      <div className="border w-[375px] h-[812px] border-[#c1dcf7] bg-[#F7F8F9] rounded-2xl shadow-2xl flex flex-col ">
        <div className="flex flex-col ">
          <h1 className="text-[28px] text-[#1D2226] font-bold ml-5 mt-[549px] ">Welcome to PopX</h1>
          <p className="text-[18px] text-[#1D2226] font-medium opacity-[.6] ml-5 mb-[29px] w-[232px] ">
            Create your personal account or portfolio in Popx
          </p>
          <div className="flex flex-col items-center gap-[10px] ">
            <motion.button onClick={handelRegistration}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.8 }}
            transition={{ease:"easeOut",duration:0.3}}
            className="w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] cursor-pointer text-white font-bold ">
              Create Account
            </motion.button>
            <motion.button onClick={handelLogin}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.8 }}
            transition={{ease:"easeOut",duration:0.3}}
            className="w-[335px] h-[46px] bg-[#6C25FF4B] rounded-[6px] font-bold cursor-pointer ">
              Already Registered? Login
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}