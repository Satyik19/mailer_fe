import React, { useState } from "react";

const SendEmail = () => {
  const [receiver, setReceiver] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    console.log({ receiver, subject, message });
    e.preventDefault();
    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ receiver, subject, message }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="mail-form-container">
      <h3 className="heading">Send Email</h3>
      <form className="mail-form" onSubmit={handleFormSubmit}>
        <input
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          type="email"
          placeholder="Email eg: example@example.com"
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="Subject eg: Applying for a job"
        />
        <textarea
          placeholder="Message, eg: How are you?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendEmail;
