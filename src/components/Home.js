import React from "react";
import { useState, useEffect } from "react";







function Home(){
    const [data, setData] = useState([]);
    try{

        
        let post =  () =>{
          fetch("https://stephen-king-api.onrender.com/api/books",{
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                
                }
            }).then((response)=>{
                return response.json();
            }).then((result)=>{
                setData(result);
                console.log(result)
            })
        }
        useEffect(() => {
            
            return () => {
                post()
            };
        }, []);
        
    }
    catch(err){
        console.log(err)
    }

  
    return(
       
    
<div>
    <h1>Tests</h1>

</div>
    )
};
export default Home;