import React from "react";
import MailItem from "./MailItem";

const MailList = ({ mails }) => {
  return (
    <div className="mail-list">
      <div className="mail-list-header">
        <div>Email</div>
        <div>Status</div>
        <div>Opened</div>
        <div>Clicked</div>
        <div>Replies</div>
        <div>Bounced</div>
      </div>
      {mails.map((mail) => (
        <MailItem key={mail?.subject} mail={mail} />
      ))}
    </div>
  );
};

export default MailList;
