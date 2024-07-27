import React from "react";

function Bookpost({ data }) {
    if (!Array.isArray(data) || data.length === 0) {
        return <div style={{ paddingTop: "100px" }}>No books available</div>;
    }

    return (
       
       
        <div className="card-container">
  {data.filter(item => item.villains.length > 0 && item.villains.length == 1).map(item => (
    <div className="card" key={item.id}> 
      <div className="card-item">
        <h3>{item.Title}</h3> 
        {item.villains.map((villain, index) => (
          <div key={index}> 
            <p>{villain.name}</p>
            <img src={villain.url} alt={villain.name} /> 
          </div>
        ))}
      </div>
    </div>
  ))}
</div>


      
        
      
    );
}

export default Bookpost;
