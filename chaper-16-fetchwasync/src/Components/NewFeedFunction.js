import {useState, useEffect} from 'react';

const NewFeedFunction = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fc82602deddf477a902a8a0e54426345').then(response => response.json()).then(data => {
      setNews(data.articles)
    }).catch(error => console.log(error))
  }, [])

  const todayNews = news.map((article) => {
    return (
      <p>{article.title}</p>
    )
  })

  return (
    <>
      <h1>{todayNews}</h1>
    </>
  )
}

export default NewFeedFunction;