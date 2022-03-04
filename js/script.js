/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "I would trade all of my technology for an afternoon with Socrates.",
    source: "Steve Jobs",
    citation: "Newsweek",
    year: 2001
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs"
  },
  {
    quote: "You’ve got to start with the customer experience and work back toward the technology – not the other way around.",
    source: "Steve Jobs",
    citation: "WWDC"
  },
  {
    quote: "You can’t just ask customers what they want and then try to give that to them. By the time you get it built, they’ll want something new",
    source: "Steve Jobs",
    citation: "Inc Magazine",
    year: 1989
  }, 
  {
    quote: "Being the richest man in the cemetery doesn’t matter to me … Going to bed at night saying we’ve done something wonderful… that’s what matters to me.",
    source: "Steve Jobs"
  }
];

console.log(quotes.lenght) 


/***
 * `getRandomQuote` function
***/

// Code to rendomly select quote from quotes array and return it
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length - 1)) + 1; 
  console.log(randomNumber)
  return quotes[randomNumber]
}


/***
   * `printQuote` function

  * call the getRandomQuote function and then print the qoute to the page using template provided in the project instructions
  3 TASKS:
    1. call the getRandomQuote function
    2. use the returned quote object to build a string of HTML and quote properties
    3. use that string to display a random quote in the browser.
***/

function printQuote(){
  var randomQuote = getRandomQuote(); 
  console.log(randomQuote)
  var HTML = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  `

  if (randomQuote.citation) { // true
    HTML += `<span class="citation">${randomQuote.citation}</span>` 
  } 
  
  if ( randomQuote.year){ //true
    HTML += `<span class="year">${randomQuote.year}</span>` 
  }   
  HTML += "</p>" 
  document.getElementById('quote-box').innerHTML = HTML;
   
}


printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

