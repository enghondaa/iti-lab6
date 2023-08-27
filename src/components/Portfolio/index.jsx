import React from 'react'
import './index.css'
import Cards from './Cards'
function Portfolio() {
    const cardDetails = [
        {
        jobtitle: 'WEB DESIGN',
        bgColor:'bg-secondary',
    },
        {
        jobtitle: 'Mobile Design',
        bgColor:'bg-black',
    },
        {
        jobtitle: 'LOGO DESIGN',
        bgColor:'bg-secondary',
    },
        {
        jobtitle: 'WEB Application',
        bgColor:'bg-black',
    },
        {
        jobtitle: 'Mobile Application',
        bgColor:'bg-secondary',
    },
        {
        jobtitle: 'Pwa Development',
        bgColor:'bg-black',
    },
]
  return<>
        <section className='portfolio mt-5 py-5'>
            <div className="portfolio-container container">
                <h2 className='mb-5'>Portfolio</h2>
                <div className='h-100 d-flex align-items-center'>
                <div className="row gy-5">
                    {cardDetails.map((cardDetail,index)=>{return <div className="col-md-4" key={index}><Cards cardDetails={cardDetail} /></div>})}
                </div>
                </div>
               
            </div>
        </section>
  </>
}

export default Portfolio