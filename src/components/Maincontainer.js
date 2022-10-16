import React from 'react'

export default function Maincontainer(props) {
  return (
    <div className='container data-box' >
    <div className='row'>
      {props.getdata.length===0?<h1 className='nodatafound'>Movie not found!</h1>
        :props.getdata.map((item,index) =>
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
  )
}
