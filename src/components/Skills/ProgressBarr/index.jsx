import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './index.css'


function ProgressBarr({ ProgressBarDetails }) {


  return (
    <>
      {ProgressBarDetails.map((ProgressBarDetail, index) => {
        return (

          <div className="d-flex mb-3 align-items-center" key={index}>
            <div className="w-25 bg-warning">
              <label className="text-black">{ProgressBarDetail.proTitles}</label>
            </div>
            <div className="flex-grow-1 bg-info h-100">
              {/* <ProgressBar variant="secondary" now={ProgressBarDetail.proWidth} /> */}
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{width:ProgressBarDetail.proWidth}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{ProgressBarDetail.proWidth}</div>
              </div>
            </div>
          </div>

        )


      })}


    </>
  );
}

export default ProgressBarr;
