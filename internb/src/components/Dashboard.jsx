import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useStore } from '../store/store';

function Dashboard() {
  const user = useStore(state => state.user);

  // Example query for dashboard data
  const { data: dashboardData, isLoading } = useQuery({
    queryKey: ['dashboard'],
    queryFn: async () => {
      const response = await fetch('/api/dashboard');
      if (!response.ok) throw new Error('Failed to fetch dashboard data');
      return response.json();
    }
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="dashboard-container"
    >
      <h1>Welcome, {user?.name || 'User'}!</h1>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Events</h3>
          <p>{dashboardData?.totalEvents || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Events</h3>
          <p>{dashboardData?.upcomingEvents || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Total Attendees</h3>
          <p>{dashboardData?.totalAttendees || 0}</p>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          {dashboardData?.recentActivity?.map((activity, index) => (
            <li key={index}>{activity.description}</li>
          )) || <li>No recent activity</li>}
        </ul>
      </div>
    </motion.div>
  );
}

export default Dashboard;