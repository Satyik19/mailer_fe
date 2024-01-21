import React from 'react'

const Nav = ({tabs, setTab, current}) => {
  return (
    <div className='nav'>{tabs.map(t => <span key={t} className={`nav-tab ${current === t ? "active-tab" : ""}`} onClick={() => setTab(t)}>{t}</span>)}</div>
  )
}

export default Nav