import React, { Component } from 'react'

class NewFeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=fc82602deddf477a902a8a0e54426345`).then(response => response.json()).then(data => {
      this.setState({news: data.articles})
    }).catch(error => console.log(error))
  }

  render() {
    const todayNews = this.state.news.map((article, index) => {
      return(
        <p key={index}>{article.title}</p>
      )
    })
    return (
      <div>
        {todayNews}
      </div>
    )
  }
}

export default NewFeed