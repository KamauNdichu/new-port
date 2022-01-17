import "./news.css";
import { useEffect, useState } from "react";
const axios = require("axios");

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;

export default function News(props) {
  const [news, setNews] = useState([]);

  const url = `https://newsapi.org/v2/everything?q=Apple&from=${date}&sortBy=popularity&apiKey=9b50e9731a1d424980261bf32151365c`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const articles = res.data.articles;
        setNews(articles);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="newsContainer">
      <h2 className="headline">Api Discontinued....</h2>
      {news.map((el, index) => {
        return (
          <section key={index} className="newsComponent">
            <a href={el.url}>
              <img src={el.urlToImage} className="newsImg" alt="img" />
            </a>
            <h2 className="title">{el.title}</h2>
            <h3 className="author">
              <strong>
                <em>{el.author}</em>
              </strong>
            </h3>
            <p className="description">
              {el.description}
              <a href={el.url}>
                <em>Read More</em>
              </a>
            </p>
            <p className="content">
              <strong>{el.content}</strong>
            </p>
            <p className="date">
              <em>Date published: {el.publishedAt}</em>
            </p>
          </section>
        );
      })}
    </div>
  );
}
