import React from 'react';
import FireMap from './FireMap';
import Incidents from './Incidents';
import './Land.css';
import LostForestHist from './LostForestHist';

const Land = () => {
    return (
        <div className='land_container' id='land'>
            <div className='description'>From soil erosion and habitat destruction to invasive plant species, floods, desertification, air pollution, and water scarcity, the consequences of wildfires in the Brazil’s rainforest are profound and far-reaching.</div>
            <div className='secondary-description-container'>
                <div className='secondary-description'>The depicted chart represents the staggering tree cover loss Brazil has sustained due to wildfires and other factors spanning two decades, from 2001 to 2022. The chart dramatically demonstrates the stark reality of the extent of loss of this abundant, life-sustaining resource - a detrimental loss of 10.1 million hectares due to rampant fires and a further significant erosion of 56.1 million hectares due to additional causes, cumulatively representing a significant portion of Brazil's total forest area.</div>
            </div>
            <div className='dashboard_container'>
                <FireMap />
            </div>
            <div className='secondary-description-container'>
                <div className='secondary-description'>Our chart visually underscores a concerning trend we've seen in Brazil's forests over the years: the severe amplification of wildfires during the summer months. This seasonal surge in fire incidents significantly escalates the devastation to our precious forests. Upon studying the chart, the stark increase in tree cover loss during summer becomes unmistakably clear, reflecting the heightened vulnerability of these vital ecosystems during these months. This pattern indicates not only the immediate need for extensive forest protection measures but also for robust strategic planning to brace for and mitigate the impact of these lethal summer wildfires</div>
            </div>
            <div className='dashboard_container_incidents'>
                <Incidents />
            </div>
            <div className='secondary-description-container'>
                <div className='secondary-description'>This histogram reveals the concerning rates of tree cover loss Brazil has faced from 2001 to 2022, measured in millions of hectares (Mha). A staggering total of 10.1 Mha of forest loss was due to fires, while other drivers accounted for 56.1 Mha. A particularly devastating year was 2016 when the country saw 2.38 Mha of trees succumb to fires, constituting a full 44% of the year's total deforestation. This visual representation underscores the urgency of implementing effective conservation strategies to safeguard Brazil's precious ecosystems against such extensive losses.</div>
            </div>
            <div className='dashboard_container_hist'>
                <LostForestHist />
            </div>
        </div>
    )
}

export default Land;