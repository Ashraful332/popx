"use client";
import * as React from 'react';
import * as motion from "motion/react-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Images from "@/assets/image/1595710704361.jpeg"
import icon from "@/assets/image/camera.png"
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Profile(){
  const email = useSelector((state: RootState) => state.user.email);
  console.log(email);
  const router = useRouter();
  // user data
  type User = {
    name: string;
    email: string;
  };
  const [userData, setUserData] = React.useState<User[]>([]);

  React.useEffect(() => {
    if (!email) {
      router.push("/auth/login");
    }
  }, [email, router]);

  // Fetch User data
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://chill-gamer-server-jzl0.onrender.com/user-data-popx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      });
      const data = await response.json();
      setUserData(data)
      console.log(`send data to mongodb ------------- the use profile ${data}`);
    };
  
    fetchData();
  }, []);

  return(
    <div className="flex flex-col items-center justify-center bg-[#cec0c0] h-screen" >
      <div className="border w-[375px] h-[812px] border-[#c1dcf7] bg-[#F7F8F9] rounded-2xl shadow-2xl flex flex-col ">
        <div className="">
         <nav className="flex flex-col text-[21px] pl-[15px] pt-[27px] pb-[19px] rounded-t-2xl bg-[#ffffff] shadow-md ">
            <h2 className="hover:text-blue-600 cursor-pointer">
              Account Settings
            </h2>
         </nav>
         <main className="mt-[30px] ml-[20px] ">
            <div className="flex flex-row gap-5 ">
              <div className="relative">
                <Image src={Images} width={76} alt="profile" className="rounded-full" />
                <button className="absolute top-12 left-12 cursor-pointer ">
                  <Image src={icon} alt="camera" className="w-[25px] bg-[#110f0f] p-1 rounded-full  " />
                </button>
              </div>
               <div>
                  <h1 className="text-[19px] font-semibold ">{userData[0]?.name || "Marry Doe"}</h1>
                  <p className="text-[14px] font-normal ">{userData[0]?.email || "Marry@Gmail.Com"} </p>
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