import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Inputbar from './components/Inputbar';
import Maincontainer from './components/Maincontainer';



function App() {
  const [data, setData] = useState('')
  const [inputdata, setInputdata] = useState('')
  const [getdata, setGetdata] = useState([])
  const [loading, setLoading] = useState(false);

  const HandleChange = (event) => {
    setData(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    setInputdata(data);
  }


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API,
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
      }
    };
    setLoading(true)
    fetch(`https://movies-app1.p.rapidapi.com/api/movies?query=${inputdata}`, options)
      .then(response => response.json())
      .then(response => {
        setGetdata(response.results)
        setLoading(false)
      })
      .catch(err => console.error(err));
  }, [inputdata])

  return (
    <>
      {/* header */}
      <Header></Header>

      {/* inputbox */}
      <Inputbar data={data} handleClick={handleClick} HandleChange={HandleChange}></Inputbar>

      {/* moviedatabox */}
      <Maincontainer getdata={getdata} loading={loading}></Maincontainer>
    </>
  );
}

export default App;
