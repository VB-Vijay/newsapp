import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date,source} = this.props;
    return (
      <div className="container my-3">
        <div className="card" >
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" >{source}</span>
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}            
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
