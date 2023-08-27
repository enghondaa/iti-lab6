import React from 'react'
import './index.css'
const Cards = ({cardDetails}) => {
 let  {jobtitle , bgColor} = cardDetails;
 
  return <>
  <div className="card rounded-0 ">
  <div className={"card-body d-flex justify-content-center align-items-center h-100 text-center bg-opacity-75 border-0 "+bgColor}>
    <h5 className="card-title text-white border-bottom py-3">{jobtitle}</h5>
  </div>
</div>
  </>
}

export default Cards