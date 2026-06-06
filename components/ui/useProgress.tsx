import React from "react";
import { useRouter } from "next/navigation";

    
    
    
    export default function useProgress() {
    const [progress, setProgress] = React.useState(0);
    const router = useRouter();
React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100;
        }
        const diff = Math.random() * 2;
        return Math.min(oldProgress + diff, 100);
      });
    if (progress === 100) {
        router.push("/profile");
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);



return progress;}