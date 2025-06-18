import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Analytics() {
  const { data: analyticsData, isLoading } = useQuery({
    queryKey: ['analytics'],
    queryFn: async () => {
      const response = await fetch('/api/analytics');
      if (!response.ok) throw new Error('Failed to fetch analytics data');
      return response.json();
    }
  });

  if (isLoading) return <div>Loading analytics...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="analytics-container"
    >
      <h1>Event Analytics</h1>

      <div className="charts-grid">
        {/* Event Categories Distribution */}
        <div className="chart-card">
          <h2>Event Categories</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={analyticsData?.categoryDistribution || []}
              cx={150}
              cy={150}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {analyticsData?.categoryDistribution?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Monthly Events Trend */}
        <div className="chart-card">
          <h2>Monthly Events Trend</h2>
          <LineChart
            width={500}
            height={300}
            data={analyticsData?.monthlyTrend || []}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="events" stroke="#8884d8" />
            <Line type="monotone" dataKey="attendees" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Attendance Statistics */}
        <div className="chart-card">
          <h2>Attendance Statistics</h2>
          <BarChart
            width={500}
            height={300}
            data={analyticsData?.attendanceStats || []}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="registered" fill="#8884d8" />
            <Bar dataKey="attended" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </motion.div>
  );
}

export default Analytics;