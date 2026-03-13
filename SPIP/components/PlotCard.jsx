import React from "react";

function PlotCard({ name, location, price, img }) {
  return (
    <div className="plot-card">
   
      <h3>{name}</h3>
      <p>{location}</p>
      <p style={{ fontWeight: "bold", color: "#d4af37" }}>{price}</p>
      <button>Invest Now</button>
    </div>
  );
}

export default PlotCard;