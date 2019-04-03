import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions:
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="three columns">

                <img className="profile-pic"  src={resumeData.contactImageURL} alt="" />

              </div>
              <div className="widget">
                <a href={"mailto:"+resumeData.email+"?subject=Work or suggestions"}>
                  <h4>Email: {resumeData.email}</h4>
                </a>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
