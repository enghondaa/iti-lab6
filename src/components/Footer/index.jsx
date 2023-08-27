import React from 'react'

function Footer() {
  return <>
    <footer className='mt-3 py-5 bg-light'>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h3>Get in touch</h3>
                    <p><i className="fa-solid fa-envelope"></i> Eng.mohand2389@gmail.com</p>
                    <p><i className="fa-solid fa-user"></i> 34342342342</p>
                </div>
                <div className="col-md-4 text-md-center">
                   <button className='btn btn-success'>Contact Me</button>
                </div>
                <div className='col-md-4'>
                    <ul className='list-unstyled d-flex gap-3 justify-content-end'>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-linkedin"></i></li>
                    </ul>
                    <p className='text-end'>CopyRight@2019</p>
                </div>
            </div>
        </div>
    </footer>
  </>
}

export default Footer