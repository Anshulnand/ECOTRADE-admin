import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { FaBullhorn } from 'react-icons/fa' // 📢 Broadcast icon

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2 className="sidebar-title">Dashboard</h2>

      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>

        <NavLink to='/list' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>

        <NavLink to='/orders' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>

        {/* 📢 New Broadcast Option */}
        <NavLink to='/broadcast' className="sidebar-option">
          <FaBullhorn size={22} style={{ color: "#28a745" }} />
          <p>Broadcast</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
