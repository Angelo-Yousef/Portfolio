import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../global.css'; 
import Sidenavbar from '../Components/Sidenavbar';

function Projects() {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8008/api/portfolios');
        const portfolioItems = response.data.data.map(item => item.attributes);
        setPortfolioData(portfolioItems);
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
        {portfolioData.map((item, index) => (
          <div key={index}>
            <h1 className="huge-title">{item.projectname}</h1> 
            <div className="text-box">
              <div className="text-wrapper">
                <div className="segment">
                  <div className="textbox">
                    <p>{item.projectsdescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
