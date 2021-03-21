import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item)=>{
                  return(
                    <div className="columns portfolio-item" style={{width:300}}>
                      <div className="item-wrap">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <img src={`${item.imgurl}`} className="item-img" style={styles.img} alt="" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <h1>Check Out Some of My Works As Contributor.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio_contributors && resumeData.portfolio_contributors.map((item)=>{
                  return(
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <img src={`${item.imgurl}`} className="item-img" style={styles.img} alt=""/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const styles = {
  img: {
    objectFit:'contain',
    height:250,
    width:300
  }
}
