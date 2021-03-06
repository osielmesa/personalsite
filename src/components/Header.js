import React, { Component } from 'react';
import pdf from '../CV - Osiel-Lima-Diaz.pdf'
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="# " title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav" style={{backgroundColor:'#3F51B5'}}>
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
              <li><a href={pdf}>Curriculum Vitae</a></li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <p align="left">
                <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>
                  I am a {resumeData.role}.{resumeData.roleDescription}
                  <code style={{display:'block',whiteSpace:'pre-wrap'}}>{resumeData.code}</code>
                </h3>

              </p>
              <hr/>
              <ul className="social">
                {
                  resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                        <li key={item.name}>
                          <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}/></a>
                        </li>
                      )
                    }
                  )
                }
                <li key={'cv'}>
                  <a href={pdf}>
                    <i className={"fa fa-file-text"}/>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}
