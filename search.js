// Search results


var APIKey = "582a2b11-29e9-4c48-924e-96eb94f988e2";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIKey;


    $.ajax({
      url: queryURL,
      method: "GET"


    }).then(function(response) {
      console.log(response);
    });