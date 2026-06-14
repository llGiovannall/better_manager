
"use client"


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";



export default function Profile() {

  const [showTabs, setShowTabs] = useState(false);

const router = useRouter();

  return (


 
        <section className="py-10 bg-white/10 rounded-xl">
           <button style={{ backgroundColor: 'lightgray', alignSelf: 'flex-start', padding: '1px', color: 'black' }} onClick={() => setShowTabs(!showTabs)}>
       +
      </button>
             {showTabs && (
        <Tabs defaultValue="account" className="w-full sm:w-[300px] md:w-[500px] lg:w-[500px] mr-auto">
    <TabsList variant="line" style={{backgroundColor: 'black'}} className="lg:w-[40%] h-9 border-gray-300 mb-4 flex-col h-fit">
  <TabsTrigger value="account" className="w-full h-8">
    Chat & Meeting
  </TabsTrigger>
  <TabsTrigger value="Workspace" className="w-full h-8" onClick={() => router.push("/workspace")}>
    Workspace
  </TabsTrigger>
   <TabsTrigger value="Management" className="w-full h-8" >
    Management
  </TabsTrigger>
</TabsList>
</Tabs> )}
          <div className="lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4">
            <div className="lg:w-[88%] sm:w-[88%] w-full bg-white p-20 rounded-xl h-fit self-center">
              <div className="flex flex-col gap-4">
                <h1 className="lg:text-3xl md:text-2xl text-xl font-serif font-extrabold mb-2 dark:text-black">
              Profile
            </h1>

                
   


            <h2 className="text-grey text-sm mb-4 dark:text-black">Create Profile</h2>
            <div>
              <div className="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
                  <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                    <input type="file" name="profile" id="upload_profile" hidden required />
                    <label htmlFor="upload_profile">
                      <svg className="w-6 h-5 text-blue-700" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                      </svg>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <input type="file" name="profile" id="upload_cover" hidden required />
                  <div className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                    <label htmlFor="upload_cover" className="inline-flex items-center gap-1 cursor-pointer">
                      Cover
                      <svg className="w-6 h-5 text-blue-700" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-center mt-1 font-semibold dark:text-black">
              Personal Information
            </h2>

            <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
              <div className="w-full mb-4 mt-6">
                <label className="mb-2 dark:text-gray-300">First Name</label>
                <input type="text" className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800" placeholder="First Name" />
              </div>
              <div className="w-full mb-4 lg:mt-6">
                <label className="dark:text-gray-300">Last Name</label>
                <input type="text" className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800" placeholder="Last Name" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
              <div className="w-full">
                <h3 className="dark:text-gray-300 mb-2">Sex</h3>
                <select className="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800">
                  <option disabled value="">Select Sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="w-full">
                <h3 className="dark:text-gray-300 mb-2">Date Of Birth</h3>
                <input type="date" className="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800" />
              </div>
            </div>

            <div className="w-full rounded-lg bg-red-800 mt-4 text-white text-lg font-semibold">
              <button type="submit" className="w-full p-4">Save</button>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
   
}