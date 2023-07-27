import { useEffect, useState } from "react";
import axios from "axios";

const AlertPage = () => {
  const [alerts, setAlerts] = useState([]);

  const API_URL = "http://localhost:5005";

  // Getting alerts from the database to display them on the screen
  const fetchAlerts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/alerts`); // Assuming you have an API endpoint for fetching alerts
      setAlerts(response.data);
    } catch (error) {
      console.error("Error fetching alerts:", error);
    }
  };

  // Updating status of the alerts
  const updateStatus = async (alertId, newStatus) => {
    try {
      const response = await axios.put(`${API_URL}/api/alerts/${alertId}`, {
        status: newStatus,
      });
      console.log("Updated alert:", response);
      fetchAlerts(); // Fetch updated alerts after successful update
    } catch (error) {
      console.error("Error updating alert status:", error);
    }
  };

  // deleting alerts

  const deleteAlert = async (alertId) => {
    try {
      await axios.delete(`${API_URL}/api/alerts/${alertId}`);
      console.log("Deleted alert:", alertId);
      fetchAlerts(); // Fetch updated alerts after successful deletion
    } catch (error) {
      console.error("Error deleting alert:", error);
    }
  };

  

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <div>
      <h1>Alert Page</h1>

      {alerts.map((alert) => (
        <div key={alert._id}>
          <h2>Danger Level: {alert.dangerLevel}</h2>
          <p>Status: {alert.status}</p>
          <p>Message: {alert.message}</p>
          <button onClick={() => updateStatus(alert._id, "in process")}>
            Processing...
          </button>
          <button onClick={() => updateStatus(alert._id, "completed")}>
            Completed
          </button>
          <button onClick={() => deleteAlert(alert._id)}>Delete</button>
          <p>Created at: {alert.createdAt}</p>
          <p>Created by: {alert.createdBy[0]?.firstName}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AlertPage;
