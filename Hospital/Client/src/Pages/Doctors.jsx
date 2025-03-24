import React, { useState, useEffect } from "react";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/get")
      .then((result) => setDoctors(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="doctors_page">
        <h2>Doctors List</h2>
        {doctors.length === 0 ? (
          <p>No Doctors are available</p>
        ) : (
          doctors.map((doctor) => (
            <div className="doctor_card" key={doctor._id}>
              <h3>{doctor.doctor}</h3>
              <p>
                {doctor.availability ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    🟢 Active
                  </span>
                ) : (
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    🔴 Inactive
                  </span>
                )}
              </p>
              {doctor.image ? (
                <img
                  src={`data:image/png;base64,${doctor.image}`}
                  alt={doctor.doctor}
                  width="100"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Doctors;
