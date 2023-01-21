import React, {useState} from 'react';
import SpinningWheel from './SpinningWheel';
import { Header } from '../Header';
import { Footer } from '../footer';

import './SpinningWheel'
import { useEffect } from 'react';

export const DailyPick = () =>  {

    // const [topPick, setTopPick] = useState( ['Avengers', 'Spiderman', 'Ironman', 'Black Widow', 'Wonder Woman', 'Doctor Strange',
    //                                         'Captain America', "Black Panther"]);

    const [topPick, setTopPick] = useState([]);
    const [topPickId, setTopPickId] = useState([]);

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=a64879763b86ab20c959a57ad7c5d005&adult=false`)
      .then(res => res.json())
      .then((data) => {
          if(!data.errors) {
            console.log("**data.results", data.results);
            for (let i = 0; i < 10; i++) {
              if (!data.results[i].name) {
                setTopPick(topPick => [...topPick, data.results[i].title]);
              } else {
                setTopPick(topPick => [...topPick, data.results[i].name]);
              }
              setTopPickId(topPickId => [...topPickId, data.results[i].id]);
            }
          } else {
            setTopPick([]); //if there is an error, set result to an empty array
          }
      })
    }, []); 
                    
    console.log("***top pickId => ", topPickId);
    return (
      <div>
          <Header />
          <div className="App">
              <h5 className="spinning-heading">Are you ready to spin?</h5>
              <SpinningWheel items={topPick} itemIds={topPickId}/>
          </div>
          <Footer />
      </div>
    );
  
  }



  