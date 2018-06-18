// Write your Javascript excercises here:



const myFunction = () => {
  document.querySelector(".readMore").classList.toggle("hideDIV");
}


// What you want to print on your page goes here:
const key = "f71ab5246b4f4be59eed747e9bbd57b3"
const url = `https://newsapi.org/v2/everything?sources=the-washington-post,wired,the-new-york-times,the-wall-street-journal,the-guardian-uk,techradar,metro,hacker-news,google-news,financial-times,cnn,svenska-dagbladet,techcrunch,the-economist&q=(gdpr)OR(data)AND(protection)&apiKey=${key}`

const gdprUrl = `https://newsapi.org/v2/everything?sources=the-washington-post,wired,the-new-york-times,the-wall-street-journal,the-guardian-uk,techradar,metro,hacker-news,financial-times,cnn,svenska-dagbladet,techcrunch,the-economist&q=gdpr&apiKey=${key}`
const dataprotectionUrl = `https://newsapi.org/v2/everything?sources=the-washington-post,wired,the-new-york-times,the-wall-street-journal,the-guardian-uk,techradar,metro,hacker-news,financial-times,cnn,svenska-dagbladet,techcrunch,the-economist&q=(data)AND(protection)&apiKey=${key}`
const everythingUrl = `https://newsapi.org/v2/everything?sources=the-washington-post,wired,the-new-york-times,the-wall-street-journal,the-guardian-uk,techradar,metro,hacker-news,financial-times,cnn,svenska-dagbladet,techcrunch,the-economist&q=(gdpr)OR(data)AND(protection)&apiKey=${key}`

const articlesDiv = document.querySelector(".articles")
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")

const recievedNews = (newsdata) => {
    articlesDiv.innerHTML = null
    newsdata.articles.forEach((article) => {

let image = article.urlToImage

if (article.urlToImage === null) {
  image = "https://cdn.pixabay.com/photo/2017/01/04/12/01/space-1951858_1280.png"
}

			//Here we create and add html elements to our html file

      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML =
      `<img src="${image}"/>
      <a target = '_blank' href="${article.url}"><h2>${article.title}</h2></a>
      <a target = '_blank' href="${article.url}"><h4>${article.source.name}</h4></a>
      <a target = '_blank' href="${article.url}"><h3>${article.description}</h3>`

      articlesDiv.appendChild(div)


    })
}

const fetchGdpr = () => {
  fetch(gdprUrl)
    .then(response => response.json())
    .then(recievedNews)
}

const fetchDataprotection = () => {
  fetch(dataprotectionUrl)
    .then(response => response.json())
    .then(recievedNews)
}

const fetcheverythingUrl = () => {
  fetch(everythingUrl)
    .then(response => response.json())
    .then(recievedNews)
}


button1.onclick = fetchGdpr
button2.onclick = fetchDataprotection
button3.onclick = fetcheverythingUrl

fetcheverythingUrl()

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
