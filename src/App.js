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
  }


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a1ce5217f4mshf903431d8cda75ep175079jsn1efbd9f5f6f9',
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
      <div>
        {
          getdata.map((item) =>
            <>
            <div className='container my-5'  >
              <img src={item.image}/>
              <div>{item.titleOriginal
              }</div>
              <div>{item.rating} IMDb</div>
              <div>
                {item.countries.map((val)=>
                <span>{val.name}</span>
                )}
              </div>
              <div>
                {item.release}
              </div>
              <div>
                {item.embedUrls.map((downlink)=>
                <a href={downlink.url} className="links" target={'_blank'}>{downlink.server}</a>
                )}
                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  );
}

export default App;
