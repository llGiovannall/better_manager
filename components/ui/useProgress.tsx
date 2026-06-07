import React from "react";

    
    
    
    export default function useProgress() {
    const [progress, setProgress] = React.useState(0);
React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
           clearInterval(timer);
           return 100;
        }
        return oldProgress + 1;
      });
    }, 30);


    return () => {
      clearInterval(timer);
    };
  }, []);



return progress;}