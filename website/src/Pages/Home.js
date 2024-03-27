import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../global.css'; 
import Sidenavbar from '../Components/Sidenavbar'

function Home() {
  const [portfolioData, setPortfolioData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8008/api/portfolios');
        const firstData = response.data.data[0].attributes;
        console.log(firstData);
        setPortfolioData(firstData);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Sidenavbar /> 
      <div className="wrapper">
        <div>
          <h1 className="huge-title">Angelo Yousef</h1> 
          <div className="text-box">
            <div className="text-wrapper">
              <div className="segment">
                <div className="textbox">
                  <p>{portfolioData.aboutme}</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div>
          <h1 className="huge-title">Utbildning</h1> 
          <div className="text-box">
            <div className="text-wrapper">
              <div className="segment">
                <div className="textbox">
                  <p>Gymnasium Utbildning | 2020 – 2023 teknikprogrammet på Stockholm Science & Innovation school.</p>
                  <p>Nuvarande Utbildning | 2023- Webbutvecklare.NET på Nackademin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wrapper">
        <div>
          <h1 className="huge-title">Tidigare Erfarenheter</h1> 
          <div className="text-box">
            <div className="text-wrapper">
              <div className="segment">
                <div className="textbox">
                  <p>Fotbollsdomare 2018 – (nuvarande) Är licensierad domare hos StFF, dömer tävlingsmatcher som är anordnade av StFF och även privata turneringar, 
                    samt träningsmatcher, anordnade av olika föreningar runt om i landet.</p>
                    <p>Lagerarbetare (Nuvarande) Jobbar som konsult i Zalandos lager i brunna, där jag har i uppgift att packa och skicka varor.</p>
                    <p>Restaurang 2020-2020 Jobbade som servitör & fick även laga vissa enkla maträtter. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    
  );
}

export default Home;