import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants = [], onUpdatePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard 
          key={plant.id} // Make sure this is present
          plant={plant} 
          onUpdatePlant={onUpdatePlant} 
        />
      ))}
    </ul>
  );
}

export default PlantList;