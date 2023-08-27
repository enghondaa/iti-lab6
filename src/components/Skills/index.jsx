import React from "react";
import "./index.css";
import ProgressBarr from "./ProgressBarr";

function Skills() {
    let ProgressBarDetails = [
        {
        proWidth: '95%',
        proTitles:'HTML'
    },
        {
        proWidth: '95%',
        proTitles:'CSS'
    },
        {
        proWidth: '85%',
        proTitles:'JavaScript'
    },
        {
        proWidth: '80%',
        proTitles:'React'
    },
        {
        proWidth: '86%',
        proTitles:'PhotoShop'
    },
        {
        proWidth: '76%',
        proTitles:'WordPress'
    },
        {
        proWidth: '75%',
        proTitles:'Node.js'
    },
    
    
    ];

  return (
    <>
      <section className="skills bg-light">
        <div className="skills-container container text-center h-100">
          <h2 className="h1 py-5">Skills</h2>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt
            quae omnis molestias quas ratione, a quaerat eveniet? Illum quod,
            iusto officia dolor a at totam voluptatum delectus laborum autem
            amet nemo fugit, iste natus voluptatibus, reiciendis fuga hic magni.
            Officia velit eaque eius ipsam, repellendus sint iure sequi
            voluptas.
          </p>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h4 className="my-4 position-relative">My Focus</h4>
              <ul className="list-unstyled">
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li>Web Design</li>
                <li>Mobile App Design</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="mt-5 mb-3">
              <ProgressBarr ProgressBarDetails= {ProgressBarDetails}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
