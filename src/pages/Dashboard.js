// src/pages/Dashboard.js
import React from 'react';
import Schedule from '../components/Schedule';
import Performance from '../components/Performance';
import Communication from '../components/Communication';

const Dashboard = () => {
  return (
    <div>
      <h2>Panel de Control</h2>
      <Schedule />
      <Performance />
      <Communication />
    </div>
  );
};

export default Dashboard;
