/******************************************
Project 1 - A Random Quote Generator
Adapted form Treehouse FSJS Techdegree
******************************************/


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/





//Made by Timofey Ivanov Sept 4th 2019


//I made an array with of objects with values
let quotes = [
  {
    tag: "Philosophy",  //Tag, is it Philosophy or Humor?
    quote: "Don't worry about what anybody else is going to do. The best way to predict the future is to invent it.", //Quote
    source: "Alan Kay", //Who said that?
    citation: "YouTube", //Where did it come from?
    year:null //What year this quote was made?
    },
  {
    tag: "Humor",
    quote: "The Internet?  We are not interested in it.",
    source: "Bill Gates",
    citation: "GitHub",
    year:"1993"
  },
  {
    tag: "Humor",
    quote: "Computer viruses are an urban legend.",
    source: "Peter Norton",
    citation: "GitHub",
    year:"1988"
  },
  {
    tag: "Philosophy",
    quote: "First, solve the problem. Then, write the code",
    source: "John Johnson",
    citation: null,
    year: null
  },
  {
    tag: "Humor",
    quote: "It's alive, my code is working!",
    source: "Timofey Ivanov",
    citation: null,
    year:"2019"
  },
  {
    tag: "Philosophy",
    quote: "Think different",
    source: "Steve Jobs",
    citation: "Apple Website",
    year:"1997"
  }
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(quotes) {
  return(quotes[Math.floor(Math.random() * quotes.length)]) //Expression to get random quote
}



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML markup in the index.html file AND the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() { //This class prints out our quote 
  var obj = getRandomQuote(quotes); //Make and objective
  var html_output = ""; //Create null string

//Use ifs statements in order to choose correct writing of quote
  if(obj.citation===null || obj.year===null){
    if(obj.citation===null && obj.year===null){
    html_output += "<p class='tag'>"+ obj.tag + "</p>" + "<p class='quote'>" + obj.quote +"</p> <p class='source'>" + obj.source + "</p>"
  }
  else{
    if(obj.citation===null){
      html_output += "<p class='tag'>"+ obj.tag + "</p>" + "<p class='quote'>" + obj.quote +"</p> <p class='source'>" + obj.source + "," + obj.year + "</p>"
    }
    else{
      html_output += "<p class='tag'>"+ obj.tag + "</p>" + "<p class='quote'>" + obj.quote +"</p> <p class='source'>" + obj.source + ", <i>" + obj.citation + "</i> </p>"
    }
  }
  }
    else
    {
  html_output += "<p class='tag'>"+ obj.tag + "</p>" + "<p class='quote'>" + obj.quote +"</p> <p class='source'>" + obj.source + ", <i>" + obj.citation + "</i>, " + obj.year + "</p>"
    }
    
  document.getElementById("quote-box").innerHTML = html_output; //Change code in html to suit our needs
  var r = Math.round(Math.random(0,254)*254) //Set up random colors as rbg
  var b = Math.round(Math.random(0,254)*254)
  var g = Math.round(Math.random(0,254)*254)
  document.body.style.backgroundColor = "rgb("+r+","+b+","+g+")"; //Let's set up background color
  document.getElementById("loadQuote").style.background="rgb("+r+","+b+","+g+")"; //Let's set up button color
  
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/


//Use of button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Every 15 seconds new quote!
window.setInterval(function(){
  printQuote();
}, 15000);

// Remember to delete the comments that came with this file, and replace them with your own code comments.