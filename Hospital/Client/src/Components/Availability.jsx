import React from "react";
import { BsCircleFill } from "react-icons/bs";

const AvailabilityToggle = ({ available, onToggle }) => {
  return (
    <button onClick={onToggle} style={styles.button}>
      <BsCircleFill
        style={{ ...styles.icon, color: available ? "green" : "red" }}
      />
      <span style={{ marginLeft: "8px", fontWeight: "bold" }}>
        {available ? "Active" : "Inactive"}
      </span>
    </button>
  );
};

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 12px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    color: "#333",
  },
  icon: {
    fontSize: "16px",
  },
};

export default AvailabilityToggle;
