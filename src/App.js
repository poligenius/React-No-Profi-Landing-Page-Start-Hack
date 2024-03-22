import { library } from '@fortawesome/fontawesome-svg-core';
import { faFire, faDollarSign, faSkullCrossbones, faTreeCity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Land from './components/Land'
import Footer from './components/Footer'
import Damage from './components/Damage'


// Add the icons to the library
library.add(faFire, faDollarSign, faSkullCrossbones, faTreeCity)

const cardsData = [
    { icon: <FontAwesomeIcon icon="fire" />, value: '80.000', metric: 'Fires per year' },
    { icon: <FontAwesomeIcon icon="tree-city" />, value: '367%', metric: 'Burnt aerea increase' },
    { icon: <FontAwesomeIcon icon="skull-crossbones" />, value: '30.000', metric: 'Deaths per year' },
    { icon: <FontAwesomeIcon icon="dollar-sign" />, value: '5 Billions', metric: 'annual damage' },
]


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Damage cardsData={cardsData} />
      <Land />
      <Footer />
    </div>
  );
}

export default App;
