import React from 'react';
import MetricCard from './MetricCard';
import './Damage.css';

const Damage = ({ cardsData }) => {
    return (
        <div className="damage">
            {cardsData.map((card, index) => (
                <MetricCard
                    key={index}
                    icon={card.icon}
                    value={card.value}
                    metric={card.metric}
                />
            ))}
        </div>
    );
};

export default Damage;