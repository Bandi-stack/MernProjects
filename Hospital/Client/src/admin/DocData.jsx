import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import AvailabilityToggle from "../Components/Availability";

const DocData = () => {
  const [docs, setDocs] = useState([]);
  const [editDoc, setEditDoc] = useState(null);
  const [updatedDoctor, setUpdatedDoctor] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");
  const [updatedAddress, setUpdatedAddress] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3005/get")
      .then((result) => setDocs(result.data))
      .catch((err) => console.log(err));
  }, []);

  // Toggle Availability (Active/Inactive)
  const handleToggleAvailability = (id) => {
    axios
      .put(`http://localhost:3005/toggle-availability/${id}`)
      .then((response) => {
        setDocs((prevDocs) =>
          prevDocs.map((doc) =>
            doc._id === id ? { ...doc, availability: !doc.availability } : doc
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3005/delete/" + id)
      .then(() => {
        setDocs((prevDocs) => prevDocs.filter((doc) => doc._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (doc) => {
    setEditDoc(doc._id);
    setUpdatedDoctor(doc.doctor);
    setUpdatedPhone(doc.phone);
    setUpdatedAddress(doc.adress);
  };

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:3005/update/${id}`, {
        doctor: updatedDoctor,
        phone: updatedPhone,
        adress: updatedAddress,
      })
      .then(() => {
        setDocs((prevDocs) =>
          prevDocs.map((doc) =>
            doc._id === id
              ? {
                  ...doc,
                  doctor: updatedDoctor,
                  phone: updatedPhone,
                  adress: updatedAddress,
                }
              : doc
          )
        );
        setEditDoc(null);
        // Clear input fields after save
        setUpdatedDoctor("");
        setUpdatedPhone("");
        setUpdatedAddress("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="admin">
      <h2>Doctors Data</h2>

      {docs.length === 0 ? (
        <h3>No Records Found</h3>
      ) : (
        docs.map((doct) => (
          <div className="doctor_card" key={doct._id}>
            {editDoc === doct._id ? (
              <div>
                <input
                  type="text"
                  value={updatedDoctor}
                  onChange={(e) => setUpdatedDoctor(e.target.value)}
                  placeholder="Doctor Name"
                />
                <input
                  type="number"
                  value={updatedPhone}
                  onChange={(e) => setUpdatedPhone(e.target.value)}
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  value={updatedAddress}
                  onChange={(e) => setUpdatedAddress(e.target.value)}
                  placeholder="Address"
                />
                <button onClick={() => handleUpdate(doct._id)}>Save</button>
                <button onClick={() => setEditDoc(null)}>Cancel</button>
              </div>
            ) : (
              <div className="doctor_info">
                {doct.image ? (
                  <img
                    src={`data:image/png;base64,${doct.image}`}
                    alt={doct.doctor}
                    width="100"
                  />
                ) : (
                  <p>No Image Available</p>
                )}
                <AvailabilityToggle
                  available={doct.availability}
                  onToggle={() => handleToggleAvailability(doct._id)}
                />
                <h3>{doct.doctor}</h3>
                <p>📞 {doct.phone}</p>
                <p>📍 {doct.adress}</p>
              </div>
            )}

            <div className="actions">
              <button className="edit_button" onClick={() => handleEdit(doct)}>
                Edit
              </button>
              <button
                className="edit_button"
                onClick={() => handleDelete(doct._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DocData;
