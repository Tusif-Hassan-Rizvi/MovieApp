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

  const HandleChange = (event) => {
    setData(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    setInputdata(data)
    console.log(inputdata)
  }


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API,
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
      }
    };

    fetch(`https://movies-app1.p.rapidapi.com/api/movies?query=${inputdata}`, options)
      .then(response => response.json())
      .then(response => {
        setGetdata(response.results)
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
      <Maincontainer getdata={getdata}></Maincontainer>
    </>
  );
}

export default App;
