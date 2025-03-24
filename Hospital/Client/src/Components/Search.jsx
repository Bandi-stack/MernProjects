import React from "react";
import { Link } from "react-router-dom";
const specialties = [
  { id: 1, name: "Cardiology", icon: "/assets/cardiologist_icon.png" },
  { id: 2, name: "Dermatology", icon: "/assets/dermatologist_icon.png" },
  { id: 3, name: "Pediatrics", icon: "/assets/pediatrician_icon.png" },
  { id: 4, name: "Neurology", icon: "/assets/neurologist_icon.png" },
  { id: 5, name: "Orthopedics", icon: "/assets/orthopedist_icon.png" },
];
const Search = () => {
  return (
    <>
      <section className="specialties">
        <h2>Our Specialties</h2>

        <div className="specialties-container">
          {specialties.map((specialty) => (
            <div className="specialty" key={specialty.id}>
              <Link to="/doctors">
                {" "}
                <div className="circle">
                  <img src={specialty.icon} alt={specialty.name} />
                </div>{" "}
              </Link>
              <p style={{ textDecoration: "none" }}>{specialty.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Search;
