import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer style={{backgroundColor:'#3F51B5'}}>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {
                resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                  return(
                    <li>
                      <a href={item.url}>
                        <i className={item.className} style={{color:'#FFFFFF'}}/>
                      </a>
                    </li>
                  )
                })
              }
              <li key={'email'}>
                <a href={"mailto:"+resumeData.email+"?subject=Work or suggestions"}>
                  <i className={"fa fa-envelope"} style={{color:'#FFFFFF'}}/>
                </a>
              </li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}
