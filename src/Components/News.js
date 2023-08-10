import React, { Component } from "react";
import Newsitem from "./Newsitem";
import LoadingSpinner from "./LoadingSpinner";
import PropTypes from 'prop-types'



export default class News extends Component {

  static defaultProps = {
    country: "in",
    pagesize:8,
    category:"sports"
  };

   PropTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }
   capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  unavailable =
    "https://previews.123rf.com/images/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg";
  constructor(props) {
    super(props);
    this.state = {
      // Article: this.Article.articles
      articles: [],
      loading: false,
      page: 1,
      totalResults:38
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsPaper`
  }
 

  

  async componentDidMount() {
    console.log(this.articles);
    var url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1d3dbfdc5612485f8331be71ea57f7fe&pagesize=${this.props.pagesize}&page=${this.props.page}`
      
      this.setState({loading:true})
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);
    this.setState({ articles: response.articles, totalResults: response.totalResults,loading:false});
    // this.setState({loading:false})
  }
  
  previous = async () => {
    var url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1d3dbfdc5612485f8331be71ea57f7fe&pagesize=${this.props.pagesize}&page=${this.state.page-1}`;
      this.setState({loading:true})
    let data = await fetch(url);
    let response = await data.json();
    // this.setState({loading:false})
    this.setState({
      page: this.state.page - 1,
      articles: response.articles,
      loading:false
    });
  };
  Next = async () => {

    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize))){   

      var url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1d3dbfdc5612485f8331be71ea57f7fe&pagesize=${this.props.pagesize}&page=${this.state.page+1}`;
      this.setState({loading:true})
    let data = await fetch(url);
    let response = await data.json();
    // this.setState({loading:false})
    this.setState({
      page: this.state.page + 1,
      articles: response.articles,   
      loading:false
  });

 
}
  };

  render() {
    return (
      
      <div className="container m-auto">
        <h1 className="my-5 text-center">NewsPaper-Top {this.capitalizeFirstLetter(this.props.category)} HeadLines</h1>
        {this.state.loading&&<LoadingSpinner />}
        <div className="row my-5">
          {!this.state.loading && this.state.articles.map((value) => {
            return (
              <div className="col-md-4" key={value.url}>
                <Newsitem
                  source={value.source.name}
                  title={value.title?value.title.slice(0, 45):""}
                  description={value.description?value.description.slice(0, 88):""}
                  author={value.author?value.author:"unknown"}
                  date={value.publishedAt}
                  imgurl={
                    value.urlToImage ? value.urlToImage : this.unavailable
                  }
                  newsurl={value.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button
            type="button" disabled={this.state.page<=1} style={{cursor:"pointer"}}
            onClick={this.previous}
            className="btn btn-outline-dark"
          >
            &larr; Previous
          </button>
          <button  type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} style={{cursor:"pointer"}} onClick={this.Next}
           className="btn btn-outline-dark" id="btn">
            Next <strong>&rarr;</strong> 
          </button>
        </div>
      </div>
    );
  }
}
