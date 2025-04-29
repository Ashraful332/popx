"use client";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Images from "@/assets/image/1595710704361.jpeg"

export default function Profile(){
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
        <div className="">
         <nav className="flex flex-col text-[21px] pl-[15px] pt-[27px] pb-[19px] rounded-t-2xl bg-[#ffffff] shadow-md ">
            <h2>Account Settings</h2>
         </nav>
         <main className="mt-[30px] ml-[20px] ">
            <div className="flex flex-row gap-5 ">
               <Image src={Images} width={76} alt="profile" className="rounded-full" />
               <div>
                  <h1 className="text-[19px] font-semibold ">Marry Doe</h1>
                  <p className="text-[14px] font-normal ">Marry@Gmail.Com</p>
               </div>
            </div>
            <div>
               <p className="mt-[30px] text-[15px] text-[#1d2226d0] ">Write about your self and mack your profile or portfolio good and grate </p>
            </div>
         </main>
         <hr className="border-dashed text-[#917f7fd3] border-[1.5px] mt-6 " />
         <footer>

         </footer>
        </div>
      </div>
    </div>
  )
}