
import React from 'react';
import Parent from './assets/components/parent';
import Header from './assets/components/header';
import SelectOption from './assets/components/slectOption';
import destinations from './assets/components/Array'
import Destinations from './assets/components/destinations';

function App() {
  return (
 <Parent>
  <Header image={destinations[0].image}/>
     <SelectOption/>
      <Destinations arr={destinations}/>
 </Parent>
   
  );
}

export default App;