import React, { useState, useEffect } from "react";
import Bookpost from "./Bookpost";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://stephen-king-api.onrender.com/api/books",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result); // Inspect the result
         setData(result.data)
        // Access the nested array in 'data'
        // if (Array.isArray(result.data)) {
        //   setData(result.data);
        // } else {
        //   throw new Error('Data format is incorrect');
        // }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  setTimeout(() => {
    fetchBooks();
  }, 5000);
   
  }, []);

  if (loading) {
    return <center><div className="loader"><div className="loader1"></div></div></center>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="">
      
     <Bookpost data = {data} />
    </div>
  );
}

export default Home;
