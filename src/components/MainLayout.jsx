import React, { useState } from 'react'
import Nav from './Nav';
import SendEmail from './SendEmail';
import Dashboard from './Dashboard';

const tabs = ["send", "dashboard"];

const MainLayout = () => {
    const [tab, setTab] = useState("send");
  return (
    <div>
        <Nav tabs={tabs} setTab={setTab} current={tab} />
        {tab === "send" ? <SendEmail /> : null}
        {tab === "dashboard" ? <Dashboard /> : null}
    </div>
  )
}

export default MainLayout