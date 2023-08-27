import React from 'react'
import './index.css'
function Home() {
    return <>
        <section className='home vh-100 bg-dark bg-opacity-75'>
            <div className="home-overlay vh-100 bg-black bg-opacity-75">
                <div className="home-container container h-100 d-flex align-items-center justify-content-center justify-content-md-start">
                    <div className="home-details text-white text-center">
                        <h1 className='my-3'>Katie Reed</h1>
                        <h4 className=''>Web Developer & Designer</h4>
                        <button className='btn btn-success my-4'>Message Me</button>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Home