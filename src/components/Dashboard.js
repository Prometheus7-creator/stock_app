import { useState } from 'react';
import React, { useContext, useEffect } from "react";
import { Account, AccountContext } from "./Account";
import { useNavigate } from 'react-router-dom';
import BarChart from './BarChart';
import NavBar from './Navbar';
import LineChart from './LineChart';
// import axios from 'axios';

const Dashboard = () => {

  const [userData, setUserData] = useState({
    labels: [],
    datasets: [{
        label: "3 Month Estimate",
        data: []
    }]
});
 
  const [status, setStatus] = useState(false);

  const { getSession, logout} = useContext(AccountContext);
  const navigate = useNavigate();

  const redirectTo = () =>{
    navigate('/login');
  }

  const loadData = () =>{
    fetch(`https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&horizon=3month&apikey=JAARZWOLNUOZ6AI6`)
    .then(res => res.text())
    .then(res => {
      let data = res.split('\n');
      const obj = {};
      for (let i = 1; i < 30; i++){
        let name = data[i].split(',')[1];
        let estimate = data[i].split(',')[4];
        obj[name] = estimate; 
      }

      let keys = Object.keys(obj);
      keys = keys.map(key => (obj[key] !== "" || obj[key] !== undefined)? key: null);
      setUserData({
        labels: keys,
        datasets: [{
            label: "3 Month Price Estimate",
            data: keys.map(key=> (obj[key] !== "")? obj[key]: "0"),
            backgroundColor: ["rgba(75, 192, 192, 1)",
                "#f3ba2f"
            ]
        }]
      })
    })
    .catch(err => console.log(err))
  }
  
  useEffect(()=>{
      getSession()
      .then(session => {
          setStatus(true);
      })
      loadData();
  },[getSession]);

  return (
    <>
    {status?<div style={{display: 'flex', justifyContent: 'center', alignItems: "center", height: '100%'}}>
    <NavBar status={status} logout={logout}/>
    <div style={{width: '80%', height: '80%', marginTop: '6rem'}}>
    <BarChart chartData={userData}/>
    <LineChart chartData={userData}/>
    </div></div>: redirectTo()}
    </>
  );
};

export default Dashboard;