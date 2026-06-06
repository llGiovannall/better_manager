
"use client";


import Image from "next/image";
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import useProgress from "../components/ui/useProgress";
import LoadingDots from "../components/ui/loadingDots";
import RegisterForm from "../components/registerForm";
import { useRouter } from "next/navigation";


export default function Home() {
 const progress = useProgress();
 const router = useRouter();

  React.useEffect(() => {
  if (progress === 100) {
    router.push("/profile");
  }
}, [progress]);

  return(

    <div className="flex flex-col flex-1 items-center justify-center  font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-center">
      
        <Image
          src="/manager.jpeg"
          alt="manager"
          width={400}
          height={400}
          priority
        />
  <Box sx={{ width: '100%' }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        aria-label="Export data"
      />
    </Box>
    <LoadingDots />
    <RegisterForm />
      
        <div className="flex flex-col items-center">
         
        </div>
      </main>
    </div>
  );
}