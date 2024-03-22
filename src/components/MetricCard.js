// MetricCard.js
import React from 'react';
import './MetricCard.css';

const MetricCard = ({ icon, value, metric }) => {
    return (
        <div className="metric-card">
            <div className="metric-card-icon">{icon}</div>
            <div className="metric-card-value">{value}</div>
            <div className="metric-card-metric">{metric}</div>
        </div>
    );
};

export default MetricCard;