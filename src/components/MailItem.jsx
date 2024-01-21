import React, { useState } from "react";

const MailItem = ({ mail }) => {
  const [showMessage, setShowMessage] = useState(false);
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };
  return (
    <div className="mail-item" onClick={toggleMessage}>
      <div className="mail-item-inner">
        <div className="mail-item-left">
          <div>
            <p className="mail-subject">{mail.subject}</p>
            <p>Sender: {mail.sender}</p>
            <p>Receiver: {mail.receiver}</p>
          </div>

          <p>{mail.date}</p>
        </div>
        <div className="tag-true">sent</div>
        <div className={`${mail.count > 0 ? "tag-true" : "tag-false"}`}>
          {mail.count > 0 ? "True" : "False"}
        </div>
        <div>{mail.count} times</div>
        <div>{mail.replies}</div>
        <div className="tag-false">False</div>
      </div>
      <div className="message">
        {showMessage ? "Message: " + mail.message : null}
      </div>
    </div>
  );
};

export default MailItem;
