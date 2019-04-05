import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item)=>{
                return(
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                      </p>
                      <p>
                        {item.Achievements}<br/>
                        <a href={item.link}>{item.link}</a>
                      </p>

                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return(
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em>
                      </p>
                      <p className="info">
                        {item.country}
                        <span>&bull;</span><em className="date">{item.city}</em>
                      </p>
                      <p>
                        {item.Achievements}
                        <br/>
                        <a href={item.link}>{item.link}</a>
                      </p>

                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>


        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Certificates</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.certificates && resumeData.certificates.map((item)=>{
                return(
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.certificateName}</h3>
                      <p className="info">
                        {item.entityName}
                        <span>&bull;</span> <em className="date">{item.issuedDate}</em>
                      </p>
                      <p>
                        {item.credentialId}<br/>
                        <a href={item.credentialURL}>{item.credentialURL}</a>
                      </p>

                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="row skill work">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>
              {resumeData.skillsDescription}
            </p>

            <div className="bars">

              <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className="bar-expand" style={{width:item.percent}}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

              </ul>

            </div>

          </div>

        </div>

        <div className="row ">

          <div className="three columns header-col">
            <h1><span>Languages</span></h1>
          </div>

          <div className="nine columns main-col">

            <div className="bars">

              <ul className="skills">
                {
                  resumeData.languages && resumeData.languages.map((item) => {
                    return(
                      <li>
                      <span className="bar-expand" style={{width:item.percent}}>
                      </span><em>{item.languageName}</em>
                      </li>
                    )
                  })
                }

              </ul>

            </div>

          </div>

        </div>

      </section>
    );
  }
}
