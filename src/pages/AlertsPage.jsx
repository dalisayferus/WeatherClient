import { useEffect, useState } from "react";
import axios from "axios";

const AlertPage = () => {
  const [alerts, setAlerts] = useState([]);

  const API_URL = "http://localhost:5005";

  const fetchAlerts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/alerts`); // Assuming you have an API endpoint for fetching alerts
      console.log(response);
      setAlerts(response.data);
    } catch (error) {
      console.error("Error fetching alerts:", error);
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
          <hr />
          <p>created at: {alert.createdAt}</p>
          <p>created by: {alert.createdBy[0]?.firstName}</p>
        </div>
      ))}
    </div>
  );
};

export default AlertPage;
