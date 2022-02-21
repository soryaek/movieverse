import React, {useState} from 'react';
import SpinningWheel from './SpinningWheel';
import { Header } from '../Header';
import { Footer } from '../footer';

import './SpinningWheel'

export const DailyPick = () =>  {

    const [topPick, setTopPick] = useState( ['Avengers', 'Spiderman', 'Ironman', 'Black Widow', 'Wonder Woman', 'Doctor Strange',
                                            'Captain America', "Black Panther"]);
    
    return (
      <div>
          <Header />
          <div className="App">
              <h5 className="spinning-heading">Are you ready to spin?</h5>
              <SpinningWheel items={topPick} />
          </div>
          <Footer />
      </div>
    );
  
  }



  