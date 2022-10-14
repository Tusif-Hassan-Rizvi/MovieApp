import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';



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
      <div className="inputbox">
        <input type="search" placeholder="Type movie name here ex: lucy" value={data} onChange={HandleChange} />
        <button onClick={handleClick}>Search</button>
      </div>


      {/* moviedatabox */}
      <div className='container data-box' >
        <div className='row'>
          {
            getdata.map((item,index) =>
              <div className='col-xl-2 col-lg-4 col-md-6 col-sm-12 main-data-box' key={index}>
                <img className='image' src={item.image} alt="movieImage"/>
                <div>{item.titleOriginal
                }</div>
                <div>{item.rating} IMDb</div>
                <div>
                  {item.countries.map((val,index) =>
                    <span key={index}>{val.name} </span>
                  )}
                </div>
                <div>
                  {item.release}
                </div>
                <div className='stream-link'>
                  {item.embedUrls.map((downlink, index) =>
                    <a href={downlink.url} className="links" target={'_blank'} key={index}>{downlink.server}</a>
                  )}
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}

export default App;
