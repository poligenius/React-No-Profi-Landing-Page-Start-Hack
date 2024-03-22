import React from 'react';
import FireMap from './FireMap';
import Incidents from './Incidents';
import './Land.css';
import LostForestHist from './LostForestHist';

const Land = () => {
    return (
        <div className='land_container' id='land'>
            <div className='description'>From soil erosion and habitat destruction to invasive plant species, floods, desertification, air pollution, and water scarcity, the consequences of wildfires in the Brazil’s rainforest are profound and far-reaching.</div>
            <div className='dashboard_container'>
                <FireMap />
            </div>
            <div className='dashboard_container_incidents'>
                <Incidents />
            </div>
            <div className='dashboard_container_hist'>
                <LostForestHist />
            </div>
        </div>
    )
}

export default Land;