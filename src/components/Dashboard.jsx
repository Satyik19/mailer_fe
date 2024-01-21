import React, { useEffect, useState } from "react";
import MailList from "./MailList";

const Dashboard = () => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    fetch("/api/all")
      .then((res) => res.json())
      .then((data) => setMails(data));
  }, []);

  return (
    <div className="dashboard">
      <h3 className="heading">Track All your Emails:</h3>
      <MailList mails={mails} />
    </div>
  );
};

export default Dashboard;
