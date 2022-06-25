import React, { useRef } from 'react'
import { useEffect } from 'react';

const useKey = (key,cb) => {
    const Ref = useRef(cb);
    useEffect(() => {
      Ref.current=cb;
    
     
    })
    
    useEffect(() => {
        let handle=(e)=>{
          console.log(e.code);
            if(e.code===key){
                Ref.current(e)
            }

        }
      document.addEventListener("keydown",handle)
    
      return () => {
        document.removeEventListener("keydown",handle)
      }
    }, [key])
    
  
}

export default useKey