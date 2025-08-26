import { useEffect,useState } from "react";

export const TodoDate=()=>{
      const [dateTime,setDateTime]=useState("");  //using this state to maintain date and time consistantly updatting

      //todo date and time
    
 useEffect(()=>{          ///using useeffect to avaiod memory leak
const interval= setInterval(()=>{
        
    const now=new Date();   // current date & time
    const formattedDate=now.toLocaleDateString();   // e.g., 8/26/2025
    const formattedTime=now.toLocaleTimeString();   // e.g., 11:15:30 AM

    setDateTime(`${formattedDate}-${formattedTime}`);   // Update state with "date - time"
    },1000 )
    return ()=> clearInterval(interval);          //  Cleanup function (runs when component unmounts)             
 }, [])


    return (
         <h2 className="date-time">{dateTime}</h2>
    )
}